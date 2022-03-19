module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: { 
    fontFamily: {
      'serif': [ 'Haar', 'Georgia', 'Times'],
      'trajan':[ 'Trajan', 'Georgia', 'Times'], 
    },
    extend: {
      colors: {
        'primary': "hsl(356, 86.1%, 33.9%)",
        'gradient-blue': "#395f9b",
      },
      backgroundPosition: {
        'top-4': 'center top',
      },
      dropShadow: {
        'white': '0 0 3px hsl(0, 0%, 100%)',
      },
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
