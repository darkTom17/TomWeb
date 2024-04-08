const fs = require('fs');
fs.rename('./copyTargetFile.js','./rename.js',err=>{
    if (err){
         console.log('移动或者重命名失败！');
         return
    }
    console.log('成功！');
})