// @flow
import React, { type Element } from 'react'
import Clipboard from 'clipboard'

import Gitmoji from './Gitmoji'
import emojiColorsMap from './emojiColorsMap'

type Props = {
  gitmojis: Array<{
    code: string,
    description: string,
    emoji: string,
    name: string,
  }>,
}

const GitmojiList = (props: Props): Element<'div'> => {
  React.useEffect(() => {
    const clipboard = new Clipboard(
      '.gitmoji-clipboard-emoji, .gitmoji-clipboard-code'
    )

    clipboard.on('success', function (e) {
      window.ga('send', 'event', 'Gitmoji', 'Copy to Clipboard')

      const notification = new window.NotificationFx({
        message: e.trigger.classList.contains('gitmoji-clipboard-emoji')
          ? `<p>Hey! Gitmoji ${e.text} copied to the clipboard 😜</p>`
          : `<p>Hey! Gitmoji <span class="gitmoji-code">${e.text}</span> copied to the clipboard 😜</p>`,
        layout: 'growl',
        effect: 'scale',
        type: 'notice',
        ttl: 2000,
      })

      notification.show()
    })

    return () => clipboard.destroy()
  }, [])

  return (
    <div className="row center-xs" id="gitmoji-list">
      <style>
        {Object.entries(emojiColorsMap)
          .map(
            ([key, color]: Object) => `.${key} { background-color: ${color} }`
          )
          .reduce((memo, value) => memo + value, '')}
      </style>

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
}

export default GitmojiList
