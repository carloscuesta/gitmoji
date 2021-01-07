import renderer from 'react-test-renderer'

import App from '../pages/_app'
import Index from '../pages/index'
import About from '../pages/about'
import Contributors from '../pages/contributors'
import RelatedTools from '../pages/related-tools'
import * as stubs from './stubs'

jest.mock('next/router', () => ({
  query: {},
  events: { on: jest.fn(), off: jest.fn() },
  useRouter: jest.fn().mockImplementation(() => ({
    query: {},
    push: jest.fn(),
  })),
}))

describe('Pages', () => {
  describe('App', () => {
    beforeAll(() => {
      Math.random = jest.fn().mockReturnValue(1)
    })

    it('should render the page', () => {
      const wrapper = renderer.create(<App {...stubs.appProps} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Index', () => {
    it('should render the page', () => {
      const wrapper = renderer.create(<Index />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('About', () => {
    it('should render the page', () => {
      const wrapper = renderer.create(<About />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Contributors', () => {
    it('should render the page', () => {
      const wrapper = renderer.create(<Contributors />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Related tools', () => {
    it('should render the page', () => {
      const wrapper = renderer.create(<RelatedTools />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
