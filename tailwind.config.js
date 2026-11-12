/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-primary)',
        surface: 'var(--bg-surface)',
        'surface-elevated': 'var(--bg-surface-elevated)',
        'surface-subtle': 'var(--bg-subtle)',
        border: 'var(--border-subtle)',
        'border-strong': 'var(--border-strong)',
        'ink-primary': 'var(--text-primary)',
        'ink-secondary': 'var(--text-secondary)',
        'ink-muted': 'var(--text-muted)',
        'accent-purple': 'var(--accent-purple)',
        'accent-pink': 'var(--accent-pink)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.25em',
      },
    },
  },
  plugins: [],
};
