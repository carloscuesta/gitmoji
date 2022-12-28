import Link from 'next/link'

import Icon from 'src/components/Icon'
import styles from './styles.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className="wrap">
      <div className="row middle-xs">
        <div className={`col-sm-6 ${styles.madeWithLove}`}>
          <h3>
            Made with <Icon name="heart" /> by{' '}
            <a href="https://carloscuesta.me">Carlos Cuesta</a>
          </h3>
        </div>
        <div className={`col-sm-6 ${styles.footerNav}`}>
          <nav>
            <Link href="/about">About</Link>
            <Link href="/contributors">Contributors</Link>
            <a href="https://github.com/carloscuesta/gitmoji">GitHub</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
