import { useState, useEffect } from 'react'
import Router from 'next/router'
import FocusTrap from 'focus-trap-react'

import MenuLink from './MenuLink'
import OpenIcon from './OpenIcon'
import CloseIcon from './CloseIcon'
import styles from './styles.module.css'

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onRouteChangeStart = () => {
      setIsOpen(false)
    }

    Router.events.on('routeChangeStart', onRouteChangeStart)

    return () => Router.events.off('routeChangeStart', onRouteChangeStart)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <div className={styles.hamburger}>
      <button
        aria-label="Open navigation menu"
        className={styles.button}
        onClick={() => setIsOpen(true)}
      >
        <OpenIcon />
      </button>

      {isOpen && (
        <FocusTrap active={isOpen}>
          <nav className={styles.menu}>
            <div className={styles.closeContainer}>
              <button
                aria-label="Close navigation menu"
                className={styles.button}
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>

            <ul className={styles.links}>
              <li>
                <MenuLink href="/" text="Home" />
              </li>
              <li>
                <MenuLink href="/about" text="About" />
              </li>
              <li>
                <MenuLink href="/specification" text="Specification" />
              </li>
              <li>
                <MenuLink href="/contributors" text="Contributors" />
              </li>
              <li>
                <MenuLink href="/related-tools" text="Related tools" />
              </li>
            </ul>
          </nav>
        </FocusTrap>
      )}
    </div>
  )
}

export default Hamburger
