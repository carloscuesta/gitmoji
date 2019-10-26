import renderer from 'react-test-renderer'

import SEO from '../index'
import * as stubs from './stubs'

describe('Button', () => {
  it('should render the component with pageTitle and pageUrl', () => {
    const wrapper = renderer.create(<SEO {...stubs.props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the component', () => {
    const wrapper = renderer.create(<SEO />)
    expect(wrapper).toMatchSnapshot()
  })
})
