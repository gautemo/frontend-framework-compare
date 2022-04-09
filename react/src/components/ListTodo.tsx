import { useStore } from '../AppStoreProvider'
import { ListItem } from './ListItem'
import styles from './ListTodo.module.css'

export function ListTodo() {
  const context = useStore()

  return (
    <ul className={styles.list}>
      {context.todos.map(todo => 
        <ListItem key={todo} todo={todo} delete={() => context.deleteTodo(todo)}/>
      )}
    </ul >
  )
}