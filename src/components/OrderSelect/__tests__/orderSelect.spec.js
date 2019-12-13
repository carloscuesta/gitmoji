import renderer from 'react-test-renderer'

import OrderSelect from '../index'
import * as stubs from './stubs'

describe('OrderSelect', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<OrderSelect {...stubs.props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
