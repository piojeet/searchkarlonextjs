/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '320px',   // Extra small devices, e.g., small phones
      md: '420',
      sm: '640px',   // Small devices, e.g., larger phones
      lg: '1024px',  // Large devices, e.g., small desktops
      xl: '1169px',  // Extra large devices, e.g., medium desktops
      '2xl': '1283px', // 2XL devices, e.g., large desktops
      '3xl': '1536px' // 2XL devices, e.g., large desktops
    },
    extend: {
      colors: {
        buttonColor: "#003366",
        lightOrange: "#FFA500",
        darkOrange: "#EE5927",
        blackColor: "#23262F",
        whiteColor: '#ffffff',
        borderColor: '#EDEFF2',
        lightBackground: '#FCFCFD',
        paraColor: "#858585",
        bordeColor: '#e5e7eb',
        buttonHover: "rgb(0 51 102 / 0.95)"
      },
      keyframes: {
        ping: {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(2)' },
        },
      },
      animation: {
        ping: 'ping 5s infinite',
      },
    },
  },
  plugins: [],
};
