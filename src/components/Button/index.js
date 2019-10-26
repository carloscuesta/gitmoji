// @flow
import React from 'react'

import Icon from '../Icon'

type Props = { target?: string, icon?: string, text: string }

const Button = (props: Props) => (
  <a className="btn btn-pink" target={props.target && props.target}>
    {props.icon && <Icon name={props.icon} />}
    {props.text}
  </a>
)

export default Button
