module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  safelist: [
    {
      pattern: /border-[^/]+$/,
      variants: ['dark', 'hover', 'focus'],
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#ff4dff',
          100: '#ff43ff',
          200: '#ff39ff',
          300: '#ff2fff',
          400: '#fc25ff',
          500: '#f21bf6',
          600: '#e811ec',
          700: '#de07e2',
          800: '#d400d8',
          900: '#ca00ce',
        },
      }
    },
  },
  plugins: [],
}
