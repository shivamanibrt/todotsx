module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        customBlue: '#071E3D',
      },
      textColor: {
        white: '#ffffff',
        customWhite: '#B4B4B8'
      }
    },
    boxShadow: {
      custom: '0 10px 15px -3px rgb(0, 0, 0)', // Custom shadow color (red with 30% opacity)
    },
  },
  plugins: [],
}
