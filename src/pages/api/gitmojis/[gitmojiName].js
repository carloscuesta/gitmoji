import corsMiddleware from '../../../middlewares/cors-middleware'
import { gitmojiExists } from '../../../helpers/gitmoji'

import { gitmojis } from '../../../data/gitmojis.json'

export default async function handler(req, res) {
  // Run the middleware
  await corsMiddleware(req, res)

  const {
    query: { gitmojiName }
  } = req

  if (!gitmojiExists(gitmojiName)) {
    res.status(404).end("Invalid gitmoji's name!")
  }

  const matchingGitmoji = gitmojis.find(
    (gitmoji) => gitmoji.name === gitmojiName
  )

  // Rest of the API logic
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(matchingGitmoji))
}
