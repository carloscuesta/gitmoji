const withSass = require('@zeit/next-sass')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = withSass({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contributors': { page: '/contributors' }
    }
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) return config

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))

    return config
  }
})
