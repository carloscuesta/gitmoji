// @flow
import React from 'react'
import Link from 'next/link'

import Icon from '../../Icon'

const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="row middle-xs">
        <div className="col-sm-6 made-with-love">
          <h3>
            Made with <Icon name="heart" /> by{' '}
            <a href="https://carloscuesta.me">Carlos Cuesta</a>
          </h3>
        </div>
        <div className="col-sm-6 footer-nav">
          <nav>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contributors">
              <a>Contributors</a>
            </Link>
            <a href="https://github.com/carloscuesta/gitmoji">GitHub</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
