import Button from 'src/components/Button'
import Logo from './Logo'
import styles from './styles.module.css'

type Props = { withHeadline: boolean }

const Header = (props: Props) => (
  <header className={styles.header}>
    <Logo />
    {props.withHeadline && (
      <h2 className={styles.title}>An emoji guide for your commit messages</h2>
    )}
    <div className={styles.buttons}>
      <Button
        icon="star"
        link="https://github.com/carloscuesta/gitmoji"
        text="GitHub"
      />
      <Button
        icon="twitter-x"
        link={
          'https://twitter.com/intent/tweet?text=gitmoji' +
          '%20%E2%80%93%20An%20%23emoji%20guide%20for%20your%20commit' +
          '%20messages%20by%20%40crloscuesta%20%F0%9F%98%8D%F0%9F%98%9C' +
          '&url=https://gitmoji.dev'
        }
        target="_blank"
        text="Share"
      />
    </div>
  </header>
)

export default Header
