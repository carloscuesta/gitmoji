import renderer from 'react-test-renderer'

import SearchBox from '../index'

describe('SearchBox', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<SearchBox />)
    expect(wrapper).toMatchSnapshot()
  })
})
