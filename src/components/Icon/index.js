// @flow
import React, { type Element } from 'react'

export { IconDefinitions } from './definitions'
import styles from './styles.module.css'

type Props = { name: string }

const Icon = (props: Props): Element<'svg'> => (
  <svg className={`${styles.icon} icon-${props.name}`}>
    <use xlinkHref={`#icon-${props.name}`} />
  </svg>
)

export default Icon
