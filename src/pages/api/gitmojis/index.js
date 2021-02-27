// @flow
import gitmojisData from 'src/data/gitmojis.json'

const gitmojis = (request: { method: string }, response: Object): void => {
  const { method } = request

  if (method === 'GET') {
    response.status(200).json(gitmojisData)
    return
  }

  response.setHeader('Allow', ['GET'])
  response.status(405).json({ error: `Error: method ${method} not allowed` })
}

export default gitmojis
