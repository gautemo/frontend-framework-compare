<script lang="ts">
import { store, deleteTodo } from '../store'
import ListItem from './ListItem.svelte';
</script>

<template>
<ul>
  {#each $store.todos as todo (todo)}
    <ListItem {todo} on:delete={() => deleteTodo(todo)}/>
  {/each}
</ul>
</template>

<style>
ul{
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>