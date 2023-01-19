// hooks from https://usehooks.com/useLocalStorage/

import { useState } from 'react'

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((previousVal: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`ERROR: Loading ${key} from localStorage – ${error}`)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(`ERROR: Set ${key} to localStorage – ${error}`)
    }
  }
  return [storedValue, setValue]
}
