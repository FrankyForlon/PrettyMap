/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        bloom: {
          black: '#0a0a0f',
          dark: '#0d0d14',
          panel: '#12121c',
          border: '#1a1a2e',
          teal: '#00d4aa',
          green: '#10b981',
          purple: '#8b5cf6',
          pink: '#ec4899',
          yellow: '#eab308',
          red: '#ef4444',
          glow: {
            teal: 'rgba(0, 212, 170, 0.15)',
            purple: 'rgba(139, 92, 246, 0.15)',
            green: 'rgba(16, 185, 129, 0.15)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 212, 170, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
