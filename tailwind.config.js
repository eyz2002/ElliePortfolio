/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 0.8s alternate cubic-bezier(0.75, 0.05, 0.075, 0.035) infinite"
      },
      keyframes: {
        bounce: {
          from: {transform: "translateY(10px)"},
          to: {transform: "translateY(0)"},
        },
      },
    },
    colors: {
      'black': '#000000',
      'base-green': '#B9CABD',
      'light-green': '#E6EEE8'
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
}