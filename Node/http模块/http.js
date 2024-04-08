const fs= require('fs');
// @方式一
fs.unlink('./rename.js',err=>{
    if (err){
         console.log('删除失败');
         return
    }
    console.log('删除成功！');
})
// @方式二
fs.rm('./同步写入测试文件.md',err=>{
    if (err){
         console.log('删除失败');
         return
    }
    console.log('删除成功！');
})