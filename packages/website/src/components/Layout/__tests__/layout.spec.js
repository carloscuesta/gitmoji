import Router from 'next/router'
import renderer from 'react-test-renderer'

import Layout from '../index'
import Status, { LOGO_STATUSES } from '../Header/Logo/Status'
import * as stubs from './stubs'

jest.mock('next/router', () => ({
  pathname: '',
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
}))

Router.useRouter = () => ({
  pathname: '',
  events: {
    off: jest.fn(),
    on: jest.fn(),
  },
})

describe('Layout', () => {
  beforeAll(() => {
    Math.random = jest.fn().mockReturnValue(1)
  })

  it('should render the component', () => {
    const wrapper = renderer.create(
      <Layout {...stubs.props}>
        <p>Some children</p>
      </Layout>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should subscribe to routeChangeStart using Router.events listener on mount', () => {
    renderer.create(
      <Layout>
        <h1>Some children</h1>
        <h2>Hello!</h2>
      </Layout>
    )

    expect(Router.events.on).toHaveBeenCalledWith(
      'routeChangeStart',
      expect.any(Function)
    )
  })

  it('should unsubscribe to routeChangeStart using Router.events on unMount', () => {
    const wrapper = renderer.create(
      <Layout>
        <h1>Some children</h1>
        <h2>Hello!</h2>
      </Layout>
    )

    wrapper.unmount()

    expect(Router.events.on).toHaveBeenCalledWith(
      'routeChangeStart',
      expect.any(Function)
    )
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
