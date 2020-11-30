// @flow
import React, { type Element } from 'react'

import styles from './styles.module.css'

type Props = {
  code: string,
  description: string,
  emoji: string,
  name: string,
}

const Gitmoji = (props: Props): Element<'article'> => (
  <article className={`${styles.emoji} col-xs-12 col-sm-6 col-md-3`}>
    <div className={styles.card}>
      <header className={`${props.name} ${styles.cardHeader}`}>
        <span
          className={`gitmoji-clipboard-emoji ${styles.gitmoji}`}
          data-clipboard-text={props.emoji}
        >
          {props.emoji}
        </span>
      </header>
      <div className={styles.gitmojiInfo}>
        <div
          className={`gitmoji-clipboard-code ${styles.gitmojiCode}`}
          data-clipboard-text={props.code}
        >
          <code>{props.code}</code>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  </article>
)

export default Gitmoji
