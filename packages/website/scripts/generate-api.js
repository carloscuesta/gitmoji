const { gitmojis } = require('gitmojis')
const fs = require('fs')
const path = require('path')

const outputDir = path.join(__dirname, '../public/api/gitmojis')
fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(
  path.join(outputDir, 'index.json'),
  JSON.stringify({ gitmojis }, null, 2)
)

console.log('Generated static API at public/api/gitmojis/index.json')
