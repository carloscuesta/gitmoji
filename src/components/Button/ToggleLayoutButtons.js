// @flow
import React from 'react'

import Icon from '../Icon'

type Props = { layout: 'list' | 'grid', onClick: () => void }

const ToggleLayoutButtons = (props: Props) => {
  const renderLayoutBtn = (layoutName) => (
    <button className={`btn layout ${props.layout === layoutName ? 'selected': ''}`} onClick={() => { props.onClick(layoutName) }}>
      <Icon name={layoutName} />
    </button>
  )

  return (
    <div className='toggle-btn-group'>
      {renderLayoutBtn('grid')}
      {renderLayoutBtn('list')}
    </div>
  )
}

export default ToggleLayoutButtons
