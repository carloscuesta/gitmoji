import emojiColorsMap from '../emojiColorsMap'
import styles from './styles.module.css'

type Props = {
  code: string
  description: string
  emoji: string
  isListMode: boolean
  name: keyof typeof emojiColorsMap
}

const Gitmoji = (props: Props) => {
  const style = {
    '--emojiColor': emojiColorsMap[props.name],
  } as React.CSSProperties

  return (
    <article
      style={style}
      className={`${styles.emoji} col-xs-12 col-sm-6 ${
        props.isListMode ? 'col-md-4' : 'col-md-3'
      }`}
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
            tabIndex={-1}
            type="button"
          >
            <code>
              {replaceWithJSX(
                props.code,
                '_',
                <>
                  _<wbr />
                </>,
              )}
            </code>
          </button>
          <p>{props.description}</p>
        </div>
      </div>
    </article>
  )
}

const replaceWithJSX = (
  text: string,
  find: string,
  replace: React.JSX.Element,
) => {
  const nodes: (string | React.JSX.Element)[] = text.split(find)
  const first = nodes.shift()

  return nodes
    .reduce((newNodes, part) => [...newNodes, replace, part], [first])
    .map((el, index) => <span key={index}>{el}</span>)
}

export default Gitmoji
