import { useRouter, useSearchParams } from 'next/navigation'
import { render, screen, fireEvent } from '@testing-library/react'

import GitmojiList from '../index'
import * as stubs from './stubs'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(() => '/'),
}))

const useRouterMock = useRouter as jest.Mock
const useSearchParamsMock = useSearchParams as jest.Mock

describe('GitmojiList', () => {
  beforeEach(() => {
    useRouterMock.mockReturnValue(stubs.appRouterMock())
    useSearchParamsMock.mockReturnValue(stubs.searchParamsMock())
  })

  describe('when is not list mode', () => {
    it('should render the component in grid mode by default', () => {
      const { container } = render(<GitmojiList {...stubs.props} />)

      const articles = container.querySelectorAll('article')
      expect(articles.length).toBeGreaterThan(0)
    })
  })

  describe('when is list mode', () => {
    it('should switch to list mode when clicking the list button', () => {
      const { container } = render(<GitmojiList {...stubs.props} />)

      const buttons = screen.getAllByRole('button')
      const listModeButton = buttons[1]

      fireEvent.click(listModeButton)

      const articles = container.querySelectorAll('article')
      expect(articles.length).toBeGreaterThan(0)
    })
  })

  describe('when user search the fire gitmoji', () => {
    beforeEach(() => {
      useRouterMock.mockReturnValue(stubs.appRouterMock())
      useSearchParamsMock.mockReturnValue(stubs.searchParamsMock())
    })

    it('should find the fire gitmoji by code', () => {
      const { container } = render(<GitmojiList {...stubs.props} />)
      const input = screen.getByRole('searchbox')
      const query = 'Fire'

      fireEvent.change(input, { target: { value: query } })

      const articles = container.querySelectorAll('article')
      expect(articles.length).toEqual(1)
    })

    it('should find the fire gitmoji by description', () => {
      const { container } = render(<GitmojiList {...stubs.props} />)
      const input = screen.getByRole('searchbox')
      const query = 'remove'

      fireEvent.change(input, { target: { value: query } })

      const articles = container.querySelectorAll('article')
      expect(articles.length).toEqual(1)
    })

    it('should find the fire gitmoji by emoji', () => {
      const { container } = render(<GitmojiList {...stubs.props} />)
      const input = screen.getByRole('searchbox')
      const query = '🔥'

      fireEvent.change(input, { target: { value: query } })

      const articles = container.querySelectorAll('article')
      expect(articles.length).toEqual(1)
    })
  })

  describe('when search is provided by query string', () => {
    beforeEach(() => {
      useRouterMock.mockReturnValue(stubs.appRouterMock())
      useSearchParamsMock.mockReturnValue(stubs.searchParamsMock('fire'))
    })

    it('should set the search input value to query.search', () => {
      render(<GitmojiList {...stubs.props} />)
      const query = 'fire'

      const input = screen.getByRole('searchbox')
      expect(input).toHaveValue(query)
    })

    describe('when the user deletes the search input', () => {
      it('should clear the query string', () => {
        const mockRouter = stubs.appRouterMock()
        useRouterMock.mockReturnValue(mockRouter)
        useSearchParamsMock.mockReturnValue(stubs.searchParamsMock('fire'))

        render(<GitmojiList {...stubs.props} />)
        const input = screen.getByRole('searchbox')

        fireEvent.change(input, { target: { value: '' } })

        expect(mockRouter.push).toHaveBeenCalledWith('/')
      })
    })
  })
})
