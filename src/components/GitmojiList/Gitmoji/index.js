// @flow
import React, { type Element } from 'react'
import Icon from 'src/components/Icon'

import emojiColorsMap from '../emojiColorsMap'
import styles from './styles.module.css'

type Props = {
  code: string,
  description: string,
  emoji: string,
  isListMode: boolean,
  name: string,
  onPinClick: () => void,
  pinned?: boolean,
}

const Gitmoji = (props: Props): Element<'article'> => {
  const pinText = props.pinned
    ? `Unpin ${props.name}`
    : `Pin ${props.name} at the top`

  return (
    <article
      style={{ '--emojiColor': emojiColorsMap[props.name] }}
      className={`
        ${styles.emoji} col-xs-12 col-sm-6 
        ${props.isListMode ? 'col-md-4' : 'col-md-3'}
        ${props.isListMode ? styles.list : ''}
      `}
    >
      <div
        className={`${styles.card} ${props.isListMode ? styles.cardList : ''}`}
      >
        <header className={`${styles.cardHeader}`}>
          <button
            type="button"
            className={`gitmoji-clipboard-emoji ${styles.gitmoji}`}
            data-clipboard-text={props.emoji}
          >
            {props.emoji}
          </button>
        </header>
        <div className={styles.gitmojiInfo}>
          <button
            className={`gitmoji-clipboard-code ${styles.gitmojiCode}`}
            data-clipboard-text={props.code}
            tabIndex="-1"
            type="button"
          >
            <code>{props.code}</code>
          </button>
          <p>{props.description}</p>
        </div>
        <button
          type="button"
          className={`button ${styles.pin} ${
            props.pinned ? styles.active : ''
          }`}
          title={pinText}
          aria-label={pinText}
          onClick={props.onPinClick}
        >
          <Icon name="heart" />
        </button>
      </div>
    </article>
  )
}

Gitmoji.defaultProps = {
  pinned: false,
}

export default Gitmoji
