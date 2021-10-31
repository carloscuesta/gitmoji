// @flow
import React, { type Element, useEffect, useRef } from 'react'

import ListModeSelector from './ListModeSelector'
import styles from './styles.module.css'

type Props = {
  isListMode: boolean,
  searchInput: ?string,
  setIsListMode: Function,
  setSearchInput: Function,
}

const isMacOs = () => {
  if (typeof window !== 'undefined') {
    return window.navigator.platform.toUpperCase().indexOf('MAC') >= 0
  }
}

const Toolbar = (props: Props): Element<'div'> => {
  const searchInputRef = useRef(null)

  const keyboardEventListener = (event: KeyboardEvent) => {
    const searchInput = searchInputRef.current
    if (searchInput && (event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault()
      searchInput.focus()
    }
  }

  useEffect(() => {
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
          type="text"
          value={props.searchInput}
        />

        <kbd className={styles.kbd}>{isMacOs() ? '⌘' : 'Ctrl'} K</kbd>
      </div>

      <ListModeSelector
        isListMode={props.isListMode}
        setIsListMode={props.setIsListMode}
      />
    </div>
  )
}

export default Toolbar
