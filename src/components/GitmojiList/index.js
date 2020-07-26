// @flow
import React, { type Element } from 'react'
import Clipboard from 'clipboard'

import GitmojiCard from './GitmojiCard'
import GitmojiRaw from './GitmojiRaw'
import ToggleLayoutButtons from '../Button/ToggleLayoutButtons'

type Props = {
  layout: 'grid' | 'raw',
  gitmojis: Array<{
    code: string,
    description: string,
    emoji: string,
    name: string
  }>,
  setLayout: (layout: 'grid' | 'raw') => void
}

const GitmojiList = (props: Props): Element<'div'> => {
  const { layout, setLayout, gitmojis } = props

  const gitmojiListRender = () => {
    if (layout === 'grid') {
      return gitmojis.map((gitmoji, index) => (
        <GitmojiCard
          code={gitmoji.code}
          description={gitmoji.description}
          emoji={gitmoji.emoji}
          key={index}
          name={gitmoji.name}
        />
      ))
    }

    return gitmojis.map((gitmoji, index) => (
      <GitmojiRaw
        code={gitmoji.code}
        description={gitmoji.description}
        emoji={gitmoji.emoji}
        key={index}
        name={gitmoji.name}
      />
    ))
  }

  React.useEffect(() => {
    const clipboard = new Clipboard('.gitmoji-code, .gitmoji-emoji')

    clipboard.on('success', function (e) {
      window.ga('send', 'event', 'Gitmoji', 'Copy to Clipboard')

      const elementClasses = e.trigger.classList
      let notificationMessage = `<p>Hey! Gitmoji <span class="gitmoji-code">${e.text}</span> copied to the clipboard 😜</p>`

      if (elementClasses.contains('gitmoji-emoji')) {
        notificationMessage = `<p>Hey! Gitmoji emoji ${e.text} copied to the clipboard 😜</p>`
      }

      var notification = new window.NotificationFx({
        message: notificationMessage,
        layout: 'growl',
        effect: 'scale',
        type: 'notice',
      })

      notification.show()
    })

    return () => clipboard.destroy()
  }, [])

  return (
    <div
      className={`row center-xs ${props.layout || props.layout}`}
      id="gitmoji-list"
    >
      <ToggleLayoutButtons layout={layout} onClick={setLayout} />
      {gitmojiListRender()}
    </div>
  )
}

export default GitmojiList
