export const categories = [
  "综合扩展",
  "角色与卡牌",
  "关卡与地图",
  "玩法调整",
  "外观与音效",
  "工具与前置",
];
export const categoryDescriptions = [
  "多种内容，一次探索",
  "新伙伴与新对手",
  "新的地图与挑战",
  "改变熟悉的玩法",
  "换一种视听体验",
  "让游玩更方便",
];

export function filterMods(mods, { q = "", category = "", tag = "" } = {}) {
  const terms = q.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return mods.filter((mod) => {
    const text = [mod.name, mod.id, mod.author, mod.summary, ...mod.tags]
      .join(" ")
      .toLocaleLowerCase();
    return (
      (!category || mod.category === category) &&
      (!tag || mod.tags.includes(tag)) &&
      terms.every((term) => text.includes(term))
    );
  });
}

export function readFilters(search, hash, tags) {
  const params = new URLSearchParams(search);
  let anchor = "";
  try {
    anchor = decodeURIComponent(hash.replace(/^#/, ""));
  } catch {
    /* Ignore malformed external fragments. */
  }
  const category = params.has("category") ? params.get("category") : anchor;
  return {
    q: params.get("q") || "",
    category: categories.includes(category) ? category : "",
    tag: tags.includes(params.get("tag")) ? params.get("tag") : "",
  };
}

export function filterQuery(filters) {
  const params = new URLSearchParams();
  for (const key of ["q", "category", "tag"])
    if (filters[key]) params.set(key, filters[key]);
  return params.size ? `?${params}` : "";
}

export function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}_\-\s]/gu, "")
    .replace(/\s/g, "-");
}

// The same deterministic tokenizer runs during indexing and in the browser.
// Chinese unigrams and bigrams allow substring queries without shipping a dictionary.
export function tokenize(text) {
  const tokens = [];
  for (const match of text
    .toLowerCase()
    .matchAll(/[\p{Script=Han}]+|[a-z0-9_.-]+/gu)) {
    const word = match[0];
    if (/\p{Script=Han}/u.test(word)) {
      const chars = [...word];
      tokens.push(...chars);
      for (let i = 0; i + 1 < chars.length; i++)
        tokens.push(chars[i] + chars[i + 1]);
    } else tokens.push(word);
  }
  return tokens;
}
