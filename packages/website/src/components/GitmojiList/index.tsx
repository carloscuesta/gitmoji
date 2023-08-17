import { useEffect, useState } from 'react'
import Clipboard from 'clipboard'
import { useRouter } from 'next/router'
import type { Gitmoji as GitmojiType } from 'gitmojis'
import toast from 'react-hot-toast'

import Gitmoji from './Gitmoji'
import Toolbar from './Toolbar'
import useLocalStorage from './hooks/useLocalStorage'
import styles from './styles.module.css'

type Props = {
  gitmojis: readonly GitmojiType[]
}

const GitmojiList = (props: Props) => {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')
  const [isListMode, setIsListMode] = useLocalStorage('isListMode', false)

  const gitmojis = searchInput
    ? props.gitmojis.filter(({ emoji, code, description }) => {
        const lowerCasedSearch = searchInput.toLowerCase()

        return (
          code.includes(lowerCasedSearch) ||
          description.toLowerCase().includes(lowerCasedSearch) ||
          emoji == searchInput
        )
      })
    : props.gitmojis

  useEffect(() => {
    if (router.query.search) {
      setSearchInput(router.query.search as string)
    }
  }, [router.query.search])

  useEffect(() => {
    if (router.query.search && !searchInput) {
      router.push('/', undefined, { shallow: true })
    }
  }, [searchInput])

  useEffect(() => {
    const clipboard = new Clipboard(
      '.gitmoji-clipboard-emoji, .gitmoji-clipboard-code',
    )

    clipboard.on('success', function (e) {
      toast(
        (t) => (
          <span className={styles.notification}>
            <p>
              Hey! Gitmoji <span className={styles.gitmojiCode}>{e.text}</span>{' '}
              copied to the clipboard 😜
            </p>
            <span
              className={styles.closeButton}
              onClick={() => toast.dismiss(t.id)}
            />
          </span>
        ),
        {
          id: 'clipboard',
          style: {
            background: '#ff5a79',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '90%',
          },
        },
      )
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
            // @ts-expect-error: This should be replaced with something like:
            // typeof gitmojis[number]['name'] but JSON can't be exported `as const`
            name={gitmoji.name}
          />
        ))
      )}
    </div>
  )
}

export default GitmojiList
