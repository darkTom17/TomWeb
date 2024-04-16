<template>
    <div class="person">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="show">展示</button>
    </div>    
</template>

<script lang="ts">

export default {
    name: 'Person',
    data(){
        return{
            name:'王一',
            age:18,
            tel:12333333
        }
    },
    methods:{
        show(){
            alert(1)
        }
    }
}
</script>

<style scoped>
.person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 20px;
    padding: 20px;
}
</style>