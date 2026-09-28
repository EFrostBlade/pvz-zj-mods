import fs from "node:fs";
import path from "node:path";
import MarkdownIt from "markdown-it";
import { categories, slugify } from "../.vitepress/shared/catalog.mjs";

const md = new MarkdownIt();
const requiredFields = [
  "Mod ID",
  "作者",
  "主分类",
  "标签",
  "当前收录版本",
  "适用游戏版本",
  "平台",
  "前置依赖",
  "已知冲突",
  "联机说明",
  "作者维护状态",
  "信息核对日期",
];
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
const plain = (token) =>
  (token.children || [])
    .filter((t) => ["text", "code_inline", "image"].includes(t.type))
    .map((t) => t.content)
    .join("")
    .trim();
const read = (filename) =>
  fs.readFileSync(filename, "utf8").replace(/^\uFEFF/, "");

export function rewriteReadmeLink(href) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) return href;
  return href.replace(/(^|\/)README\.md(?=[?#]|$)/, "$1index.md");
}

export function pageUrl(source) {
  return (
    "/" + source.replace(/(^|\/)README\.md$/, "$1").replace(/\.md$/, ".html")
  );
}

export function parseMod(source, sourcePath) {
  const tokens = md.parse(source, {});
  const h1s = tokens.flatMap((t, i) =>
    t.type === "heading_open" && t.tag === "h1" ? [tokens[i + 1]] : [],
  );
  assert(h1s.length === 1, `${sourcePath}: 需要一个作品主标题`);
  const fields = new Map();
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type !== "table_open") continue;
    const rows = [];
    for (i++; i < tokens.length && tokens[i].type !== "table_close"; i++) {
      if (tokens[i].type !== "tr_open") continue;
      const cells = [];
      while (i < tokens.length && tokens[i].type !== "tr_close") {
        if (tokens[i].type === "inline") cells.push(tokens[i]);
        i++;
      }
      rows.push(cells);
    }
    if (rows[0]?.map(plain).join("|") !== "项目|内容") continue;
    for (const cells of rows.slice(1)) {
      assert(cells.length === 2, `${sourcePath}: 资料表格必须有两列`);
      const key = plain(cells[0]);
      assert(!fields.has(key), `${sourcePath}: 字段重复 ${key}`);
      fields.set(key, plain(cells[1]));
    }
  }
  for (const field of requiredFields)
    assert(fields.get(field), `${sourcePath}: 缺少字段 ${field}`);
  assert(categories.includes(fields.get("主分类")), `${sourcePath}: 未知分类`);
  const date = fields.get("信息核对日期");
  assert(
    /^\d{4}-\d{2}-\d{2}$/.test(date) &&
      Number.isFinite(Date.parse(date)) &&
      new Date(date).toISOString().startsWith(date),
    `${sourcePath}: 核对日期格式错误`,
  );
  return {
    id: fields.get("Mod ID"),
    name: plain(h1s[0]),
    author: fields.get("作者"),
    category: fields.get("主分类"),
    tags:
      fields.get("标签") === "无"
        ? []
        : [
            ...new Set(
              fields
                .get("标签")
                .split(/[、,，]/)
                .map((t) => t.trim())
                .filter(Boolean),
            ),
          ],
    version: fields.get("当前收录版本"),
    checkedAt: date,
    source: sourcePath,
    url: pageUrl(sourcePath),
  };
}

export function parseCatalog(source) {
  const tokens = md.parse(source, {});
  const entries = [];
  const headings = [];
  let category = "";
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type === "heading_open" && tokens[i].tag === "h2") {
      category = plain(tokens[i + 1]);
      headings.push(category);
    }
    if (tokens[i].type !== "inline") continue;
    const children = tokens[i].children || [];
    const targets = children
      .filter((t) => t.type === "link_open")
      .map((t) => t.attrGet("href"))
      .filter((href) => /^mods\//.test(href));
    if (!targets.length) continue;
    assert(
      categories.includes(category),
      `catalog.md: 作品没有有效分类 ${category}`,
    );
    assert(
      targets.length === 1 && /^mods\/[^/]+\/README\.md$/.test(targets[0]),
      "catalog.md: 作品链接必须指向一个详情 README.md",
    );
    const text = plain(tokens[i]);
    const divider = text.indexOf("｜");
    assert(
      divider !== -1 && text.slice(divider + 1).trim(),
      `catalog.md: ${targets[0]} 缺少 ｜ 后的一句话介绍`,
    );
    entries.push({
      source: targets[0],
      category,
      summary: text.slice(divider + 1).trim(),
    });
  }
  assert(
    headings.join("|") === categories.join("|"),
    "catalog.md: 六个分类必须按既定顺序各出现一次",
  );
  return entries;
}

