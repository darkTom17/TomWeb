// @ FS模块

// #文件写入

const fs = require('fs');

// $异步写入【err成功的话值为null】
fs.writeFile('./异步写入测试文件.md', '异步写入测试文件', err => {
    if (err) {
        console.log('异步写入失败！');
        return
    }
    console.log('异步写入成功!');
})


// $同步写入【由于是同步所以不存在回调函数】
fs.writeFileSync('./同步写入测试文件.md', '同步写入测试文件')


// $异步追加写入
fs.appendFile('./异步追加写入测试文件.md', '异步追加写入测试文件\n', err => {
    if (err) {
        console.log('异步追加写入失败！');
        return
    }
    console.log('异步追加写入成功!');
})


// $同步追加写入
fs.appendFileSync('./同步追加写入测试文件.md', '同步追加写入测试文件\n')


// $流式写入【适用于写入频率较高的操作，无需多次创立IO链接，也适合大文件的写入】
const ws = fs.createWriteStream('./流式写入文件.md');
ws.write('L1')
ws.write('L2')
ws.write('L3')
ws.close();

// #文件读取

// $异步读取
fs.readFile('./流式写入文件.md', (err, data) => {
    if (err) {
        console.log('读取失败');
        return
    }
    // data是一个Buffer对象
    console.log('读取文件>>>>\n',data.toString());
})

// $同步读取
let FileContent=fs.readFileSync('./异步追加写入测试文件.md');
console.log('读取文件>>>>\n',FileContent.toString());

// $流式读取
const rs = fs.createReadStream('./异步追加写入测试文件.md');
rs.on('data',chunck=>{
    console.log('流式读取>>>>',chunck,chunck.length,chunck.toString())
})
rs.on('end',()=>{
    console.log('读取完成！！！！');
})