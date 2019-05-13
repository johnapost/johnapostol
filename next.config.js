const withTypescript = require('@zeit/next-typescript');
module.exports = withTypescript({
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
