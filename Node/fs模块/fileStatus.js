const fs = require ('fs');
fs.stat('./fs.js',(err,data)=>{
    if (err){
         console.log('读取资源失败');
         return
    }
    console.log('读取资源成功!',data);
})