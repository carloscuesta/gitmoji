import corsMiddleware from '../../middlewares/cors-middleware'
import { gitmojis } from '../../data/gitmojis.json'

export default async function handler(req, res) {
  // Run the middleware
  await corsMiddleware(req, res)

  // Rest of the API logic
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(gitmojis))
}
