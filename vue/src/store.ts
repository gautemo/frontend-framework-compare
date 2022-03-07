import { reactive } from 'vue';

export const store = reactive<{todos: string[]}>({
  todos: []
})