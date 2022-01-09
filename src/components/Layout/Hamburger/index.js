// @flow
import React, { type Element } from 'react'
import Router from 'next/router'
import FocusTrap from 'focus-trap-react'

import MenuLink from './MenuLink'
import OpenIcon from './OpenIcon'
import CloseIcon from './CloseIcon'
import styles from './styles.module.css'

const Hamburger = (): Element<'div'> => {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const onRouteChangeStart = () => {
      setIsOpen(false)
    }

    Router.events.on('routeChangeStart', onRouteChangeStart)

    return () => Router.events.off('routeChangeStart', onRouteChangeStart)
  }, [])

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
                <MenuLink href="/contributors" text="Contributors" />
              </li>
              <li>
                <MenuLink href="/related-tools" text="Related tools" />
              </li>
              <li>
                <MenuLink
                  href="https://github.com/carloscuesta/gitmoji"
                  text="GitHub"
                />
              </li>
            </ul>
          </nav>
        </FocusTrap>
      )}
    </div>
  )
}

export default Hamburger
