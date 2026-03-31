/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro-display': ['"SF Pro Display"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        'sf-pro-text': ['"SF Pro Text"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        'sf-pro': ['"SF Pro"', '"SF Pro Text"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        'hiragino': ['"Hiragino Sans"', '"ヒラギノ角ゴシック"', '"Hiragino Kaku Gothic ProN"', '"Noto Sans JP"', 'sans-serif'],
      },
      fontWeight: {
        '590': '590', // SF Pro Semibold custom weight
        'light': '300', // Hiragino Sans W3
        'normal': '400', // Regular
        'medium': '500', // Medium
        'semibold': '600', // Semibold / Hiragino Sans W6
        'bold': '700', // Bold
        'extrabold': '800', // Heavy
      },
    },
  },
  plugins: [],
}
