<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>测试：{{ TT.t }}</h2>
    <h2>年龄：{{ obj.age }}</h2>
    <h2>性别：{{ obj.sex }}</h2>
    <button @click="add">ADD</button>
    <button @click="c1">c1</button>
    <button @click="c2">c2</button>
    <button @click="c3">c3</button>
    <button @click="c4">c4</button>
    <button @click="c5">c5</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
let name = ref("KK");
let TT = ref({ t: 3333 });
let obj = reactive({
  age: 12,
  sex: "man",
});
function add() {
  obj.age++;
}

function c1() {
  name.value = "123";
}
function c2() {
  obj = { age: 14444, sex: "man" };
}
function c3() {
  Object.assign(obj, { age: 11212, sex: "man" });
}
function c4() {
  obj.age ++
}
function c5() {
  TT.value.t++;
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>