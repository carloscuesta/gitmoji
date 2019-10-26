// @flow
import React from 'react'

import Gitmoji from './Gitmoji'

type Props = {
  gitmojis: Array<{
    code: string,
    description: string,
    emoji: string,
    name: string
  }>
}

const GitmojiList = (props: Props) => (
  <div className="row center-xs" id="gitmoji-list">
    {props.gitmojis.map((gitmoji, index) => (
      <Gitmoji
        code={gitmoji.code}
        description={gitmoji.description}
        emoji={gitmoji.emoji}
        key={index}
        name={gitmoji.name}
      />
    ))}
  </div>
)

export default GitmojiList
