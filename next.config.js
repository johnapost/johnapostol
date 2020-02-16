const optimizedImages = require('next-optimized-images');
const typescript = require('@zeit/next-typescript');
const withPlugins = require('next-compose-plugins')
const summary = require('./static/posts/summary.json')

module.exports = withPlugins([
  [optimizedImages, {
    handleImages: ['jpg']
  }],
  [typescript, {
    target: 'serverless',
    pageExtensions: ['tsx']
  }]
], {
  exportPathMap: () => {
    const posts = {
      '/post/2019-05-07': {
        page: '/post',
        query: {
          slug: '2019-05-07'
        }
      }
    }

    return {
      '/': {
        page: '/'
      },
      ...posts
    }
  }
})
