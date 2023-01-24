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
    maxWidth: {
      '1/2':'50%',
    },
    minWidth: {
      '16': '16px',
      '1/5':'20%',
      '4/5':'80%',
    },
    colors: {
      'dark-blue': '#10024A',
      'blue': '#1B4DB1',
      'white': '#FFFFFF',
      'grey': '#B9B9B9',
      'black': '#000000',
      'yellow': '#EFE168',
      'pink': '#E98EAD',
    },
    backgroundImage: {
      'footer': "url('https://www.modaes.es/files/2020/empresas/ecoalf/ecoalf-tienda-fuera-because-there-is-no-planet-B-948.jpg')",
      'main' : "url('https://www.launica.mx/wp-content/uploads/2022/08/Queretaro-Metropolitano-Arcos-1024x683.jpg')"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      '20' : '3vmin',
    },
    margin: {
      '10' : '10px'
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
