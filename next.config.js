const withTypescript = require('@zeit/next-typescript');
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages(
  withTypescript({
    target: 'serverless',
    pageExtensions: ['tsx'],
    webpack(config, options) {
      return {
        ...config,
        module: {
          rules: [
            ...config.module.rules,
            {
              test: /\.md$/,
              use: 'raw-loader'
            }
          ]
        }
      }
    }
  })
)
