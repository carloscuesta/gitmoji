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

    it('should find the fire gitmoji by code and update router.query', () => {
      const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
      const instance = wrapper.root
      const query = 'Fire'

      renderer.act(() => {
        instance
          .findByType('input')
          .props.onChange({ target: { value: query } })
      })

      expect(Router.useRouter().push).toHaveBeenLastCalledWith(
        { query: { search: query } },
        undefined,
        { shallow: true }
      )
      expect(instance.findAllByType('article').length).toEqual(1)
    })

    it('should find the fire gitmoji by description and update router.query', () => {
      const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
      const instance = wrapper.root
      const query = 'remove'

      renderer.act(() => {
        instance
          .findByType('input')
          .props.onChange({ target: { value: query } })
      })

      expect(Router.useRouter().push).toHaveBeenLastCalledWith(
        { query: { search: query } },
        undefined,
        { shallow: true }
      )
      expect(instance.findAllByType('article').length).toEqual(1)
    })
  })

  describe('when user deletes the search query', () => {
    beforeAll(() => {
      Router.useRouter.mockReturnValue(stubs.routerMock())
    })

    it('should clear the router.query', () => {
      const wrapper = renderer.create(<GitmojiList {...stubs.props} />)
      const instance = wrapper.root
      const query = 'Fire'

      renderer.act(() => {
        instance
          .findByType('input')
          .props.onChange({ target: { value: query } })
      })

      renderer.act(() => {
        instance.findByType('input').props.onChange({ target: { value: '' } })
      })

      expect(Router.useRouter().push).toHaveBeenLastCalledWith(
        { query: {} },
        undefined,
        { shallow: true }
      )
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

      expect(Router.useRouter().push).toHaveBeenCalledWith(
        { query: { search: query } },
        undefined,
        { shallow: true }
      )
      expect(wrapper.root.findByType('input').props.value).toEqual(query)
    })
  })
})
