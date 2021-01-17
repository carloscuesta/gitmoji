// @flow
import React from 'react'

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (((T) => T) | T) => void] {
  const [state, setState] = React.useState<T>(defaultValue)

  React.useEffect(() => {
    try {
      const localValue = window.localStorage.getItem(key)

      if (localValue !== null) {
        setState(JSON.parse(localValue))
      }
    } catch (error) {
      console.error(`ERROR: Loading ${key} from localStorage – ${error}`)
    }
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state])

  return [state, setState]
}
