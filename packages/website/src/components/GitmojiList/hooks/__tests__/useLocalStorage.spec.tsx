import { render } from '@testing-library/react'

import useLocalStorage from '../useLocalStorage'
import * as stubs from './stubs'

const TestComponent = ({
  storageKey,
  storageValue,
}: {
  storageKey: string
  storageValue: string
}) => {
  useLocalStorage(storageKey, storageValue)

  return null
}

Object.defineProperty(window, 'localStorage', {
  writable: true,
  value: { setItem: jest.fn(), getItem: jest.fn() },
})

const getItem = window.localStorage.getItem as jest.Mock
const setItem = window.localStorage.setItem as jest.Mock

describe('useLocalStorage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('when value is not persisted', () => {
    beforeEach(() => {
      getItem.mockReturnValue(null)
    })

    it('should call localStorage.setItem', () => {
      const { rerender } = render(
        <TestComponent
          storageKey={stubs.localStorageMock.key}
          storageValue={stubs.localStorageMock.value}
        />,
      )

      rerender(
        <TestComponent
          storageKey={stubs.localStorageMock.key}
          storageValue={stubs.localStorageMock.value}
        />,
      )

      expect(setItem).toHaveBeenCalledWith(
        stubs.localStorageMock.key,
        stubs.localStorageMock.value,
      )
    })
  })

  describe('when there is an error', () => {
    const consoleError = console.error

    beforeEach(() => {
      getItem.mockImplementation(() => {
        throw new Error('Test')
      })

      Object.defineProperty(console, 'error', {
        writable: true,
        value: jest.fn(),
      })
    })

    afterEach(() => {
      Object.defineProperty(console, 'error', {
        writable: true,
        value: consoleError,
      })
    })

    it('should call console.error', () => {
      const { rerender } = render(
        <TestComponent
          storageKey={stubs.localStorageMock.key}
          storageValue={stubs.localStorageMock.value}
        />,
      )

      rerender(
        <TestComponent
          storageKey={stubs.localStorageMock.key}
          storageValue={stubs.localStorageMock.value}
        />,
      )

      expect(console.error).toHaveBeenCalledWith(expect.any(String))
    })
  })
})
