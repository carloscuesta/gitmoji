// @flow
import React, { type Element } from 'react'

import styles from './styles.module.css'

type Props = { profile: string, avatar: string }

const Contributor = (props: Props): Element<'article'> => (
  <article className="col-xs-3 col-sm-2">
    <a href={props.profile}>
      <img className={styles.picture} src={props.avatar} />
    </a>
  </article>
)

export default Contributor
