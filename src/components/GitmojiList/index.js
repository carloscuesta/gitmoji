// @flow
import React, { type Element } from 'react'
import Clipboard from 'clipboard'

import Gitmoji from './Gitmoji'
import Toolbar from './Toolbar'
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
  const [searchInput, setSearchInput] = React.useState(null)
  const gitmojis = searchInput
    ? props.gitmojis.filter((gitmoji) =>
        gitmoji.code.includes(searchInput.toLowerCase())
      )
    : props.gitmojis

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
    <div className="row" id="gitmoji-list">
      <style>
        {Object.entries(emojiColorsMap)
          .map(
            ([key, color]: Object) => `.${key} { background-color: ${color} }`
          )
          .reduce((memo, value) => memo + value, '')}
      </style>

      <div className="col-xs-12">
        <Toolbar searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>

      {gitmojis.length === 0 ? (
        <h2>No gitmojis found for search: {searchInput}</h2>
      ) : (
        gitmojis.map((gitmoji, index) => (
          <Gitmoji
            code={gitmoji.code}
            description={gitmoji.description}
            emoji={gitmoji.emoji}
            key={index}
            name={gitmoji.name}
          />
        ))
      )}
    </div>
  )
}

export default GitmojiList
