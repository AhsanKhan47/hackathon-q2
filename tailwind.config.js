/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }

        'mm': '375px',
        // => @media (min-width: 768px) { ... }

        'ml': '425px',
        // => @media (min-width: 1024px) { ... }

        'md': '768px',
        // => @media (min-width: 1280px) { ... }

        'lg': '1024px',
        'xl': '1440px',
        '2xl': '2560px',
        // => @media (min-width: 1536px) { ... }
      },
      gridTemplateRows: {
        // Simple 8 row grid
        // '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 200px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}