import styles from './styles.module.css'

const isMacOs = () => {
  return (
    typeof window !== 'undefined' &&
    window.navigator.platform.toUpperCase().includes('MAC')
  )
}

const Kbd = () => {
  return <kbd className={styles.kbd}>{isMacOs() ? '⌘' : 'Ctrl'} K</kbd>
}

export default Kbd
