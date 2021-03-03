// @flow
import gitmojisData from 'src/data/gitmojis.json'

const gitmoji = (
  request: { method: string, query: Object },
  response: Object
): void => {
  const { method, query } = request

  if (method === 'GET') {
    const emoji = gitmojisData.gitmojis.find(
      (gitmoji) => gitmoji.name === query.name
    )

    emoji
      ? response.status(200).json(emoji)
      : response.status(404).json({ error: `Emoji not found` })
  } else {
    response.setHeader('Allow', ['GET'])
    response.status(405).json({ error: `Error: method ${method} not allowed` })
  }
}

export default gitmoji
