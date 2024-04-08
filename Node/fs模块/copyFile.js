const fs = require('fs');
const wc = fs.createWriteStream('./copyTargetFile.js');
const rc = fs.createReadStream('./fs.js')

// @方式一
rc.on('data',unitl=>{
    wc.write(unitl.toString());
})
rc.on('end',()=>{
    wc.close();
})

// @方式二【直接把读取流的东西交给写入流】
rc.pipe(wc);

