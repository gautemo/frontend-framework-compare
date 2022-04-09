import styles from './ListItem.module.css'

interface Props {
  todo: string;
  delete: () => void;
}

export function ListItem(props: Props) {
  return (
    <li className={styles.listItem}>
      <span>{props.todo}</span>
      <button onClick={props.delete}>x</button>
    </li>
  )
}