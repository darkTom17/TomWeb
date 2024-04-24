<template>
  <div class="person">
    <h2>姓名：{{ a.name }}</h2>
    <h2>年龄：{{ a.age }}</h2>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
let a = reactive({
  name: "王一",
  age: 18,
  tel: 12333333,
});
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>