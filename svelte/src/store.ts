import { writable } from 'svelte/store';

export const store = writable<{todos: string[]}>({
  todos: []
});

export function deleteTodo(todo: string){
  store.update(s => ({
    todos: s.todos.filter(t => t !== todo)
  }))
}