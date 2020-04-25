// @flow
import React from 'react'
import Clipboard from 'clipboard'

import Gitmoji from './Gitmoji'

type Props = {
  gitmojis: Array<{
    code: string,
    description: string,
    emoji: string,
    name: string
  }>
}

const GitmojiList = (props: Props) => {
  React.useEffect(() => {
    const clipboard = new Clipboard('.gitmoji-code')
    const clipboardTest = new Clipboard('.gitmoji-emoji')

    clipboard.on('success', function(e) {
      window.ga('send', 'event', 'Gitmoji', 'Copy to Clipboard')

      var notification = new window.NotificationFx({
        message: `<p>Hey! Gitmoji <span class="gitmoji-code">${e.text}</span> copied to the clipboard 😜</p>`,
        layout: 'growl',
        effect: 'scale',
        type: 'notice'
      })

      notification.show()
    })

    clipboardTest.on('success', function(e) {
      window.ga('send', 'event', 'Gitmoji', 'Copy to Clipboard')

      var notification = new window.NotificationFx({
        message: `<p>Hey! Gitmoji emoji ${e.text} copied to the clipboard 😜</p>`,
        layout: 'growl',
        effect: 'scale',
        type: 'notice'
      })

      notification.show()
    })

    return () => clipboard.destroy()
  }, [])

  return (
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
}

export default GitmojiList
