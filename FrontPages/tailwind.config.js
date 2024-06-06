/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          home: "#21453C",
          link: "#4FA556",
        },
        gray: {
          paratext: "#9F9F9F",
        },
      },
    },
  },
  plugins: [],
};
