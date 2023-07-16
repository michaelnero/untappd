const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"]
    },
    extend: {
      colors: {
        "untappd-dark": {
          "50": "#e8e9eb",
          "100": "#d2d3d6",
          "200": "#a5a7ad",
          "300": "#777b84",
          "400": "#4a4f5b",
          "500": "#1d2332",
          "600": "#171c28",
          "700": "#11151e",
          "800": "#0c0e14",
          "900": "#06070a",
          "950": "#030305",
        },
        "untappd-dark-blue": "#1c4aba",
        "untappd-blue": "#039aff",
        "untappd-yellow": "#ffdb57",
        "untappd-orange": "#ffae45",
        "untappd-green": "#2ecb98",
        "untappd-pink": "#f9bbc6",
        "untappd-alice-blue": "#f2f9ff",
        "untappd-white-smoke": "#f8fafc",
        "untappd-gray": "#6b738a",
      }
    }
  },

  plugins: [forms, typography]
};

module.exports = config;
