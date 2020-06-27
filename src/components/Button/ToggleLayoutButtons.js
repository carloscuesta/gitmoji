// @flow
import React from 'react'

import Icon from '../Icon'

type LayoutName = 'list' | 'grid'
type Props = { layout: LayoutName, onClick: (layoutName: LayoutName) => void }

const ToggleLayoutButtons = (props: Props) => {
  const renderLayoutBtn = (layoutName: LayoutName) => (
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
