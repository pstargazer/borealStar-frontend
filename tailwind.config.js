/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: ['selector'],
  theme: {
    container: {
      center: true,
      margin: 'auto',
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      // padding: {
      //   DEFAULT: '1rem',
      //   sm: '2rem',
      //   lg: '4rem',
      //   xl: '5rem',
      //   '2xl': '6rem',
      // },
    },
    fontFamily: {
      kelly:'Kelly Slab',
      lato: 'Lato'
    },

    
    extend: {
      fontFamily: {
        rubik: ['Rubik','sans-serif'],
      },

      colors: {
        
        day: {
          bg: '#3E3951',
          bg_lighter: '#443F5A',
          bg_block: '#54525D'
        },
        night: {
          bg: '#3E3951',
          bg_lighter: '#443F5A',
          bg_block: '#54525D'
        }
      }
    },
  },

}