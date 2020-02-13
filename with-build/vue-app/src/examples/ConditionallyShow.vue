<template>
    <div>
        <input type="checkbox" v-model="show">
        <p v-if="show">👋👋👋👋👋</p>
        <p v-else>💨</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show: true
        }
    }
}
</script>