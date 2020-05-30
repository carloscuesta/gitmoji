// @flow
import React from 'react'
import Clipboard from 'clipboard'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  let selectedGitmoji = undefined

  if (router !== null) {
    selectedGitmoji = router.query.gitmoji
  }

  const scrollToId = (id: string) => {
    const elmt = document.getElementById(id)

    if (elmt !== null) {
      elmt.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  const gitmojiExists = (gitmojiName: string) => {
    const matchingGitmojiIndex = props.gitmojis.findIndex(
      (gitmoji) => gitmoji.name === gitmojiName
    )

    return matchingGitmojiIndex !== -1
  }

  if (gitmojiExists(selectedGitmoji)) {
    scrollToId(selectedGitmoji)
  } else {
    selectedGitmoji = undefined
  }

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

  return (
    <div className="row center-xs" id="gitmoji-list">
      {props.gitmojis.map((gitmoji, index) => (
        <Gitmoji
          code={gitmoji.code}
          description={gitmoji.description}
          emoji={gitmoji.emoji}
          key={index}
          name={gitmoji.name}
          id={gitmoji.name}
          isSelected={
            selectedGitmoji === undefined || selectedGitmoji === gitmoji.name
          }
        />
      ))}
    </div>
  )
}

export default GitmojiList
