// @flow
import React, { type Element } from 'react'

export { IconDefinitions } from './definitions'

type Props = { name: string }

const Icon = (props: Props): Element<'svg'> => (
  <svg className={`icon icon-${props.name}`}>
    <use xlinkHref={`#icon-${props.name}`} />
  </svg>
)

export default Icon
