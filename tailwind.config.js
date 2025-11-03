/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E3A8A', 
        'dark-bg': '#0F172A', 
        'accent-green': '#10B981', 
        'cyber-violet': '#A855F7', 
        'cyber-cyan': '#06B6D4', 
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1E40AF 0%, #10B981 100%)',
      },
      boxShadow: {
        'neumorphic': '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.1)',
        'neumorphic-dark': '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.05)',
        'metal-shader': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'neon': '0 0 10px rgba(165, 180, 252, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'kinetic-text': 'kinetic 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kinetic: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontFamily: {
        'bold-kinetic': ['"Poppins"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};