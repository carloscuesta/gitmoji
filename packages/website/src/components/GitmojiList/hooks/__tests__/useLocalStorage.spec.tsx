import renderer, { act } from 'react-test-renderer'

import useLocalStorage from '../useLocalStorage'
import * as stubs from './stubs'

const TestComponent = ({
  storageKey,
  storageValue,
}: {
  storageKey: string
  storageValue: string
}) => {
  const [value, setValue] = useLocalStorage(storageKey, storageValue)
  return (
    <div>
      <span data-testid="value">{value}</span>
      <button
        onClick={() => setValue(stubs.localStorageMock.newValue)}
        data-testid="set-button"
      />
    </div>
  )
}

Object.defineProperty(window, 'localStorage', {
  writable: true,
  value: { setItem: jest.fn(), getItem: jest.fn() },
})

const getItem = window.localStorage.getItem as jest.Mock

describe('useLocalStorage', () => {
  describe('when value is not persisted', () => {
    beforeAll(() => {
      getItem.mockReturnValue(null)
    })

    it('should call localStorage.get', () => {
      renderer.create(
        <TestComponent
          storageKey={stubs.localStorageMock.key}
          storageValue={stubs.localStorageMock.value}
        />,
      )

      expect(window.localStorage.getItem).toHaveBeenCalledWith(
        stubs.localStorageMock.key
      )
    })

    it('should call localStorage.set', () => {
      const component = renderer.create(
        <TestComponent
          storageKey={stubs.localStorageMock.key}
          storageValue={stubs.localStorageMock.value}
        />,
      )
      const setButton = component.root.findByProps({
        'data-testid': 'set-button',
      })

      act(() => {
        setButton.props.onClick()
      })

      const value = component.root.findByProps({ 'data-testid': 'value' })
        .children[0]
      expect(value).toBe(stubs.localStorageMock.newValue)
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        stubs.localStorageMock.key,
        JSON.stringify(stubs.localStorageMock.newValue)
      )
    })
  })

  describe('when there is an error', () => {
    const consoleError = console.error

    beforeAll(() => {
      getItem.mockReturnValue(new Error('Test'))

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
        />,
      )

      wrapper.update(
        <TestComponent
          storageKey={stubs.localStorageMock.key}
          storageValue={stubs.localStorageMock.value}
        />,
      )

      expect(console.error).toHaveBeenCalledWith(expect.any(String))
    })
  })
})
