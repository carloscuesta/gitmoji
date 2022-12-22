import renderer from 'react-test-renderer'

import Icon, { IconDefinitions } from '../index'
import * as stubs from './stubs'

describe('Icon', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<Icon {...stubs.props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match Definitions', () => {
    const wrapper = renderer.create(<IconDefinitions />)
    expect(wrapper).toMatchSnapshot()
  })
})
