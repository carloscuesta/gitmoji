// @flow
import React, { type Element } from 'react'

import styles from './styles.module.css'

type Props = {
  searchInput: ?string,
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
  </div>
)

export default Toolbar
