import type { NextApiRequest, NextApiResponse } from 'next'
import gitmojisSchema from 'gitmojis/src/schema.json'

const getGitmojis = (
  request: NextApiRequest,
  response: NextApiResponse
): void => {
  const { method } = request

  if (method === 'GET') {
    response.status(200).json(gitmojisSchema)
    return
  }

  response.setHeader('Allow', ['GET'])
  response.status(405).json({ error: `Error: method ${method} not allowed` })
}

export default getGitmojis
