/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        custom: '40px 40px 40px 0',
        20: '20px',
      },
      colors: {
        customGray: '#27323E',
        customOrange: '#FC4A1A',
        customRed: '#F7B733',
        customSlate: '#212529',
      },
      scale: {
        'hover-grow': '1.2',
        'hover-grow-foto': '1.02',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      minHeight: {
        '4/6-screen': '66.666667vh',
      },
    },
  },
  plugins: [],
}
