/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#F7F7F5',
          surface: '#FFFFFF',
          border: '#E7E7E4',
          'border-subtle': '#EFEFEA',
          primary: '#171717',
          secondary: '#777777',
          muted: '#999999',
          dark: '#111111',
          charcoal: '#1A1A1A',
          cream: '#F5F3EF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        serif: ['Newsreader', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'editorial': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'elevated': '0 16px 40px -8px rgba(0, 0, 0, 0.08), 0 6px 12px -3px rgba(0, 0, 0, 0.04)',
        'floating': '0 24px 60px -12px rgba(0, 0, 0, 0.12), 0 8px 20px -4px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
