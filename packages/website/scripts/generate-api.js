const { gitmojis, schema } = require('gitmojis')
const fs = require('fs')
const path = require('path')

const outputDir = path.join(__dirname, '../public/api/gitmojis')
fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(
  path.join(outputDir, 'index.json'),
  JSON.stringify({ gitmojis }, null, 2)
)
fs.writeFileSync(
  path.join(outputDir, 'schema.json'),
  JSON.stringify(schema, null, 2)
)

console.log('Generated static API at public/api/gitmojis/index.json')
console.log('Generated static API at public/api/gitmojis/schema.json')
