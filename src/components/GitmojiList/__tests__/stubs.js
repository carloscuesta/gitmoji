import { gitmojis } from '../../../data/gitmojis.json'

export const props = {
  gitmojis: gitmojis.slice(0, 6),
}

export const routerMock = (query = {}) => ({
  query,
  push: jest.fn(),
})
