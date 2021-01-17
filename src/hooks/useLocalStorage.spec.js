import React from 'react'
import useLocalStorage from './useLocalStorage'
import renderer from 'react-test-renderer'

function setup(...args) {
  let returnValue

  function TestComponent() {
    returnValue = useLocalStorage(...args)
    return returnValue[0]
  }

  renderer.act(() => {
    renderer.create(<TestComponent />)
  })

  return returnValue || []
}

describe('useLocalStorage hook', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  describe('when its initialized', () => {
    it('should return value and setter function', async () => {
      const [value, setValue] = setup('key', 'value')

      expect(value).toBe('value')
      expect(typeof setValue).toBe('function')
    })
  })

  describe('when there is already a value on local storage', () => {
    it('should return persisted value if exists', () => {
      window.localStorage.setItem('key1', false)

      const [value, setValue] = setup('key1', true)

      expect(value).toBe(false)
    })

    // it('should save value', () => {
    //   const [value, setValue] = setup('key2', true)

    //   setValue(false)

    //   expect(value).toBe(false)
    // })
  })
})
