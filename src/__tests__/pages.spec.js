import renderer from 'react-test-renderer'
import { enableFetchMocks } from 'jest-fetch-mock'

import App from '../pages/_app'
import Index from '../pages/index'
import About from '../pages/about'
import Contributors, {
  getStaticProps as getContributorsStaticProps,
} from '../pages/contributors'
import RelatedTools from '../pages/related-tools'
import GitmojisApi from '../pages/api/gitmojis'
import gitmojisData from '../data/gitmojis.json'
import * as stubs from './stubs'

jest.mock('next/router', () => ({
  query: {},
  events: { on: jest.fn(), off: jest.fn() },
  useRouter: jest.fn().mockImplementation(() => ({
    query: {},
  })),
}))

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    addListener: jest.fn(),
  })),
})

describe('Pages', () => {
  describe('App', () => {
    beforeAll(() => {
      Math.random = jest.fn().mockReturnValue(1)
    })

    it('should render the page', () => {
      const wrapper = renderer.create(<App {...stubs.appProps} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Index', () => {
    it('should render the page', () => {
      const wrapper = renderer.create(<Index />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('About', () => {
    it('should render the page', () => {
      const wrapper = renderer.create(<About />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Contributors', () => {
    beforeAll(() => {
      enableFetchMocks()
    })

    it('should fetch contributos from GitHub', async () => {
      fetch.mockResponseOnce(JSON.stringify(stubs.contributorsMock))

      const props = await getContributorsStaticProps()

      expect(props).toEqual({
        props: {
          contributors: stubs.contributors,
        },
        revalidate: 3600 * 3,
      })
    })

    it('should render the page', () => {
      const wrapper = renderer.create(
        <Contributors contributors={stubs.contributors} />
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Related tools', () => {
    it('should render the page', () => {
      const wrapper = renderer.create(<RelatedTools />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Api', () => {
    describe('gitmojis endpoint', () => {
      describe('when request method is GET', () => {
        it('should set response status to 200 and gitmojis as body json', () => {
          const request = stubs.request('GET')
          const response = stubs.response()

          GitmojisApi(request, response)

          expect(response.status).toHaveBeenCalledWith(200)
          expect(response.json).toHaveBeenCalledWith(gitmojisData)
        })
      })

      describe('when request method is not GET', () => {
        it('should setHeader, status 405 and end the request', () => {
          const request = stubs.request('POST')
          const response = stubs.response()

          GitmojisApi(request, response)

          expect(response.setHeader).toHaveBeenCalledWith('Allow', ['GET'])
          expect(response.status).toHaveBeenCalledWith(405)
          expect(response.json).toHaveBeenCalledWith({
            error: `Error: method POST not allowed`,
          })
        })
      })
    })
  })
})
