/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './packages/components/src/**/*.{js,jsx,ts,tsx}',
    './packages/storybook/stories/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mcd-black': '#292929',
        'mcd-red': '#DA291C',
        'mcd-green': '#1F6437',
        'mcd-light-gray': '#F5F5F5',
        'mcd-medium-gray': '#E8E8E8',
        'mcd-dark-gray': '#757575',
      },
      fontFamily: {
        speedee: ['Speedee', 'sans-serif'],
        'segoe-ui': ['Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
    },
  },
  plugins: [],
}
