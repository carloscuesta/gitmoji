import renderer from 'react-test-renderer'

import Index from '../pages/index'
import About from '../pages/about'
import Contributors from '../pages/contributors'

describe('Pages', () => {
  beforeAll(() => {
    Math.random = jest.fn().mockReturnValue(1)
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
})
