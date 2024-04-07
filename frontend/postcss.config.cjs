/** @type {import('postcss-load-config').Config} */
const postcssImports = require("postcss-import");
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano");

const config = {
    plugins: [
      postcssImports(),
      autoprefixer(),
      cssnano()
    ]
  }
  
  module.exports = config