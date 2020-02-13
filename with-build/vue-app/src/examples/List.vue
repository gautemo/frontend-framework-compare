<template>
    <ul>
        <li v-for="todo in todos" :key="todo">{{todo}}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            todos: ['Eat', 'Move', 'Code', '😴😴😴']
        }
    }
}
</script>