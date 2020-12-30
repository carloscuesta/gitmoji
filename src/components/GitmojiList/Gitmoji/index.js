// @flow
import React, { type Element } from 'react'

import styles from './styles.module.css'

type Props = {
  code: string,
  description: string,
  emoji: string,
  isListMode: boolean,
  name: string,
}

const Gitmoji = (props: Props): Element<'article'> => (
  <article
    className={`${styles.emoji} col-xs-12 col-sm-6 ${
      props.isListMode ? 'col-md-4' : 'col-md-3'
    }`}
  >
    <div
      className={`${styles.card} ${props.isListMode ? styles.cardList : ''}`}
    >
      <header className={`${props.name} ${styles.cardHeader}`}>
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
          <span className={`gitmoji-clipboard-code-underline ${props.name}`} />
        </button>
        <p>{props.description}</p>
      </div>
    </div>
  </article>
)

export default Gitmoji
