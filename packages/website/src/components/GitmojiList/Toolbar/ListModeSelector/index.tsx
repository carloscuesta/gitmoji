import Icon from 'src/components/Icon'
import styles from './styles.module.css'

type Props = {
  isListMode: boolean
  setIsListMode: (isListMode: boolean) => void
}

const ListModeSelector = (props: Props) => (
  <div className={styles.container}>
    <button
      className={`${styles.button} ${
        !props.isListMode ? styles.buttonActive : ''
      }`}
      disabled={!props.isListMode}
      onClick={() => props.setIsListMode(false)}
    >
      <Icon name="grid" />
    </button>

    <button
      className={`${styles.button} ${
        props.isListMode ? styles.buttonActive : ''
      }`}
      disabled={props.isListMode}
      onClick={() => props.setIsListMode(true)}
    >
      <Icon name="list" />
    </button>
  </div>
)

export default ListModeSelector
