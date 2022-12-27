import { gitmojis } from 'gitmojis'

export const props = {
  gitmojis: gitmojis.slice(0, 6),
}

export const routerMock = (query = {}) => ({
  query,
  push: jest.fn(),
})
