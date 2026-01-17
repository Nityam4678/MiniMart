module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)' },
        },
      },
      colors: {
        'dark-bg': '#0f172a',
        'dark-bg-2': '#020617',
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(15, 23, 42, 0.4)',
      },
    },
  },
  plugins: [],
};
