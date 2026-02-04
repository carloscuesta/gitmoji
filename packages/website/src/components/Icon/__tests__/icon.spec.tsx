import { render } from '@testing-library/react'

import Icon, { IconDefinitions } from '../index'
import * as stubs from './stubs'

describe('Icon', () => {
  it('should render the component with correct icon reference', () => {
    const { container } = render(<Icon {...stubs.props} />)

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass(`icon-${stubs.props.name}`)

    const use = container.querySelector('use')
    expect(use).toBeInTheDocument()
    expect(use).toHaveAttribute('xlink:href', `#icon-${stubs.props.name}`)
  })

  it('should render IconDefinitions with all symbols', () => {
    const { container } = render(<IconDefinitions />)

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()

    const defs = container.querySelector('defs')
    expect(defs).toBeInTheDocument()
  })
})
