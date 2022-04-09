import { useState } from 'react'
import { useStore } from '../AppStoreProvider'
import styles from './AddTodo.module.css'

export function AddTodo(){
  const [input, setInput] = useState('')
  const context = useStore()

  function addTodo() {
    if(input){
      context.addTodo(input)
      setInput('')
    }
  }

  return (
    <section className={styles.addRow}>
      <label className={styles.label}>
        What to do?
        <input 
          type="text" 
          value={input}
          onInput={(event: React.FormEvent<HTMLInputElement>) => setInput(event.currentTarget.value)}
          onKeyUp={event => event.code === 'Enter' && addTodo()}
        />
      </label>
      <button onClick={addTodo} disabled={!input} className={styles.addButton}>Add</button>
    </section>
  )
}