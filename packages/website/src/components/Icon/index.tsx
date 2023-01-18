export { IconDefinitions } from './definitions'
import styles from './styles.module.css'

type Props = { name: string; height?: string; width?: string }

const Icon = (props: Props) => (
  <svg
    height={props.height ?? '1em'}
    width={props.width ?? '1em'}
    className={`${styles.icon} icon-${props.name}`}
  >
    <use xlinkHref={`#icon-${props.name}`} />
  </svg>
)

export default Icon
