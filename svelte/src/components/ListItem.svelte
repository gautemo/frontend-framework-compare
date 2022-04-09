<script lang="ts">
import { createEventDispatcher } from 'svelte'
export let todo: string

const dispatch = createEventDispatcher()
</script>
  
<li>
  <span>{todo}</span>
  <button on:click={() => dispatch('delete')}>x</button>
</li>
  
<style>
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
  