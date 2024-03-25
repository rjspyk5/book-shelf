/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pri: "#23BE0A",
    },
  },
  plugins: [require("daisyui")],
};
