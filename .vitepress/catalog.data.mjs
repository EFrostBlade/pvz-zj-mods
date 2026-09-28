import { loadCatalog } from "../scripts/content.mjs";
import { fileURLToPath } from "node:url";
export default {
  watch: ["../catalog.md", "../mods/**/*.md"],
  load() {
    return loadCatalog(fileURLToPath(new URL("../", import.meta.url)));
  },
};
