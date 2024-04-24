const { log } = require('console');
const http = require('http');
const url = require('url');
const server = http.createServer((req,res) =>{
    let body='';
    // ~ 请求参数相关操作
    // @获取请求方法
    // console.log(req.method);
    // @获取请求URL
    // console.log(req.url);
    // @获取请求头
    // console.log(req.headers);
    // @获取请求体
    // req.on('data',(chunk)=>{
    //     body+=chunk;
    // })
    // req.on('end',()=>{
    //     console.log('>>>>>',body);
    // })
    // @获取请报文
    let URL =url.parse(req.url);
    // ~ 响应参数相关操作
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('你好')
})
server.listen(9000,()=>{
    console.log('服务已启动...');
})
// server.close(()=>{
//     console.log('服务已关闭');
// })