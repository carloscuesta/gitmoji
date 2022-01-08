// @flow
import React, { type Element } from 'react'
import Clipboard from 'clipboard'
import { useRouter } from 'next/router'

import Gitmoji from './Gitmoji'
import Toolbar from './Toolbar'
import useLocalStorage from './hooks/useLocalStorage'
import { notify } from '../../utils/notification'

type Gitmojis = {
  code: string,
  description: string,
  emoji: string,
  name: string,
}

type Props = {
  gitmojis: Array<Gitmojis>,
}

const GitmojiList = (props: Props): Element<'div'> => {
  const router = useRouter()
  const [searchInput, setSearchInput] = React.useState('')
  const [isListMode, setIsListMode] = useLocalStorage('isListMode', false)
  const [pinneds, setPinneds] = useLocalStorage('pinneds', [])

  const pinnedSet = new Set(pinneds)

  const isPinned = (code: string): boolean => {
    return pinnedSet.has(code)
  }

  const sortPinnedGitmojis = React.useMemo(
    () =>
      (gitmojis: Array<Gitmojis>): Array<Gitmojis> => {
        return gitmojis.sort((gitmoji) => {
          if (isPinned(gitmoji.code)) return -1
          return 0
        })
      },
    [pinnedSet]
  )

  const getGitmojis = React.useMemo(
    () => () => {
      const gitmojis = sortPinnedGitmojis([...props.gitmojis])
      if (searchInput) {
        return gitmojis.filter(({ code, description }) => {
          const lowerCasedSearch = searchInput.toLowerCase()

          return (
            code.includes(lowerCasedSearch) ||
            description.toLowerCase().includes(lowerCasedSearch)
          )
        })
      }

      return gitmojis
    },
    [searchInput, pinnedSet]
  )

  const gitmojis = getGitmojis()

  const addPinned = (code: string): void => {
    setPinneds((current) => [...current, code])
    notify(
      `<p>Gitmoji <span class="gitmoji-code">${code}</span> pinned to the top 😜</p>`
    )
  }

  const removePinned = (code: string): void => {
    setPinneds((current) => current.filter((pinned) => pinned !== code))
    notify(
      `<p>Gitmoji <span class="gitmoji-code">${code}</span> is unpinned 😜</p>`
    )
  }

  const onPinClick = (code: string): void => {
    if (isPinned(code)) {
      removePinned(code)
    } else {
      addPinned(code)
    }
  }

  React.useEffect(() => {
    if (router.query.search) {
      setSearchInput(router.query.search)
    }
  }, [router.query.search])

  React.useEffect(() => {
    if (router.query.search && !searchInput) {
      router.push('/', undefined, { shallow: true })
    }
  }, [searchInput])

  React.useEffect(() => {
    const clipboard = new Clipboard(
      '.gitmoji-clipboard-emoji, .gitmoji-clipboard-code'
    )

    clipboard.on('success', function (e) {
      window.ga('send', 'event', 'Gitmoji', 'Copy to Clipboard')

      const message = e.trigger.classList.contains('gitmoji-clipboard-emoji')
        ? `<p>Hey! Gitmoji ${e.text} copied to the clipboard 😜</p>`
        : `<p>Hey! Gitmoji <span class="gitmoji-code">${e.text}</span> copied to the clipboard 😜</p>`

      notify(message)
    })

    return () => clipboard.destroy()
  }, [])

  return (
    <div className="row" id="gitmoji-list">
      <div className="col-xs-12">
        <Toolbar
          isListMode={isListMode}
          searchInput={searchInput}
          setIsListMode={setIsListMode}
          setSearchInput={setSearchInput}
        />
      </div>

      {gitmojis.length === 0 ? (
        <h2>No gitmojis found for search: {searchInput}</h2>
      ) : (
        gitmojis.map((gitmoji, index) => (
          <Gitmoji
            code={gitmoji.code}
            description={gitmoji.description}
            emoji={gitmoji.emoji}
            isListMode={isListMode}
            key={index}
            name={gitmoji.name}
            pinned={isPinned(gitmoji.code)}
            onPinClick={() => onPinClick(gitmoji.code)}
          />
        ))
      )}
    </div>
  )
}

export default GitmojiList
