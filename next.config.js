const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public/static',
  },
  reactStrictMode: true,
})
