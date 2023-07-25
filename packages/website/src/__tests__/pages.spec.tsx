import renderer from 'react-test-renderer'
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock'
import { gitmojis, schema } from 'gitmojis'
import { createMocks } from 'node-mocks-http'

import App from '../pages/_app'
import Index from '../pages/index'
import Specification from '../pages/specification'
import About from '../pages/about'
import Contributors, {
  getStaticProps as getContributorsStaticProps,
} from '../pages/contributors'
import RelatedTools from '../pages/related-tools'
import GitmojisApi from '../pages/api/gitmojis'
import SchemaGitmojisApi from '../pages/api/gitmojis/schema'
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
      // @ts-expect-error We don't need to pass router to test the App component.
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

  describe('Specification', () => {
    it('should render the page', () => {
      const wrapper = renderer.create(<Specification />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Contributors', () => {
    beforeAll(() => {
      enableFetchMocks()
    })

    it('should fetch contributos from GitHub', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(stubs.contributorsMock))

      const props = await getContributorsStaticProps({})

      expect(props).toEqual({
        props: {
          contributors: stubs.contributors,
        },
        revalidate: 3600 * 3,
      })
    })

    it('should render the page', () => {
      const wrapper = renderer.create(
        <Contributors contributors={stubs.contributors} />,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Related tools', () => {
    it('should render the page', () => {
      renderer.create(<RelatedTools />)
    })
  })

  describe('Api', () => {
    describe('gitmojis endpoint', () => {
      describe('when request method is GET', () => {
        it('should set response status to 200 and gitmojis as body json', () => {
          const { req, res } = createMocks({ method: 'GET' })

          GitmojisApi(req, res)

          expect(res.statusCode).toEqual(200)
          expect(res._getJSONData()).toEqual({ gitmojis })
        })
      })

      describe('when request method is not GET', () => {
        it('should setHeader, status 405 and end the request', () => {
          const { req, res } = createMocks({ method: 'POST' })

          GitmojisApi(req, res)

          expect(res.getHeaders().allow).toEqual(['GET'])
          expect(res.statusCode).toEqual(405)
          expect(res._getJSONData()).toEqual({
            error: `Error: method POST not allowed`,
          })
        })
      })
    })

    describe('schema endpoint', () => {
      describe('when request method is GET', () => {
        it('should set response status to 200 and gitmojis as body json', async () => {
          const { req, res } = createMocks({ method: 'GET' })

          SchemaGitmojisApi(req, res)

          expect(res.statusCode).toEqual(200)
          expect(res._getJSONData()).toEqual(schema)
        })
      })

      describe('when request method is not GET', () => {
        it('should setHeader, status 405 and end the request', () => {
          const { req, res } = createMocks({ method: 'POST' })

          SchemaGitmojisApi(req, res)

          expect(res.getHeaders().allow).toEqual(['GET'])
          expect(res.statusCode).toEqual(405)
          expect(res._getJSONData()).toEqual({
            error: `Error: method POST not allowed`,
          })
        })
      })
    })
  })
})
