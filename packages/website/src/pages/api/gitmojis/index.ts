import type { NextApiRequest, NextApiResponse } from 'next'
import { gitmojis } from 'gitmojis'

const getGitmojis = (
  request: NextApiRequest,
  response: NextApiResponse
): void => {
  const { method } = request

  if (method === 'GET') {
    response.status(200).json({ gitmojis })
    return
  }

  response.setHeader('Allow', ['GET'])
  response.status(405).json({ error: `Error: method ${method} not allowed` })
}

export default getGitmojis
