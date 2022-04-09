<script setup lang="ts">
import { ref } from 'vue'
import { store } from '../store'

const input = ref('')
function addTodo(){
  if(input.value){
    store.todos.push(input.value)
    input.value = ''
  }
}
</script>

<template>
  <section>
    <label>
      What to do?
      <input type="text" v-model="input" @keyup.enter="addTodo"/>
    </label>
    <button :disabled="!input" @click="addTodo">Add</button>
  </section>
</template>

<style scoped>
section{
  display: flex;
  gap: 5px;
  align-items: flex-end;
}

label{
  flex: 1;
  display: flex;
  flex-direction: column;
}

input, button{
  font-size: 1.5rem;
  font-family: inherit;
  height: 40px;
  box-sizing: border-box;
}
</style>
