// @flow
import { type Element, useEffect, useRef } from 'react'

import ListModeSelector from './ListModeSelector'
import ThemeSelector from './ThemeSelector'
import styles from './styles.module.css'

type Props = {
  isListMode: boolean,
  searchInput: ?string,
  setIsListMode: Function,
  setSearchInput: Function,
}

const isMacOs = () => {
  return typeof window === 'undefined'
    ? true
    : window.navigator.platform.toUpperCase().indexOf('MAC') >= 0
}

const Toolbar = (props: Props): Element<'div'> => {
  const searchInputRef = useRef(null)

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
          type="text"
          value={props.searchInput}
        />

        <kbd className={styles.kbd}>{isMacOs() ? '⌘' : 'Ctrl'} K</kbd>
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
