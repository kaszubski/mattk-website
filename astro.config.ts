import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://capitaljs.com",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
