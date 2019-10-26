import renderer from 'react-test-renderer'

import Button from '../index'
import * as stubs from './stubs'

describe('Button', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<Button {...stubs.props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
