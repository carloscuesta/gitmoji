// @flow
import React from 'react'

import Icon from '../Icon'

type LayoutName = 'list' | 'grid'
type Props = { layout: LayoutName, onClick: (layoutName: LayoutName) => void }

const ToggleLayoutButtons = (props: Props): any => {
  const renderLayoutBtn = (layoutName: LayoutName) => (
    <div
      className={`layout-icon ${props.layout === layoutName ? 'selected' : ''}`}
    >
      <Icon name={layoutName} />
    </div>
  )

  const isLayoutGrid = props.layout === 'grid'
  const nextLayout = isLayoutGrid ? 'list' : 'grid'

  return (
    <div className="toggle-layout-buttons">
      <button
        aria-label="Display emoji as grid"
        aria-pressed={isLayoutGrid}
        className="btn"
        onClick={() => {
          props.onClick(nextLayout)
        }}
      >
        {renderLayoutBtn('grid')}
        {renderLayoutBtn('list')}
      </button>
    </div>
  )
}

export default ToggleLayoutButtons
