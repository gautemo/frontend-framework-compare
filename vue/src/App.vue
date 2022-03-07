<script setup lang="ts">
import AddTodo from './components/AddTodo.vue'
import ListTodo from './components/ListTodo.vue';
import ThemeSwitch from './components/ThemeSwitch.vue';
</script>

<template>
  <h1>My Vue ToDo</h1>
  <AddTodo />
  <ListTodo/>
  <ThemeSwitch/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  margin: 0 auto;
  max-width: 500px;
  position: relative;
}

h1{
  text-align: center;
}

.dark{
  background-color: #243447;
  color: #f5f5f5;
}
</style>
