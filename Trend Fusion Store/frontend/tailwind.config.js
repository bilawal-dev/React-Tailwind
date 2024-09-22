/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif']
      },
      colors: {
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
      },
      screens: {
        'max-900': { 'max': '900px' }, // Custom max-width breakpoint
        'max-sm': { 'max': '639px' },  // Custom max-width breakpoint for 'sm'
        'max-md': { 'max': '767px' },  // Custom max-width breakpoint for 'md'
        'max-lg': { 'max': '1023px' }, // Custom max-width breakpoint for 'lg'
        'max-xl': { 'max': '1279px' }, // Custom max-width breakpoint for 'xl'
        'max-2xl': { 'max': '1535px' }, // Custom max-width breakpoint for '2xl'
      },
    },
  },
  plugins: [
    //To Add Custom Scollbar When Too Much Products In Cart :  
    require('tailwind-scrollbar'),
  ],
}