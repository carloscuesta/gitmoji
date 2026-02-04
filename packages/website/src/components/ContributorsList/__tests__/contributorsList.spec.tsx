import { render } from '@testing-library/react'

import ContributorsList from '../index'
import Contributor from '../Contributor'
import * as stubs from './stubs'

describe('ContributorsList', () => {
  describe('Contributor', () => {
    it('should render the contributor with link and avatar', () => {
      const { container } = render(<Contributor {...stubs.contributor} />)

      const link = container.querySelector('a')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', stubs.contributor.url)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')

      const img = container.querySelector('img')
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', stubs.contributor.avatar)
    })
  })

  it('should render the list of contributors', () => {
    const { container } = render(<ContributorsList {...stubs.props} />)

    const links = container.querySelectorAll('a')
    expect(links).toHaveLength(stubs.props.contributors.length)
    expect(links[0]).toHaveAttribute('href', stubs.contributor.url)
  })
})
