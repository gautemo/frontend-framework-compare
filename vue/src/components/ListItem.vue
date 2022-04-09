<script setup lang="ts">
defineProps<{
  todo: string
}>()
const emit = defineEmits<{
  (e: 'delete'): void
}>()
</script>

<template>
  <li>
    <span>{{todo}}</span>
    <button @click="emit('delete')">x</button>
  </li>
</template>

<style scoped>
li{
  padding: 20px 10px;
  border-radius: 5px;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li > button{
  cursor: pointer;
  border: none;
  background: none;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
}

li > button:hover{
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
