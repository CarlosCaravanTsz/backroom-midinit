/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'heading': "'Oswald', sans-serif",
        'subheading': "'Parisienne', cursive",
        'body': "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};

