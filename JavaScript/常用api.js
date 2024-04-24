// ! Object.assign() 
// # JavaScript 中用于将一个或多个源对象的属性复制到目标对象的方法。它接收一个目标对象和一个或多个源对象作为参数，并返回目标对象。
Object.assign(target, ...sources)
【例】
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

const result = Object.assign(target, source1, source2);
console.log(target); // 输出: { a: 1, b: 3, c: 5, d: 6 }
console.log(result === target); // 输出: true，Object.assign() 返回的是目标对象