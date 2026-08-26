/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        darkBg: '#12181b',
        cardBg: '#1a2226',
        accentCyan: '#22d3ee',
        accentHover: '#06b6d4',
        mutedText: '#94a3b8'
      }
    },
  },
  plugins: [],
}