import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/advice-api-generator/",
  //   build: {
  //     rollupOptions: {
  //       input: {
  //         // main: resolve(__dirname, "index.html"),
  //       },
  //     },
  //   },
  build: {
    target: "ES2022", // <--------- ✅✅✅✅✅✅
  },
});
