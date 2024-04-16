<template>
    <div class="app">
        <h1>Vue3</h1>
        <Person />
    </div>
  
</template>

<script lang="ts">
import Person from "./components/Person.vue"
export default {
    name: 'App',
    components:{Person}
}
</script>

<style scoped>
.app{
    background-color: bisque;
    box-shadow: 0 0 10px;
    border-radius: 20px;
    padding: 20px;
}
</style>