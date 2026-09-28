<script setup>
import { withBase } from "vitepress";
defineProps({ mod: { type: Object, required: true } });
</script>

<template>
  <article class="mod-card">
    <div class="card-top">
      <span class="category-pill">{{ mod.category }}</span
      ><span class="version">v{{ mod.version }}</span>
    </div>
    <h3>
      <a :href="withBase(mod.url)">{{ mod.name }}</a>
    </h3>
    <p class="mod-author">{{ mod.author }}</p>
    <p class="mod-summary">{{ mod.summary }}</p>
    <ul v-if="mod.tags.length" class="tag-list" aria-label="作品标签">
      <li v-for="tag in mod.tags" :key="tag">{{ tag }}</li>
    </ul>
    <div class="card-bottom">
      <span
        >资料核对
        <time :datetime="mod.checkedAt">{{ mod.checkedAt }}</time></span
      ><span aria-hidden="true">↗</span>
    </div>
  </article>
</template>
