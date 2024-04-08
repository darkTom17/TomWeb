const fs = require('fs');

// @普通创建
fs.mkdir('./html',err=>{
    if (err){
         console.log('创建失败',err);
         return
    }
    console.log('创建成功！');
})

// @递归创建
fs.mkdir('./a/b/c',{recursive:true},err=>{
    if (err){
         console.log('创建失败',err);
         return
    }
    console.log('创建成功！');
})

// @读取文件夹
fs.readdir('../fs模块',(err,data)=>{
    if (err){
        console.log('读取失败',err);
        return
   }
   console.log('读取成功！',data);
})

// @普通删除文件夹
fs.rmdir('./html',err=>{
    if (err){
         console.log('删除失败',err);
         return
    }
    console.log('删除成功！');
})

// @递归删除文件夹
fs.rm('./a',{recursive:true},err=>{
    if (err){
         console.log('删除失败',err);
         return
    }
    console.log('删除成功！');
})