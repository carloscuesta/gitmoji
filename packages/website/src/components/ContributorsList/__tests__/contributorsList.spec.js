import renderer from 'react-test-renderer'

import ContributorsList from '../index'
import Contributor from '../Contributor'
import * as stubs from './stubs'

describe('ContributorsList', () => {
  describe('Contributor', () => {
    it('should render the component', () => {
      const wrapper = renderer.create(
        <Contributor contributor={stubs.contributor} />
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  it('should render the component', () => {
    const wrapper = renderer.create(<ContributorsList {...stubs.props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
