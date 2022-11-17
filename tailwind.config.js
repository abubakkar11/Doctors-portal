/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        Doctor: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#1A1A1A",
          "base-100": "#FFFFFF",
          "info": "#4AA8BF",
          "success": "#81328F",
          "warning": "#EF8234",
          "error": "#EA4034",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
