// @flow
import React from 'react'

import Icon from '../Icon'

type Props = { layout: 'list' | 'grid', onClick: () => void }

const ToggleLayoutButton = (props: Props) => (
  <button className="btn btn-yellow layout" onClick={props.onClick}>
    {props.layout === 'grid' ? <Icon name="grid" /> : <Icon name="list" />}
  </button>
)

export default ToggleLayoutButton
