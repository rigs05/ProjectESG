/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          home: "#21453C",
          link: "#4FA556",
          login: "#235E4A",
          submit: "#2E9844",
        },
        gray: {
          paratext: "#9F9F9F",
          light: "#F3F3F3",
          edge: "#C9C9C9",
          dark: "#333333",
        },
        slate: {
          title: "#F3F3F3",
        },
        black: {
          dark: "#181818",
        },
        red: {
          mandatory: "#CA3C25",
        },
      },
    },
  },
  plugins: [],
};
