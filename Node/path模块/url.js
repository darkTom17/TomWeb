const fs = require('fs');
const path = require('path')

// @相对路径  【始终是以命令行的工作目录作为参考标准】
// fs.writeFileSync('test01.md','12')
// fs.writeFileSync('./test01.md','12')
// fs.writeFileSync('../test01.md','12')

// @绝对路径
// fs.writeFileSync('D:/test01.md','12')
// fs.writeFileSync('/test01.md','12')
// $__dirname 始终保存的是所在文件的所在目录的绝对路径
console.log(__dirname);

// $__dirname 始终保存的是所在文件的绝对路径
console.log(__filename);

// @ path.resolve ==> 拼接规范的绝对路径
console.log(path.resolve(__dirname,'index.html'))
console.log(path.resolve(__dirname,'./index.html'))