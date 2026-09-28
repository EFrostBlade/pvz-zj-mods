import { test, expect } from "@playwright/test";
import { loadCatalog } from "../../scripts/content.mjs";
import { categories } from "../../.vitepress/shared/catalog.mjs";

const mods = loadCatalog(process.cwd());
const sample = mods.find((mod) => mod.tags.length) || mods[0];
const otherCategory = categories.find(
  (category) => category !== sample?.category,
);

test("首页、详情与指南可导航和刷新，明暗主题无溢出与资源错误", async ({
  page,
}, testInfo) => {
  const failures = [];
  page.on("pageerror", (error) => failures.push(error.message));
  page.on("response", (response) => {
    if (
      response.url().startsWith("http://127.0.0.1:4173/") &&
      response.status() >= 400
    )
      failures.push(`${response.status()} ${response.url()}`);
  });
  await page.goto("./");
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(
    page.getByRole("heading", { name: /让熟悉的草坪，\s*长出新的玩法。/ }),
  ).toBeVisible();
  await page.screenshot({
    path: testInfo.outputPath("home-light.png"),
    fullPage: true,
  });
  await page
    .getByRole("link", { name: "浏览 Mod", exact: false })
    .first()
    .click();
  if (sample) {
    await page
      .locator(`.mod-card h3 a[href="/pvz-zj-mods${sample.url}"]`)
      .click();
    await page.reload();
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      sample.name,
    );
    await expect(
      page.getByRole("link", { name: "在 GitHub 上编辑此页" }),
    ).toHaveAttribute(
      "href",
      "https://github.com/EFrostBlade/pvz-zj-mods/edit/main/" + sample.source,
    );
    await page.getByRole("link", { name: "安装指南", exact: true }).click();
  } else {
    await expect(
      page.getByRole("heading", { name: "这块草坪还空着" }),
    ).toBeVisible();
    await page.goto("guides/players/");
  }
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "玩家指南",
  );
  await page
    .getByRole("link", { name: "Windows 安装", exact: true })
    .last()
    .click();
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Windows 安装 Mod",
  );
  await page.goto("./");
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.screenshot({
    path: testInfo.outputPath("home-dark.png"),
    fullPage: true,
  });
  await expect
    .poll(() =>
      page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    )
    .toBe(true);
  expect(failures).toEqual([]);
});

test("筛选、无结果、URL恢复、历史返回和旧分类锚点", async ({ page }) => {
  await page.goto("catalog.html");
  await expect(page.locator(".mod-card")).toHaveCount(mods.length);
  if (!sample) {
    await expect(
      page.getByRole("heading", { name: "这块草坪还空着" }),
    ).toBeVisible();
    return;
  }
  await page.getByLabel("分类", { exact: true }).selectOption(sample.category);
  if (sample.tags.length)
    await page.getByLabel("标签", { exact: true }).selectOption(sample.tags[0]);
  await page.getByLabel("搜索作品").fill(sample.id.toUpperCase());
  await page.reload();
  await expect(page.getByLabel("搜索作品")).toHaveValue(
    sample.id.toUpperCase(),
  );
  await expect(
    page.locator(".mod-card h3 a").filter({ hasText: sample.name }),
  ).toBeVisible();
  await page.getByLabel("分类", { exact: true }).selectOption(otherCategory);
  await expect(
    page.getByRole("heading", { name: "这块草坪还空着" }),
  ).toBeVisible();
  await page.goBack();
  await expect(page.getByLabel("分类", { exact: true })).toHaveValue(
    sample.category,
  );
  await expect(
    page.locator(".mod-card h3 a").filter({ hasText: sample.name }),
  ).toBeVisible();
  await page.getByRole("button", { name: "清除筛选", exact: true }).click();
  await expect(page).toHaveURL(/\/catalog\.html$/);
  await page.goto("catalog.html#" + encodeURIComponent(otherCategory));
  await expect(page.getByLabel("分类", { exact: true })).toHaveValue(
    otherCategory,
  );
  await expect(page.getByLabel("搜索作品")).toBeInViewport();
  await expect(page.locator(".mod-card")).toHaveCount(
    mods.filter((mod) => mod.category === otherCategory).length,
  );
});

test("全站中文与 ID 搜索结果可用键盘打开", async ({ page }) => {
  await page.goto("./");
  for (const query of ["安装", "兼容", ...(sample ? [sample.id] : [])]) {
    await page.getByRole("button", { name: "搜索指南与作品" }).click();
    const input = page.locator("#localsearch-input");
    await input.fill(query);
    await expect(
      page.locator(".VPLocalSearchBox .results a").first(),
    ).toBeVisible();
    await input.press("Escape");
  }
  await page.getByRole("button", { name: "搜索指南与作品" }).click();
  await page.locator("#localsearch-input").fill("网站开发与发布");
  await expect(page.getByText("没有找到相关内容")).toBeVisible();
  await page.locator("#localsearch-input").fill(sample?.id || "安装");
  await expect(
    page.locator(".VPLocalSearchBox .results a").first(),
  ).toBeVisible();
  await page.locator("#localsearch-input").press("ArrowDown");
  await page.locator("#localsearch-input").press("Enter");
  await expect(page).toHaveURL((url) =>
    sample
      ? url.pathname.endsWith(sample.url)
      : url.pathname.includes("/guides/"),
  );
});
