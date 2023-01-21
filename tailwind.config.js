/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    colors: {
      'dark-blue': '#10024A',
      'blue': '#2F06D2',
      'white': '#FFFFFF',
      'grey': 'B9B9B9',
      'black': '#000000',
      'yellow': '#EFE168',
      'pink': '#E98EAD',
    },
    backgroundImage: {
      'footer': "url('https://www.modaes.es/files/2020/empresas/ecoalf/ecoalf-tienda-fuera-because-there-is-no-planet-B-948.jpg')",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '32': '2rem',
        '16': '1rem',
        '80': '5rem'
      },
      borderRadius: {
        '4xl': '2rem',
        'circle': '100%'
      },
      sizing: {
        '120': '480px',
      }
    }
  },
  plugins: [],
};
