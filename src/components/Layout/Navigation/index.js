// @flow
import React from 'react'
import Link from 'next/link'

const Navigation = () => (
  <nav className="nav row middle-xs">
    <input className="c-hamburger__input" id="hamburger-menu" type="checkbox" />
    <label className="c-hamburger c-hamburger--htx" htmlFor="hamburger-menu">
      <span />
    </label>
    <div className="modal">
      <div className="modal-content">
        <ul className="navigation">
          <li className="item">
            <Link href="/">
              <a
                onMouseDown={() =>
                  window.ga('send', 'event', 'Menu', 'Gitmoji')
                }
              >
                Home
              </a>
            </Link>
          </li>
          <li className="item">
            <Link href="/about">
              <a
                onMouseDown={() => window.ga('send', 'event', 'Menu', 'About')}
              >
                About
              </a>
            </Link>
          </li>
          <li className="item">
            <Link href="/contributors">
              <a
                onMouseDown={() =>
                  window.ga('send', 'event', 'Menu', 'Contributors')
                }
              >
                Contributors
              </a>
            </Link>
          </li>
          <li className="item">
            <a
              href="https://github.com/carloscuesta/gitmoji"
              onMouseDown={() => window.ga('send', 'event', 'Menu', 'GitHub')}
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navigation
