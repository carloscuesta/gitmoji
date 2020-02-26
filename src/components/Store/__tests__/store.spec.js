import { StateProvider } from '../store'
import renderer from 'react-test-renderer'

describe('Store', () => {
  it('should render StateProvider', () => {
    const wrapper = renderer.create(
      <StateProvider>
        <div>test</div>
      </StateProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
