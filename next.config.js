const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
})

module.exports = withPWA({
  reactStrictMode: true,
})
