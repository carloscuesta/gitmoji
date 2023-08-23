import { useEffect, useState } from 'react'
import Clipboard from 'clipboard'
import { useRouter } from 'next/router'
import type { Gitmoji as GitmojiType } from 'gitmojis'
import toast from 'react-hot-toast'
import { useLocalStorage } from 'usehooks-ts'

import Gitmoji from './Gitmoji'
import Toolbar from './Toolbar'
import styles from './styles.module.css'

type Props = {
  gitmojis: readonly GitmojiType[]
}

const GitmojiList = (props: Props) => {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')
  const [isListMode, setIsListMode] = useLocalStorage<boolean>(
    'isListMode',
    false,
  )
  const [pinnedEmojis, setPinnedEmojis] = useLocalStorage<string[]>(
    'pinnedEmojis',
    [],
  )
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [emojis, setEmojis] = useState([...props.gitmojis])

  const isPinned = (code: string): boolean => pinnedEmojis.includes(code)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    setEmojis(emojis.sort((gitmoji) => (isPinned(gitmoji.code) ? -1 : 0)))
  }, [isMounted])

  const gitmojis = (() =>
    searchInput
      ? emojis.filter(({ emoji, code, description }) => {
          const lowerCasedSearch = searchInput.toLowerCase()

          return (
            code.includes(lowerCasedSearch) ||
            description.toLowerCase().includes(lowerCasedSearch) ||
            emoji == searchInput
          )
        })
      : emojis)()

  const onPinClick = (code: string, emoji: string): void => {
    if (isPinned(code)) {
      setPinnedEmojis((current: string[]) =>
        current.filter((pinned) => pinned !== code),
      )
    } else {
      setPinnedEmojis((emojis: string[]) => [...emojis, code])
    }

    toast(
      (t) => (
        <span className={styles.notification}>
          <p>
            Hey! Gitmoji <span className={styles.gitmojiCode}>{emoji}</span>{' '}
            {isPinned(code) ? 'unpinned' : 'pinned'}!
          </p>
          <span
            className={styles.closeButton}
            onClick={() => toast.dismiss(t.id)}
          />
        </span>
      ),
      {
        style: {
          background: '#ff5a79',
          color: '#ffffff',
          fontWeight: 600,
          fontSize: '90%',
        },
      },
    )
  }

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
          isListMode={isMounted && isListMode}
          searchInput={searchInput}
          setIsListMode={setIsListMode}
          setSearchInput={setSearchInput}
        />
      </div>
      <div className={`${styles.gitmojiList} row`}>
        {gitmojis.length === 0 ? (
          <h2>No gitmojis found for search: {searchInput}</h2>
        ) : (
          gitmojis.map((gitmoji, index) => (
            <Gitmoji
              code={gitmoji.code}
              description={gitmoji.description}
              emoji={gitmoji.emoji}
              isListMode={isMounted && isListMode}
              key={index}
              // @ts-expect-error: This should be replaced with something like:
              // typeof gitmojis[number]['name'] but JSON can't be exported `as const`
              name={gitmoji.name}
              isPinned={isMounted && isPinned(gitmoji.code)}
              onPinClick={() => onPinClick(gitmoji.code, gitmoji.emoji)}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default GitmojiList
