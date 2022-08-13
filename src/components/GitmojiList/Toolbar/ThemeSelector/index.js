import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import Icon from 'src/components/Icon'
import styles from './styles.module.css'

const ThemeSelector = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return (
      <div className={styles.container}>
        <button disabled className={`${styles.button}`} />
      </div>
    )
  }

  return (
    <button
      className={`${styles.button}`}
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      <Icon name={resolvedTheme === 'light' ? 'dark' : 'light'} />
    </button>
  )
}

export default ThemeSelector
