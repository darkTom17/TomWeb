// ! 【1】vue3中父组件要拿到子组件的数据
// # 要在子组件用defineExpose将数据暴露出来
// ! 【2】vue3中子组件要用父组件的东西
// # 要在子组件用defineProps接收数据
// # 使用withDefaults来设置接收不到数据时的默认值
// ~ 【类似于defineExpose、defineProps...define开头的宏函数无需引入即可使用】
// ! 【3】watchEffect无须指明监听，会根据你用的数据进行动态监听
// #watchEffect(()=>{
// #    ...
// #})
// ~ 【4】hooks代码模块化规范
// # 【1】src下建立hooks文件夹
// # 【2】文件以use+“workName”命名并塞选去相关业务代码
// # 【3】将函数暴露出去，函数需将相关数据return出去
