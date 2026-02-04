import { render, screen } from '@testing-library/react'

import Layout from '../index'
import Status, { LOGO_STATUSES } from '../Header/Logo/Status'
import * as stubs from './stubs'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

describe('Layout', () => {
  beforeAll(() => {
    Math.random = jest.fn().mockReturnValue(1)
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the component with children', () => {
    render(
      <Layout {...stubs.props}>
        <p>Some children</p>
      </Layout>,
    )

    expect(screen.getByText('Some children')).toBeInTheDocument()
  })

  describe('Logo', () => {
    Object.values(LOGO_STATUSES)
      .map((status) => status)
      .forEach((status) => {
        it('should render Logo with status ' + status, () => {
          const { container } = render(<Status status={status} />)

          expect(container.firstChild).toBeInTheDocument()
        })
      })
  })
})
