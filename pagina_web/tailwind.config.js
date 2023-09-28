export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        main: '#F5B041',
        maindark: '#A3752B',
        secondary: '#4E54C8'
      }
    }
  },
  plugins: []
}
