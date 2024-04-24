<template>
    <div class="app">
        <h1>Vue3</h1>
        <Person />
        <Test />
    </div>
  
</template>

<script setup lang="ts">
import Person from "./components/Person.vue"
import Test from "./components/Test.vue"
</script>

<style scoped>
.app{
    background-color: bisque;
    box-shadow: 0 0 10px;
    border-radius: 20px;
    padding: 20px;
}
</style>