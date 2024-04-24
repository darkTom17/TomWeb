// ! 在 JavaScript 中，有两种主要的导出方式，分别是默认导出（Default Export）和命名导出（Named Export）。
// ! 但是，你可以将它们组合使用，形成第三种方式，即混合导出（Mixed Export）。
// ! 所以，总共有三种暴露方式：
// @ 默认导出（Default Export）export default后面直接跟值【常量，对象，函数】
// # 默认暴露允许你在一个模块中指定一个默认的导出。这个默认导出可以是任何类型的值（对象、函数、类等）。
// # 当其他模块引入该模块时，可以使用任意的名称来引用默认导出。
// $module.js
export default {
    key: 'value'
};

// $import.js
import module from './module.js';
console.log(module.key); // 'value'
// @ 命名导出（Named Export）
// # 命名导出允许你在模块中指定多个导出，每个导出都有一个名字。
// # 其他模块引入该模块时，可以使用相同的名称来引用这些导出。
// $module.js
export const name = 'John';
export const age = 30;

// $import.js
import { name, age } from './module.js';
console.log(name); // 'John'
console.log(age); // 30
// @ 混合导出（Mixed Export）
// # 混合导出是同时使用默认导出和命名导出的方式。
// # 一个模块可以同时有默认导出和命名导出。
// $module.js
export default {
    key: 'value'
};
export const name = 'John';
export const age = 30;

// $import.js
import module, { name, age } from './module.js';
console.log(module.key); // 'value'
console.log(name); // 'John'
console.log(age); // 30