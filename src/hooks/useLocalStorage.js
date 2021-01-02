// @flow
import { useState, useEffect } from 'react'
import { window } from 'browser-monads'

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (((T) => T) | T) => void] {
  const [state, setState] = useState<T>(defaultValue)

  useEffect(() => {
    try {
      const localValue = window.localStorage.getItem(key)
      if (localValue) {
        setState(JSON.parse(localValue))
      }
    } catch (error) {
      console.error(`Error on load ${key} from localStorage`, error)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state])

  return [state, setState]
}
