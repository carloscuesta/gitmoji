import renderer from 'react-test-renderer'

import Layout from '../index'
import Status, { LOGO_STATUSES } from '../Header/Logo/Status'
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
    Object.values(LOGO_STATUSES)
      .map((status) => status)
      .forEach((status) => {
        it('should render Logo with status ' + status, () => {
          const wrapper = renderer.create(<Status status={status} />)

          expect(wrapper).toMatchSnapshot()
        })
      })
  })
})
