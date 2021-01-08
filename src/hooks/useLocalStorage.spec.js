import React from 'react'
import useLocalStorage from './useLocalStorage'
import renderer from 'react-test-renderer'

function setup(...args) {
  let returnValue
  function TestComponent() {
    returnValue = useLocalStorage(...args)
    return null
  }
  renderer.create(<TestComponent />)
  return returnValue
}

describe('useLocalStorage hook', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return value and setter function', () => {
    const [value, setValue] = setup('key', 'value')

    expect(value).toBe('value')
    expect(typeof setValue).toBe('function')
  })

  it('should return value from local storage if exists', () => {
    window.localStorage.setItem('key1', false)
    const [value, setValue] = setup('key1', true)

    expect(value).toBe(false)
  })

  it('should save in local storage', () => {
    const [value, setValue] = setup('key1', true)

    setValue(false)

    expect(value).toBe(false)
  })
})
