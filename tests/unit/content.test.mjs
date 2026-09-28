import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  parseMod,
  parseCatalog,
  loadCatalog,
  checkContent,
  rewriteReadmeLink,
  pageUrl,
} from "../../scripts/content.mjs";
import {
  categories,
  filterMods,
  filterQuery,
  readFilters,
  tokenize,
} from "../../.vitepress/shared/catalog.mjs";

const detail = `# 示例作品

| 项目 | 内容 |
| --- | --- |
| Mod ID | \`Example.ID\` |
| 作者 | [作者](https://example.com)（投稿人提供） |
| 主分类 | 工具与前置 |
| 标签 | 冷却、显示，辅助 |
| 当前收录版本 | \`1.2.3\` |
| 适用游戏版本 | 历史声明 0.28，当前未确认 |
| 平台 | Windows，Android 未确认 |
| 前置依赖 | 未确认 |
| 已知冲突 | 未确认 |
| 联机说明 | 未确认 |
| 作者维护状态 | 未确认 |
| 信息核对日期 | 2026-09-28 |
`;
function catalog(
  entries = "- [示例作品](mods/alias/README.md) — 作者：作者｜显示计时信息。",
) {
  return (
    "# Mod 目录\n\n" +
    categories
      .map(
        (category) =>
          `## ${category}\n\n${category === "工具与前置" ? entries : "暂无收录。"}\n`,
      )
      .join("\n")
  );
}
function withFixture(fn) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "pvz-site-test-"));
  try {
    fs.mkdirSync(path.join(root, "mods/alias"), { recursive: true });
    fs.mkdirSync(path.join(root, "guides"));
    for (const file of [
      "README.md",
      "CONTRIBUTING.md",
      "MAINTAINING.md",
      "mods/README.md",
    ])
      fs.writeFileSync(path.join(root, file), "# 指南\n");
    fs.writeFileSync(path.join(root, "catalog.md"), catalog());
    fs.writeFileSync(path.join(root, "mods/alias/README.md"), detail);
    fn(root);
  } finally {
    assert.equal(path.dirname(path.resolve(root)), path.resolve(os.tmpdir()));
    assert.ok(path.basename(root).startsWith("pvz-site-test-"));
    fs.rmSync(root, { recursive: true });
  }
}

test("从真实 Markdown 表格提取展示字段，保留真实 ID 与目录别名", () => {
  const mod = parseMod(detail, "mods/alias/README.md");
  assert.equal(mod.id, "Example.ID");
  assert.equal(mod.author, "作者（投稿人提供）");
  assert.deepEqual(mod.tags, ["冷却", "显示", "辅助"]);
  assert.equal(mod.version, "1.2.3");
  assert.equal(mod.url, "/mods/alias/");
});
test("缺失字段和无效日期应拒绝，不能默默生成不完整卡片", () => {
  assert.throws(
    () => parseMod(detail.replace("| Mod ID | `Example.ID` |", ""), "bad.md"),
    /缺少字段 Mod ID/,
  );
  assert.throws(
    () => parseMod(detail.replace("2026-09-28", "2026-02-30"), "bad.md"),
    /日期格式错误/,
  );
});
test("目录提取简介，并拒绝分类不一致与不区分大小写的重复 ID", () =>
  withFixture((root) => {
    assert.equal(loadCatalog(root)[0].summary, "显示计时信息。");
    fs.writeFileSync(
      path.join(root, "mods/alias/README.md"),
      detail.replace("| 主分类 | 工具与前置 |", "| 主分类 | 玩法调整 |"),
    );
    assert.throws(() => loadCatalog(root), /主分类不一致/);
    fs.writeFileSync(path.join(root, "mods/alias/README.md"), detail);
    fs.mkdirSync(path.join(root, "mods/second"));
    fs.writeFileSync(
      path.join(root, "mods/second/README.md"),
      detail.replace("Example.ID", "example.id"),
    );
    fs.appendFileSync(
      path.join(root, "catalog.md"),
      "\n- [重复作品](mods/second/README.md) — 作者：作者｜重复。\n",
    );
    assert.throws(() => loadCatalog(root), /重复 Mod ID/);
  }));
test("未收录条目与错误内部锚点会阻止发布", () =>
  withFixture((root) => {
    assert.equal(checkContent(root).mods.length, 1);
    fs.writeFileSync(
      path.join(root, "README.md"),
      "# 指南\n[错误链接](CONTRIBUTING.md#不存在)\n",
    );
    assert.throws(() => checkContent(root), /锚点不存在/);
    fs.writeFileSync(path.join(root, "README.md"), "# 指南\n");
    fs.mkdirSync(path.join(root, "mods/orphan"));
    assert.throws(() => checkContent(root), /未进入目录/);
  }));
test("README 路由转换保留查询与锚点，不触碰外部地址", () => {
  assert.equal(
    rewriteReadmeLink("../../guides/players/README.md?q=1#安装"),
    "../../guides/players/index.md?q=1#安装",
  );
  assert.equal(rewriteReadmeLink("README.md"), "index.md");
  assert.equal(
    rewriteReadmeLink("https://example.com/README.md"),
    "https://example.com/README.md",
  );
  assert.equal(rewriteReadmeLink("#README.md"), "#README.md");
  assert.equal(
    pageUrl("guides/players/windows.md"),
    "/guides/players/windows.html",
  );
});
test("筛选组合按交集匹配，ID忽略大小写，URL与旧分类锚点可恢复", () => {
  const mods = [
    { ...parseMod(detail, "mods/alias/README.md"), summary: "显示战斗计时" },
  ];
  const filters = { q: "EXAMPLE 计时", category: "工具与前置", tag: "冷却" };
  assert.equal(filterMods(mods, filters).length, 1);
  assert.equal(
    filterMods(mods, { ...filters, category: "玩法调整" }).length,
    0,
  );
  assert.deepEqual(readFilters(filterQuery(filters), "", ["冷却"]), filters);
  assert.equal(
    readFilters("", "#%E5%B7%A5%E5%85%B7%E4%B8%8E%E5%89%8D%E7%BD%AE", [])
      .category,
    "工具与前置",
  );
  assert.deepEqual(readFilters("?category=无效&tag=不存在", "#%invalid", []), {
    q: "",
    category: "",
    tag: "",
  });
});
test("中文查询能使用同一分词规则命中文本中的词，ID保持完整", () => {
  const indexed = tokenize(
    "如何安装并启用 Mod，显示冷却倒计时 healthcooldowndisplay",
  );
  for (const query of ["安装", "冷却", "healthcooldowndisplay"])
    for (const term of tokenize(query)) assert.ok(indexed.includes(term));
});
test("真实主分支内容通过发布检查，目录解析不吸收示例代码块", () => {
  assert.doesNotThrow(() => checkContent(process.cwd()));
  assert.equal(
    parseCatalog(
      catalog() + "\n```md\n[伪条目](mods/fake/README.md)｜示例\n```",
    ).length,
    1,
  );
});

test("最后一个作品撤下后，空目录仍能通过发布检查", () =>
  withFixture((root) => {
    fs.unlinkSync(path.join(root, "mods/alias/README.md"));
    fs.rmdirSync(path.join(root, "mods/alias"));
    fs.writeFileSync(path.join(root, "catalog.md"), catalog("暂无收录。"));
    assert.deepEqual(checkContent(root).mods, []);
  }));
