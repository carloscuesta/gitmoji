import React from 'react'

import { StateProvider } from '../store'
import renderer from 'react-test-renderer'
import { store } from '../store'

describe('Store', () => {
  it('should render StateProvider', () => {
    const wrapper = renderer.create(
      <StateProvider>
        <div>test</div>
      </StateProvider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(store).toBeDefined()
  })
})
