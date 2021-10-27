// @flow
import React, { type Element } from 'react'

import ListModeSelector from './ListModeSelector'
import styles from './styles.module.css'

type Props = {
  isListMode: boolean,
  searchInput: ?string,
  setIsListMode: Function,
  setSearchInput: Function,
}

if (typeof window !== 'undefined') {
  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      document.querySelector('#searchInput').focus()
    }
  })
}

const Toolbar = (props: Props): Element<'div'> => (
  <div className={styles.container}>
    <div className={styles.inputWrapper}>
      <input
        className={styles.searchInput}
        id="searchInput"
        name="searchInput"
        onChange={(event) => props.setSearchInput(event.target.value)}
        placeholder="Search your gitmoji..."
        type="text"
        value={props.searchInput}
      />
      <div className={styles.kbdWrapper}>
        <kbd className={styles.kbd}>⌘K</kbd>
      </div>
    </div>

    <ListModeSelector
      isListMode={props.isListMode}
      setIsListMode={props.setIsListMode}
    />
  </div>
)

export default Toolbar
