/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // This ensures Tailwind scans these files
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        semiBold: 600, // Adds a custom font weight for semi-bold
      },
      fontSize: {
        '33px': '33px', // Optional: if you need a specific font size
      },
    },
  },
  plugins: [],
}
