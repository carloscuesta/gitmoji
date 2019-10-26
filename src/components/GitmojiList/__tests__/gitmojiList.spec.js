import renderer from 'react-test-renderer'

import GitmojiList from '../index'
import * as stubs from './stubs'

describe('GitmojiList', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
