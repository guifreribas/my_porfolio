import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["ca", "es", "en"],
  },

  integrations: [tailwind()],
});