import DefaultTheme from "vitepress/theme-without-fonts";
import HomePage from "./components/HomePage.vue";
import CatalogPage from "./components/CatalogPage.vue";
import "./style.css";
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("CommunityHome", HomePage);
    app.component("CommunityCatalog", CatalogPage);
  },
};
