/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["white"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#568412",
        secondary: "#5fa817",
        danger: "#DC2626",
        success: "#16A34A",
        editButton: "#2F6CD0",
        borderColor: "#f1f1f1",
        text_paragraph: "#4a5568",
        heading: "#222",
      },
    },
  },
  plugins: [require("daisyui")],
};
