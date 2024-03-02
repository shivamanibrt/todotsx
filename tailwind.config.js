module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif',],
        raleway: ['Raleway', 'sans-serif'],
        bubbles: ['Bubbles', 'cursive'],
      },
      backgroundColor: {
        bodyColur: '#0b1215',
        black: '#000000',
        customGrayBlack: '#272829',
        customPurple: '#6701e6',
        customLightPurple: '#5D12D2',
        customGray: '#F4F4F4',
        customWhite: '#FEFBF6',
        customGrayWhite: '#F5F5F5',
        customRed: '#D71313',
        customOrange: '#DC5F00',
        customBlue: '#071E3D',

      },
      textColor: {
        black: '#000000',
        customWhite: '#FEFBF6',
        customPurple: '#6701e6',
        customLightPurple: '#5D12D2',
        customGray: '#F4F4F4',
        customGrayWhite: '#45474B',
        customBlue: '#071E3D',
        customRed: '#D71313',
        customOrange: '#DC5F00',
      },
    },
  },
  plugins: [

  ],
}
