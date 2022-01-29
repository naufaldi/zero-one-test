module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    'apps/envelope/pages/**/*.{js,ts,jsx,tsx}',
    'apps/envelope/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        blue: {
          DEFAULT: '#2C6CB0',
          50: '#AAC9EA',
          100: '#9ABEE6',
          200: '#79AADD',
          300: '#5895D5',
          400: '#3880CD',
          500: '#2C6CB0',
          600: '#215083',
          700: '#163556',
          800: '#0A1929',
          900: '#000000',
        },
      },
    },
  },
  plugins: [],
};
