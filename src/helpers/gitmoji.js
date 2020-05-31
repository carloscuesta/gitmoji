// @flow
import { gitmojis } from '../data/gitmojis.json'

export const gitmojiExists = (gitmojiName: string) => {
  const matchingGitmojiIndex = gitmojis.findIndex(
    (gitmoji) => gitmoji.name === gitmojiName
  )

  return matchingGitmojiIndex !== -1
}
