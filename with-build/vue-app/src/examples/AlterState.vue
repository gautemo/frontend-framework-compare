<template>
  <div>
      {{human.name}}, {{human.age}}, {{human.favouriteDinner}}. Counter: {{counter}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      human: { name: 'Gaute', age: 28, favouriteDinner: 'Pizza'},
      counter: 0
    }
  },
  mounted(){
    this.human.favouriteDinner = 'Candy';
    this.counter++;
  }
}
</script>
