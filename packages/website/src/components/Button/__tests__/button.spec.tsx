import { render, screen } from '@testing-library/react'

import Button from '../index'
import * as stubs from './stubs'

describe('Button', () => {
  it('should render the component with correct attributes', () => {
    render(<Button {...stubs.props} />)

    const link = screen.getByRole('link', { name: /GitHub/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('should render without icon when icon prop is not provided', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { icon, ...propsWithoutIcon } = stubs.props
    const { container } = render(<Button {...propsWithoutIcon} />)

    const link = screen.getByRole('link', { name: /GitHub/i })
    expect(link).toBeInTheDocument()
    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })
})
