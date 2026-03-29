import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mattkaszubski.com",
  trailingSlash: "always",
  integrations: [sitemap()],
});
