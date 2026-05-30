/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
        ibmplex: ['IBM Plex Sans', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#030308', // Darkened to fit deep cyber theme
          200: '#07080f', // Darkened background
          300: '#0f111a', // Darkened gray
          500: '#3A3A49',
          600: '#141622',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
        'cyber-blue': '#00f0ff',
        'cyber-purple': '#bd00ff',
        'cyber-pink': '#ff007f',
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};
