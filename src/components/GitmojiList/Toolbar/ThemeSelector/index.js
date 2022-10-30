// @flow
import { type Element, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import Icon from 'src/components/Icon'
import styles from './styles.module.css'

const ThemeSelector = (): Element<'div' | 'button'> => {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const nextTheme = resolvedTheme === 'light' ? 'dark' : 'light'

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return (
      <div className={styles.container}>
        <button disabled className={`${styles.button}`} />
      </div>
    )
  }

  return (
    <button className={`${styles.button}`} onClick={() => setTheme(nextTheme)}>
      <Icon name={nextTheme} />
    </button>
  )
}

export default ThemeSelector
