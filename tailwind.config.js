/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ecom: "url('../public/ecommerse.jpg')",
        exp: "url('../public/expense.jpg')",
        mail: "url('../public/mailbox.jpg')",
      },
    },
    fontFamily: {
      sig: ["Great Vibes"],
    },
  },
  plugins: [],
};
