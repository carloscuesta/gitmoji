// @flow
import { type Element } from 'react'

import styles from './styles.module.css'

type Props = { avatar: string, url: string }

const Contributor = (props: Props): Element<'article'> => (
  <article className="col-xs-3 col-sm-2">
    <a href={props.url} target="_blank" rel="noreferrer">
      <img className={styles.picture} src={props.avatar} />
    </a>
  </article>
)

export default Contributor
