// @flow
import { type Element } from 'react'

import Icon from 'src/components/Icon'
import styles from './styles.module.css'

type Props = {
  isListMode: boolean,
  setIsListMode: Function,
}

const ListModeSelector = (props: Props): Element<'div'> => (
  <div className={styles.container}>
    <button
      className={`${styles.button} ${
        !props.isListMode ? styles.buttonActive : ''
      }`}
      disabled={!props.isListMode}
      onClick={() => props.setIsListMode(false)}
    >
      <Icon name="grid" />
    </button>

    <button
      className={`${styles.button} ${
        props.isListMode ? styles.buttonActive : ''
      }`}
      disabled={props.isListMode}
      onClick={() => props.setIsListMode(true)}
    >
      <Icon name="list" />
    </button>
  </div>
)

export default ListModeSelector
