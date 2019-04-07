const fs = require('fs');
const rs = fs.createReadStream('./1.wmv');  //创建可读流
const ws = fs.createWriteStream('./2.wmv'); //创建可写流
rs.pipe(ws);  //pipe 管道流
// console.log(rs);

// 当可读流发生变化时触发
// rs.on('data',(chunk)=>{
//     //chunk是临时数据
//     if(!ws.write(chunk)){  //没有写入完成
//         rs.pause();  //暂停读取文件
//     } //写入临时数据
// })
// //写入完成触发事件
// ws.on('drain',()=>{
//     console.log('drain');
//     //开始读取第二次
//     rs.resume();  //开始读取
// })
// rs.on('end',()=>{
//     console.log('完成');
// })

// fs.readFile('./1.wmv',(error,data)=>{
//     if(error){
//         console.log(error);
//         return ;
//     }
//     fs.writeFile('./2.wmv',data,(error)=>{
//         if(error){
//             console.log(error);
//             return;
//         }
//         console.log('成功');
//     })
// })