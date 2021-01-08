import Router from 'next/router'
import renderer from 'react-test-renderer'

import GitmojiList from '../index'
import * as stubs from './stubs'

jest.mock('next/router', () => ({
  query: {},
  useRouter: jest.fn().mockImplementation(() => ({
    query: {},
    push: jest.fn(),
  })),
}))

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
    beforeAll(() => {
      Router.useRouter.mockReturnValue(stubs.routerMock())
    })

    it('should find the fire gitmoji by code', () => {
      const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
      const instance = wrapper.root
      const query = 'Fire'

      renderer.act(() => {
        instance
          .findByType('input')
          .props.onChange({ target: { value: query } })
      })

      expect(instance.findAllByType('article').length).toEqual(1)
    })

    it('should find the fire gitmoji by description', () => {
      const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
      const instance = wrapper.root
      const query = 'remove'

      renderer.act(() => {
        instance
          .findByType('input')
          .props.onChange({ target: { value: query } })
      })

      expect(instance.findAllByType('article').length).toEqual(1)
    })
  })

  describe('when search is provided by query string', () => {
    beforeAll(() => {
      Router.useRouter.mockReturnValue(stubs.routerMock({ search: 'fire' }))
    })

    it('should set the search input value to query.search', () => {
      const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
      const query = 'fire'

      renderer.act(() => {
        wrapper.update(<GitmojiList {...stubs.props} />)
      })

      expect(wrapper.root.findByType('input').props.value).toEqual(query)
    })

    describe('when the user deletes the search input', () => {
      it('should clear the query string', () => {
        const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
        const instance = wrapper.root

        renderer.act(() => {
          instance.findByType('input').props.onChange({ target: { value: '' } })
        })

        expect(Router.useRouter().push).toHaveBeenCalledWith('/', undefined, {
          shallow: true,
        })
      })
    })
  })
})
