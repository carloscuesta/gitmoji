import renderer from 'react-test-renderer'

import CarbonAd from '../index'

describe('CarbonAd', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<CarbonAd />)
    expect(wrapper).toMatchSnapshot()
  })
})
