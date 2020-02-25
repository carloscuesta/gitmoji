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
    const clipboard = new Clipboard('.gitmoji')

    clipboard.on('success', function() {
      window.ga('send', 'event', 'Gitmoji', 'Copy to Clipboard')

      var notification = new window.NotificationFx({
        message: '<p>Hey! Gitmoji copied to the clipboard 😜</p>',
        layout: 'growl',
        effect: 'scale',
        type: 'notice'
      })

      notification.show()
    })

    return () => clipboard.destroy()
  }, [])

  const filterHandler = (gitmoji) => {
    return (
      ((gitmoji.description.toLowerCase().includes(filter.toLowerCase()) ||
        gitmoji.name.toLowerCase().includes(filter.toLowerCase())) &&
        filter !== '') ||
      filter === ''
    )
  }

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
