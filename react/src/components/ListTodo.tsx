import { useStore } from '../AppStoreProvider'
import styles from './ListTodo.module.css'

export function ListTodo() {
  const context = useStore()

  return (
    <ul className={styles.list}>
      {context.todos.map(todo => 
        <li key={todo}>{todo}</li>  
      )}
    </ul >
  )
}