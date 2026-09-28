<script setup>
import { computed, onMounted, onBeforeUnmount, reactive } from "vue";
import { withBase } from "vitepress";
import { data as mods } from "../../catalog.data.mjs";
import {
  categories,
  filterMods,
  readFilters,
  filterQuery,
} from "../../shared/catalog.mjs";
import ModCard from "./ModCard.vue";
const tags = computed(() =>
  [...new Set(mods.flatMap((mod) => mod.tags))].sort((a, b) =>
    a.localeCompare(b, "zh-CN"),
  ),
);
const filters = reactive({ q: "", category: "", tag: "" });
const results = computed(() => filterMods(mods, filters));
function restore() {
  Object.assign(
    filters,
    readFilters(location.search, location.hash, tags.value),
  );
}
function update(replace = false) {
  const url = location.pathname + filterQuery(filters);
  if (url !== location.pathname + location.search + location.hash)
    history[replace ? "replaceState" : "pushState"]({}, "", url);
}
function reset() {
  Object.assign(filters, { q: "", category: "", tag: "" });
  update();
}
onMounted(() => {
  restore();
  window.addEventListener("popstate", restore);
  window.addEventListener("hashchange", restore);
});
onBeforeUnmount(() => {
  window.removeEventListener("popstate", restore);
  window.removeEventListener("hashchange", restore);
});
</script>

<template>
  <main class="community-shell catalog-page">
    <header class="catalog-heading">
      <p class="eyebrow">发现社区的新点子</p>
      <h1>找一个 Mod，<span>开始新的尝试。</span></h1>
      <p>
        这里收录作品资料与作者发布入口。下载前，记得查看详情中的版本、平台与兼容依据。
      </p>
    </header>
    <div class="legacy-anchors" aria-hidden="true">
      <span v-for="category in categories" :id="category" :key="category" />
    </div>
    <form class="filter-panel" aria-label="筛选 Mod" @submit.prevent="update()">
      <label class="keyword-label"
        >搜索作品<input
          v-model="filters.q"
          type="search"
          placeholder="名称、作者、Mod ID 或关键词"
          @input="update(true)"
      /></label>
      <label
        >分类<select
          v-model="filters.category"
          aria-label="分类"
          @change="update()"
        >
          <option value="">全部分类</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select></label
      >
      <label
        >标签<select v-model="filters.tag" aria-label="标签" @change="update()">
          <option value="">全部标签</option>
          <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
        </select></label
      >
      <button type="button" class="reset-button" @click="reset">
        清除筛选
      </button>
    </form>
    <div class="catalog-toolbar">
      <p role="status" aria-live="polite">
        找到 <strong>{{ results.length }}</strong> 个作品
      </p>
      <span>按目录顺序展示</span>
    </div>
    <div class="mod-grid">
      <ModCard v-for="mod in results" :key="mod.id" :mod="mod" />
    </div>
    <section v-if="!results.length" class="empty-state">
      <span class="empty-icon" aria-hidden="true">↗</span>
      <h2>这块草坪还空着</h2>
      <p>试试其他关键词或分类，也欢迎推荐你喜欢的作品。</p>
      <button class="button secondary" @click="reset">清除筛选</button
      ><a class="text-link" :href="withBase('/CONTRIBUTING.html')"
        >推荐一个 Mod →</a
      >
    </section>
    <div class="catalog-note">
      <span aria-hidden="true">↳</span>
      <p>
        收录表示资料已核对，实际兼容情况请查看作品详情中的作者声明与实测记录。
      </p>
      <a :href="withBase('/guides/players/compatibility.html')"
        >了解兼容信息 →</a
      >
    </div>
  </main>
</template>
