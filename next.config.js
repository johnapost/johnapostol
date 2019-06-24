const optimizedImages = require('next-optimized-images');
const typescript = require('@zeit/next-typescript');
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [optimizedImages, { handleImages: ['jpg'] }],
  [typescript, { target: 'serverless', pageExtensions: ['tsx'] }]
])
