/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'myCyan': 'hsl(193, 38%, 86%)',
        'myNeonGreen': 'hsl(150, 100%, 66%)',
        'myGrayishBlue': 'hsl(217, 19%, 24%)',
        'myDarkBlue': 'hsl(218, 23%, 16%)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans'],
      },
      letterSpacing: {
        moreWidest: '0.3em',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      boxShadow: {
        shadowOnAllSides: '0 0 50px 0 hsl(150, 100%, 66%)',
      }
    },
  },
  plugins: [],
}
