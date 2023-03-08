module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  darkMode: 'media', // set darkMode to 'media'

  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        mf: '990px',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(120%)',
            transform: 'translateX(120%)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'translateX(0%)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
      },
      // add dark mode colors
      colors: {
        'dark-gray': '#1F2937',
        'light-gray': '#F5F7FA',
        'dark-blue': '#1E3A8A',
        'light-blue': '#3B82F6',
        'dark-green': '#065F46',
        'light-green': '#10B981',
        'dark-red': '#7B0E0E',
        'light-red': '#EF4444',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}