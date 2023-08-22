/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },

      colors: {
        "gray-20": "#D4F0D3",
        "primary-gray": "#678F66",
        "primary-gray-200": "#66835D",
        "primary-gray-500": "#253022",
        "secondary-gray-200": "#97DB95",
        "secondary-gray-300": "#379834",
        "secondary-gray-700": "#A38A00",
      },
      backgroundImage: (theme) => ({
        homeimage: "url('/survey.jpeg')",
      }),
    },
  },
  plugins: [],
};
