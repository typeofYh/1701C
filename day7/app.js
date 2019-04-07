const fs = require('fs');

// console.log(fs.readFile); //读取文件
// console.log(fs.readFileSync) //读取文件的同步方法 返回值为文件内容

//参数1:文件路径
//参数2:回调函数 error异常 data文件内容 || 接受数据的格式 
//data 返回 Buffer
fs.readFile('./内置模块.txt','utf8',(error,data)=>{
    if(error){
        return ;
    }
    console.log('2222',data); //utf8
})

console.log('1111',fs.readFileSync('./内置模块.txt','utf8'));

console.log(fs.writeFile); //写入文件
console.log(fs.writeFileSync); //写入文件

fs.writeFile('./a.txt','hello fs!',(error)=>{
    if(error){
        return;
    }
    console.log(2222,'文件写入成功');
})
fs.writeFileSync('./b.txt','hello fs!!!');
console.log(11111,'文件写入成功');