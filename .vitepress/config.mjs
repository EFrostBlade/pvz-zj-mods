import { defineConfig } from "vitepress";
import { rewriteReadmeLink } from "../scripts/content.mjs";
import { slugify, tokenize } from "./shared/catalog.mjs";

const playerItems = [
  ["玩家指南", "/guides/players/"],
  ["Windows 安装", "/guides/players/windows"],
  ["Android 安装", "/guides/players/android"],
  ["更新、停用与移除", "/guides/players/managing"],
  ["前置、冲突与联机", "/guides/players/compatibility"],
  ["常见问题", "/guides/players/faq"],
].map(([text, link]) => ({ text, link }));
const creatorItems = [
  ["创作者指南", "/guides/creators/"],
  ["制作第一个 Mod", "/guides/creators/first-mod"],
  ["发布与更新", "/guides/creators/publishing"],
  ["投稿规则", "/CONTRIBUTING"],
].map(([text, link]) => ({ text, link }));

export default defineConfig({
  lang: "zh-CN",
  title: "杂交版 Mod 社区",
  description: "发现植物大战僵尸杂交版的社区作品，学习 Mod 安装与制作。",
  base: "/pvz-zj-mods/",
  cleanUrls: false,
  lastUpdated: false,
  srcExclude: [
    "node_modules/**",
    "tests/**",
    "scripts/**",
    ".github/**",
    "**/AGENTS.md",
  ],
  rewrites: (source) => source.replace(/(^|\/)README\.md$/, "$1index.md"),
  head: [
    ["meta", { name: "theme-color", content: "#2f7d32" }],
    [
      "link",
      {
        rel: "icon",
        href: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" rx="14" fill="%232f7d32"/%3E%3Cpath d="M13 32C8 14 25 10 36 12c2 17-9 28-23 20m0 0L29 19" fill="%23d9edba" stroke="%23d9edba" stroke-width="3"/%3E%3C/svg%3E',
      },
    ],
  ],
  markdown: {
    anchor: { slugify },
    config(md) {
      md.core.ruler.after("inline", "readme-targets", (state) => {
        for (const token of state.tokens)
          for (const child of token.children || []) {
            if (child.type === "link_open")
              child.attrSet("href", rewriteReadmeLink(child.attrGet("href")));
          }
      });
    },
  },
  transformPageData(page) {
    if (["index.md", "README.md", "catalog.md"].includes(page.relativePath)) {
      page.frontmatter.layout =
        page.relativePath === "catalog.md"
          ? "CommunityCatalog"
          : "CommunityHome";
      page.frontmatter.pageClass = "community-landing";
    }
    if (
      ["MAINTAINING.md", "mods/README.md", "mods/index.md"].includes(
        page.relativePath,
      )
    )
      page.frontmatter.search = false;
  },
  themeConfig: {
    nav: [
      { text: "找 Mod", link: "/catalog", activeMatch: "^/(catalog|mods/)" },
      {
        text: "玩家指南",
        link: "/guides/players/",
        activeMatch: "^/guides/players/",
      },
      {
        text: "创作者指南",
        link: "/guides/creators/",
        activeMatch: "^/guides/creators/",
      },
      { text: "参与收录", link: "/CONTRIBUTING" },
    ],
    sidebar: {
      "/guides/players/": [{ text: "安装与游玩", items: playerItems }],
      "/guides/creators/": [{ text: "创作与分享", items: creatorItems }],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/EFrostBlade/pvz-zj-mods" },
    ],
    outline: { label: "本页内容", level: [2, 3] },
    docFooter: { prev: "上一篇", next: "下一篇" },
    sidebarMenuLabel: "章节导航",
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "外观",
    lightModeSwitchTitle: "切换到浅色",
    darkModeSwitchTitle: "切换到深色",
    editLink: {
      pattern: "https://github.com/EFrostBlade/pvz-zj-mods/edit/main/:path",
      text: "在 GitHub 上编辑此页",
    },
    footer: {
      message: "作品与下载由原作者维护 · 收录表示资料核对，不等于实机验证",
      copyright: "植物大战僵尸杂交版 Mod 社区目录",
    },
    search: {
      provider: "local",
      options: {
        _render(src, env, md) {
          if (
            [
              "README.md",
              "index.md",
              "catalog.md",
              "MAINTAINING.md",
              "mods/README.md",
              "mods/index.md",
            ].includes(env.relativePath)
          )
            return "";
          const html = md.render(src, env);
          return env.frontmatter?.search === false ? "" : html;
        },
        miniSearch: {
          options: { tokenize },
          searchOptions: { combineWith: "AND", fuzzy: false, prefix: true },
        },
        translations: {
          button: {
            buttonText: "搜索指南与作品",
            buttonAriaLabel: "搜索指南与作品",
          },
          modal: {
            displayDetails: "显示详细结果",
            resetButtonTitle: "清除搜索",
            backButtonTitle: "关闭搜索",
            noResultsText: "没有找到相关内容",
            footer: {
              selectText: "打开",
              selectKeyAriaLabel: "回车",
              navigateText: "切换",
              navigateUpKeyAriaLabel: "向上",
              navigateDownKeyAriaLabel: "向下",
              closeText: "关闭",
              closeKeyAriaLabel: "Esc",
            },
          },
        },
      },
    },
  },
});
