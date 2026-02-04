'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

import ListModeSelector from './ListModeSelector'
import ThemeSelector from './ThemeSelector'
const Kbd = dynamic(() => import('./Kbd'), { ssr: false })
import styles from './styles.module.css'

type Props = {
  isListMode: boolean
  searchInput?: string
  setIsListMode: (searchInput: boolean) => void
  setSearchInput: (searchInput: string) => void
}

const Toolbar = (props: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const keyboardEventListener = (event: KeyboardEvent) => {
      const searchInput = searchInputRef.current
      if (
        searchInput &&
        (event.ctrlKey || event.metaKey) &&
        event.key === 'k'
      ) {
        event.preventDefault()
        searchInput.focus()
      }
    }

    if (typeof window !== 'undefined') {
      document.addEventListener('keydown', keyboardEventListener, false)
    }

    return () => {
      document.removeEventListener('keydown', keyboardEventListener, false)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.searchInput}
          ref={searchInputRef}
          name="searchInput"
          onChange={(event) => props.setSearchInput(event.target.value)}
          placeholder="Search your gitmoji..."
          type="search"
          value={props.searchInput}
        />

        <Kbd />
      </div>

      <div className={styles.actionsContainer}>
        <ThemeSelector />

        <ListModeSelector
          isListMode={props.isListMode}
          setIsListMode={props.setIsListMode}
        />
      </div>
    </div>
  )
}

export default Toolbar
