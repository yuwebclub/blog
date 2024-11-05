import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "ja-JP",
  title: "ユのWeb開発クラブ",
  description: "ユのWeb開発クラブ公式サイト",
  theme,
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
