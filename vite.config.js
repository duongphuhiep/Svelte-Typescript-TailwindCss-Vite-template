import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import postcss from "./postcss.config.js";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    //global: true,
    environment: `jsdom`,
  },
});
