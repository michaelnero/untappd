import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: adapter(),
    csp: {
      mode: "auto",
      directives: {
        "connect-src": ["self", "vitals.vercel-insights.com", "vercel.live", "sockjs-us3.pusher.com"],
      }
    }
  }
};

export default config;
