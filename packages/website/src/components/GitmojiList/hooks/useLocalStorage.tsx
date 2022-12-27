import { useState, useEffect } from 'react'

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const [state, setState] = useState(defaultValue)

  useEffect(() => {
    try {
      const localValue = window.localStorage.getItem(key)

      if (localValue !== null) {
        setState(JSON.parse(localValue))
      }
    } catch (error) {
      console.error(`ERROR: Loading ${key} from localStorage – ${error}`)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(key, `${state}`)
  }, [state])

  return [state, setState] as const
}
