// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import webfontDownload from "vite-plugin-webfont-dl";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    // @ts-ignore
    webfontDownload(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  site: "https://gruppe5org.github.io",
  base: "archive",
});