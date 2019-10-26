import renderer from 'react-test-renderer'

import Layout from '../index'
import { getIconByStatus } from '../Logo'
import LOGO_STATUSES from '../Logo/statuses'
import * as stubs from './stubs'

describe('Layout', () => {
  beforeAll(() => {
    Math.random = jest.fn().mockReturnValue(1)
  })

  it('should render the component with social buttons', () => {
    const wrapper = renderer.create(
      <Layout {...stubs.props}>
        <p>Some children</p>
      </Layout>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the component without social buttons', () => {
    const wrapper = renderer.create(
      <Layout>
        <p>Some children</p>
      </Layout>
    )
    expect(wrapper).toMatchSnapshot()
  })

  describe('Logo', () => {
    describe('getIconByStatus', () => {
      const statuses = Object.values(LOGO_STATUSES).map((status) => status)

      statuses.forEach((status) => {
        it('should render component for status ' + status, () => {
          expect(getIconByStatus(status)).toMatchSnapshot()
        })
      })
    })
  })
})
