import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    host: !!process.env.CODESPACES
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  }
});
