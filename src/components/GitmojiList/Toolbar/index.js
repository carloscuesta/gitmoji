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

const Toolbar = (props: Props): Element<'div'> => (
  <div className={styles.container}>
    <input
      className={styles.searchInput}
      name="searchInput"
      onChange={(event) => props.setSearchInput(event.target.value)}
      placeholder="Search your gitmoji..."
      type="text"
      value={props.searchInput}
    />

    <ListModeSelector
      isListMode={props.isListMode}
      setIsListMode={props.setIsListMode}
    />
  </div>
)

export default Toolbar
