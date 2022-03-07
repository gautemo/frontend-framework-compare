import { writable } from 'svelte/store';

export const store = writable<{todos: string[]}>({
  todos: []
});