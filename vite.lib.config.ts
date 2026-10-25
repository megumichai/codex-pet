import { resolve } from "node:path";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    dts({
      bundleTypes: true,
    }),
  ],
  build: {
    outDir: "build",
    target: "ES2022",
    copyPublicDir: false,
    lib: {
      entry: resolve(import.meta.dirname, "src/lib/index.ts"),
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vite", /^node:/],
    },
  },
});
