<script setup>
import { computed } from "vue";
import { withBase } from "vitepress";
import { data as mods } from "../../catalog.data.mjs";
import { categories, categoryDescriptions } from "../../shared/catalog.mjs";
import ModCard from "./ModCard.vue";
const recent = computed(() =>
  [...mods]
    .sort(
      (a, b) =>
        b.checkedAt.localeCompare(a.checkedAt) ||
        a.source.localeCompare(b.source),
    )
    .slice(0, 6),
);
</script>

<template>
  <main class="community-shell home-page">
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot" />由社区创作，一起探索</p>
        <h1 id="home-title">让熟悉的草坪，<br /><span>长出新的玩法。</span></h1>
        <p class="hero-description">
          发现植物大战僵尸杂交版的社区 Mod。<br />从安装第一个作品，到分享自己的新点子。
        </p>
        <div class="hero-actions">
          <a class="button primary" :href="withBase('/catalog.html')"
            >浏览 Mod <span aria-hidden="true">→</span></a
          ><a class="button secondary" :href="withBase('/guides/players/')"
            >安装指南</a
          >
        </div>
        <p class="hero-note">
          指南基于 0.29.0 · {{ mods.length }} 个已收录作品
        </p>
      </div>
      <div class="garden" aria-hidden="true">
        <div class="garden-sun" />
        <div class="garden-grid" />
        <svg class="garden-sprout" viewBox="0 0 260 240" fill="none">
          <path
            d="M132 210V95"
            stroke="currentColor"
            stroke-width="14"
            stroke-linecap="round"
          />
          <path
            d="M132 147C53 151 36 95 42 61c63-6 99 27 90 86Z"
            fill="currentColor"
          />
          <path
            d="M132 112C114 47 163 21 219 26c5 54-32 101-87 86Z"
            fill="currentColor"
          />
          <path
            d="m66 85 62 58m58-87-51 50"
            stroke="#f1f5dc"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
        <span class="garden-label">一块草坪，无限可能。</span>
        <div class="garden-stamp">MOD<br /><span>COMMUNITY</span></div>
      </div>
    </section>

    <section class="category-section" aria-labelledby="categories-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">发现你的下一种玩法</p>
          <h2 id="categories-title">从喜欢的内容开始</h2>
        </div>
        <a class="text-link" :href="withBase('/catalog.html')"
          >全部作品 <span aria-hidden="true">→</span></a
        >
      </div>
      <div class="category-grid">
        <a
          v-for="(category, i) in categories"
          :key="category"
          class="category-tile"
          :href="
            withBase('/catalog.html') +
            '?category=' +
            encodeURIComponent(category)
          "
          ><span class="category-number" aria-hidden="true">0{{ i + 1 }}</span>
          <h3>{{ category }}</h3>
          <p>{{ categoryDescriptions[i] }}</p>
          <span class="category-count"
            >{{ mods.filter((m) => m.category === category).length }} 个作品
            <span aria-hidden="true">↗</span></span
          ></a
        >
      </div>
    </section>

    <section class="recent-section" aria-labelledby="recent-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">社区资料持续整理中</p>
          <h2 id="recent-title">最近核对的作品</h2>
        </div>
        <span class="section-note">核对日期不代表作品发布日期</span>
      </div>
      <div class="mod-grid">
        <ModCard v-for="mod in recent" :key="mod.id" :mod="mod" />
      </div>
      <p v-if="!recent.length" class="empty-state">
        还没有收录作品，欢迎分享你的发现。
      </p>
    </section>

    <section class="join-panel">
      <div>
        <p class="eyebrow">把你的创意带到草坪上</p>
        <h2>玩过之后，也来创造。</h2>
        <p>从一个小关卡开始，学习制作、发布，再把作品分享给更多玩家。</p>
      </div>
      <div class="join-actions">
        <a class="button primary" :href="withBase('/guides/creators/')"
          >创作者指南 <span aria-hidden="true">→</span></a
        ><a class="text-link" :href="withBase('/CONTRIBUTING.html')"
          >已有作品？参与收录</a
        >
      </div>
    </section>
  </main>
</template>
