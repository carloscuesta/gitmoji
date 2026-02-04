import { gitmojis } from 'gitmojis'

export const props = {
  gitmojis: gitmojis.slice(0, 6),
}

export const routerMock = (query = {}) => ({
  query,
  push: jest.fn(),
})

export const appRouterMock = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
})

export const searchParamsMock = (searchValue?: string) => {
  const params = new URLSearchParams()
  if (searchValue) {
    params.set('search', searchValue)
  }
  return params
}
