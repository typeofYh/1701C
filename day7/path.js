const path = require('path');
const fs = require('fs');
//path 
// console.log(path);

let filepath = './src/';  //相对路径
filepath += '../index.html';
//  / 绝对 找目录跟路径

const filepath1 = path.join('src/','../','index.html');  

//path.join() 查找相对路径 默认不传参数时查找 .
//相对路径 ./ 
let filepath2 = path.resolve(__dirname,'a.html'); 
//path.resolve()
//获取绝对路径
//根据cmd窗口的工程目录
console.log(__dirname); //魔术变量 返回的是当前文件地址

console.log(filepath2);

