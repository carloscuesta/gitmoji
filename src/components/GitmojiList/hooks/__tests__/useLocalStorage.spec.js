import React from 'react'
import renderer from 'react-test-renderer'

import useLocalStorage from '../useLocalStorage'
import * as stubs from './stubs'

const TestComponent = ({ storageKey, storageValue }) => {
  useLocalStorage(storageKey, storageValue)

  return null
}

Object.defineProperty(window, 'localStorage', {
  writable: true,
  value: { setItem: jest.fn(), getItem: jest.fn() },
})

describe('useLocalStorage', () => {
  describe('when value is not persisted', () => {
    beforeAll(() => {
      window.localStorage.getItem.mockReturnValue(null)
    })

    it('should call localStorage.setItem', () => {
      const wrapper = renderer.create(
        <TestComponent
          storageKey={stubs.localStorageMock.key}
          storageValue={stubs.localStorageMock.value}
        />
      )

      wrapper.update()

      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        stubs.localStorageMock.key,
        `"${stubs.localStorageMock.value}"`
      )
    })
  })

  describe('when there is an error', () => {
    const consoleError = console.error

    beforeAll(() => {
      window.localStorage.getItem.mockReturnValue(new Error('Test'))

      Object.defineProperty(console, 'error', {
        writable: true,
        value: jest.fn(),
      })
    })

    afterAll(() => {
      Object.defineProperty(console, 'error', {
        writable: true,
        value: consoleError,
      })
    })

    it('should call console.error', () => {
      const wrapper = renderer.create(
        <TestComponent
          storageKey={stubs.localStorageMock.key}
          storageValue={stubs.localStorageMock.value}
        />
      )

      wrapper.update()

      expect(console.error).toHaveBeenCalledWith(expect.any(String))
    })
  })
})
