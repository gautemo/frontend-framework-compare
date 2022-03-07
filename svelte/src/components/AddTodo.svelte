<script lang="ts">
  import { store } from "../store";

  let input = '';
  function addTodo() {
    $store.todos = [...$store.todos, input]
    input = '';
  }
</script>

<section>
  <label>
    What to do?
    <input type="text" bind:value={input} on:keyup={event => event.code === 'Enter' && addTodo()} />
  </label>
  <button disabled={!input} on:click={addTodo}>Add</button>
</section>

<style>
  section {
    display: flex;
    gap: 5px;
    align-items: flex-end;
  }

  label {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  input,
  button {
    font-size: 1.5rem;
    font-family: inherit;
    height: 40px;
    box-sizing: border-box;
  }
</style>
