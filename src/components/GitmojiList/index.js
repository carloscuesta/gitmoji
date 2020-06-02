// @flow
import React from 'react'
import Clipboard from 'clipboard'

import Gitmoji from './Gitmoji'
import { store } from '../Store/store'
type Props = {
  gitmojis: Array<{
    code: string,
    description: string,
    emoji: string,
    name: string
  }>
}

const GitmojiList = (props: Props) => {
  const filter = React.useContext(store).state

  React.useEffect(() => {
    const clipboard = new Clipboard('.gitmoji-code, .gitmoji-emoji')

    clipboard.on('success', function(e) {
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
        type: 'notice'
      })

      notification.show()
    })

    return () => clipboard.destroy()
  }, [])

  const filterHandler = (gitmoji) =>
    filter === '' ||
    (filter &&
      (gitmoji.description.toLowerCase().includes(filter.toLowerCase()) ||
        gitmoji.name.toLowerCase().includes(filter.toLowerCase())))

  return (
    <div className="row center-xs" id="gitmoji-list">
      {props.gitmojis.map(
        (gitmoji, index) =>
          filterHandler(gitmoji) && (
            <Gitmoji
              code={gitmoji.code}
              description={gitmoji.description}
              emoji={gitmoji.emoji}
              key={index}
              name={gitmoji.name}
            />
          )
      )}
    </div>
  )
}

export default GitmojiList
