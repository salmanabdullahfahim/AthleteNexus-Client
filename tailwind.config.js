/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#6674cc",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6674cc",

          "secondary": "#F000B8",

          "accent": "#37CDBE",

          "dark": "#",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],

  },
  plugins: [require("daisyui")],
}

