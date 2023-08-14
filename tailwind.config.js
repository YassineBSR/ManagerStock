/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './templates/**/*.html.twig',
    '.node_module/tw-elements/dist/js/**/*.js',
    '.node_module/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
  ],
}

