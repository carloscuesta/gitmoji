// @flow
import React, { type Element } from 'react'

import Icon from 'src/components/Icon'

type Props = { target?: string, icon?: string, text: string, link: string }

const Button = (props: Props): Element<'a'> => (
  <a
    className="btn btn-pink"
    target={props.target && props.target}
    href={props.link}
  >
    {props.icon && <Icon name={props.icon} />}
    {props.text}
  </a>
)

export default Button
