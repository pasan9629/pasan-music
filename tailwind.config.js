/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink: '#050505', ink2: '#0e0e0f', bone: '#f1efea', steel: '#8b8e93' },
    fontFamily: { display: ['"Inter Tight"', 'sans-serif'], serif: ['"Cormorant Garamond"', 'serif'], sans: ['"Inter Tight"', 'sans-serif'] },
  } },
  plugins: [],
}
