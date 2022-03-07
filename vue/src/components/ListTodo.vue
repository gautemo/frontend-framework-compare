<script setup lang="ts">
import { store } from '../store'
</script>

<template>
<ul>
  <li v-for="todo in store.todos" :key="todo">{{todo}}</li>
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

li{
  padding: 20px 10px;
  border-radius: 5px;
  color: #000;
}

li:nth-child(3n){
  background-color: #ffc09f;
}
li:nth-child(3n+1){
  background-color: #a0ced9;
}
li:nth-child(3n+2){
  background-color: #adf7b6;
}
</style>