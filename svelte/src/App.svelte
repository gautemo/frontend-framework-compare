<script lang="ts">
  import AddTodo from "./components/AddTodo.svelte";
  import ListTodo from "./components/ListTodo.svelte";
  import ThemeSwitch from "./components/ThemeSwitch.svelte";
</script>

<main>
  <h1>My Svelte ToDo</h1>
  <AddTodo />
  <ListTodo />
  <ThemeSwitch />
</main>

<style global>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    margin: 0 auto;
    max-width: 500px;
    position: relative;
  }

  h1 {
    text-align: center;
  }

  .dark {
    background-color: #243447;
    color: #f5f5f5;
  }
</style>
