<script setup lang="ts">
import { store, deleteTodo } from '../store'
import ListItem from './ListItem.vue';
</script>

<template>
<ul>
  <ListItem v-for="todo in store.todos" :key="todo" :todo="todo" @delete="deleteTodo(todo)"/>
</ul>
</template>

<style scoped>
ul{
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>