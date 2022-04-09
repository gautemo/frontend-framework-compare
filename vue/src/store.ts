import { reactive } from 'vue';

export const store = reactive<{todos: string[]}>({
  todos: []
})

export function deleteTodo(todo: string){
  store.todos = store.todos.filter(t => t !== todo)
}