export function loadCatalog(root) {
  const entries = parseCatalog(read(path.join(root, "catalog.md")));
  const sources = new Set(),
    ids = new Set();
  return entries.map((entry) => {
    assert(!sources.has(entry.source), `catalog.md: 重复条目 ${entry.source}`);
    sources.add(entry.source);
    const filename = path.resolve(root, entry.source);
    assert(
      filename.startsWith(path.resolve(root, "mods") + path.sep) &&
        fs.existsSync(filename),
      `catalog.md: 详情页不存在 ${entry.source}`,
    );
    const mod = parseMod(read(filename), entry.source);
    assert(
      entry.category === mod.category,
      `${entry.source}: 目录与详情主分类不一致`,
    );
    assert(
      !ids.has(mod.id.toLowerCase()),
      `${entry.source}: 重复 Mod ID ${mod.id}`,
    );
    ids.add(mod.id.toLowerCase());
    return { ...mod, summary: entry.summary };
  });
}

function markdownFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory()
      ? markdownFiles(filename)
      : entry.name.endsWith(".md")
        ? [filename]
        : [];
  });
}

export function checkContent(root) {
  const mods = loadCatalog(root);
  const files = [
    "README.md",
    "catalog.md",
    "CONTRIBUTING.md",
    "MAINTAINING.md",
    ...markdownFiles(path.join(root, "guides")).map((f) =>
      path.relative(root, f).replaceAll("\\", "/"),
    ),
    ...markdownFiles(path.join(root, "mods")).map((f) =>
      path.relative(root, f).replaceAll("\\", "/"),
    ),
  ];
  const approved = new Set(mods.map((m) => m.source));
  for (const entry of fs.readdirSync(path.join(root, "mods"), {
    withFileTypes: true,
  })) {
    if (entry.isDirectory())
      assert(
        approved.has(`mods/${entry.name}/README.md`),
        `未进入目录的作品：mods/${entry.name}/README.md`,
      );
  }
  for (const category of categories) {
    const paths = mods
      .filter((m) => m.category === category)
      .map((m) => m.source);
    assert(
      paths.join("|") === [...paths].sort().join("|"),
      `catalog.md: ${category} 应按目录名排序`,
    );
  }
  const parsed = new Map(
    files.map((f) => [f, md.parse(read(path.join(root, f)), {})]),
  );
  const anchors = new Map();
  for (const [file, tokens] of parsed) {
    const used = new Set();
    for (let i = 0; i < tokens.length; i++)
      if (tokens[i].type === "heading_open") {
        const slug = slugify(plain(tokens[i + 1]));
        let value = slug,
          n = 1;
        while (used.has(value)) value = `${slug}-${n++}`;
        used.add(value);
      }
    anchors.set(file, used);
  }
  let links = 0;
  for (const [file, tokens] of parsed)
    for (const token of tokens)
      for (const child of token.children || []) {
        if (!["link_open", "image"].includes(child.type)) continue;
        const href = child.attrGet(child.type === "image" ? "src" : "href");
        if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)) continue;
        const url = new URL(href, `https://local.invalid/${file}`);
        const target = decodeURIComponent(url.pathname).slice(1);
        assert(
          fs.existsSync(path.join(root, target)),
          `${file}: 内部链接不存在 ${href}`,
        );
        if (child.type === "link_open" && target.endsWith(".md"))
          assert(parsed.has(target), `${file}: 链接指向未发布文档 ${href}`);
        if (url.hash && anchors.has(target))
          assert(
            anchors.get(target).has(decodeURIComponent(url.hash.slice(1))),
            `${file}: 锚点不存在 ${href}`,
          );
        links++;
      }
  return { mods, files, links };
}
