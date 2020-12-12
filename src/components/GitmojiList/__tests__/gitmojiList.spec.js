import renderer from 'react-test-renderer'

import GitmojiList from '../index'
import * as stubs from './stubs'

describe('GitmojiList', () => {
  describe('when is list mode', () => {
    it('should render the component', () => {
      const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when is not list mode', () => {
    it('should render the component', () => {
      const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
      const instance = wrapper.root

      renderer.act(() => {
        instance.findAllByType('button')[1].props.onClick()
      })

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when user search the fire gitmoji', () => {
    it('should filter the GitmojiList and find the fire gitmoji by code', () => {
      const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
      const instance = wrapper.root

      renderer.act(() => {
        instance
          .findByType('input')
          .props.onChange({ target: { value: 'Fire' } })
      })

      expect(instance.findAllByType('article').length).toEqual(1)
    })

    it('should filter the GitmojiList and find the fire gitmoji by description', () => {
      const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
      const instance = wrapper.root

      renderer.act(() => {
        instance
          .findByType('input')
          .props.onChange({ target: { value: 'remove' } })
      })

      expect(instance.findAllByType('article').length).toEqual(1)
    })
  })
})
