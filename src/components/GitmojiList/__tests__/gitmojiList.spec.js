import renderer from 'react-test-renderer'

import GitmojiList from '../index'
import * as stubs from './stubs'

describe('GitmojiList', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('when user search the bug gitmoji', () => {
    it('should filter the GitmojiList and find the bug gitmoji', () => {
      const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
      const instance = wrapper.root

      renderer.act(() => {
        instance
          .findByType('input')
          .props.onChange({ target: { value: 'Bug' } })
      })

      expect(instance.findAllByType('article').length).toEqual(1)
    })
  })
})
