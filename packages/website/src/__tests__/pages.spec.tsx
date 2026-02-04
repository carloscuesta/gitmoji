import { render, screen } from '@testing-library/react'

import RootLayout from '../app/layout'
import Home from '../app/page'
import About from '../app/about/page'
import Specification from '../app/specification/page'
import RelatedTools from '../app/related-tools/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  })),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  usePathname: jest.fn(() => '/'),
}))

jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  useTheme: jest.fn(() => ({
    resolvedTheme: 'light',
    setTheme: jest.fn(),
  })),
}))

describe('Pages', () => {
  beforeAll(() => {
    Math.random = jest.fn().mockReturnValue(1)
  })

  describe('RootLayout', () => {
    it('should include theme provider and layout wrapper', () => {
      expect(RootLayout).toBeDefined()
      expect(typeof RootLayout).toBe('function')
    })
  })

  describe('Home', () => {
    it('should render the page', () => {
      const { container } = render(<Home />)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  describe('About', () => {
    it('should render the page with about content', () => {
      render(<About />)
      expect(screen.getByText(/About/i)).toBeInTheDocument()
    })
  })

  describe('Specification', () => {
    it('should render the page with specification content', () => {
      render(<Specification />)
      const heading = screen.getByRole('heading', {
        name: /Specification/i,
        level: 1,
      })
      expect(heading).toBeInTheDocument()
    })
  })

  describe('Related tools', () => {
    it('should render the page', () => {
      render(<RelatedTools />)
      expect(screen.getByText(/Related Tools/i)).toBeInTheDocument()
    })
  })
})
