/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          grey: "#AEB3BE",
          black: "#212830",
        },
        secondary: {
          lavender: "#DAE0FF",
          coral: "#FFDCD9",
          lime: "#D8FCBA",
        },
        coral: "#FFA69E",
        green: "#BCF095",
        lavender: "#AEBBFE",
        whiteMainBg: "#FFFAFA",
      },
    },
  },
  plugins: [],
};
