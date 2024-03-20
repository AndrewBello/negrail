// tailwind.config.js
module.exports = {
  content: [
    // Specify the HTML files where Tailwind should look for classes to purge
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      // You can extend or override the default theme here
    },
  },
  variants: {
    extend: {
      // You can extend or override the default variants here
    },
  },
  plugins: [
    // Add any additional plugins here
  ],
}
