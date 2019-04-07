const index = require('./src'); //index.js 是默认的入口文件
const fs = require('fs');  //内置模块
const Mock = require('mockjs');  //第三方包
// console.log(index);
// console.log(Mock);
// console.log(fs);

const jQuery = require('jquery')
console.log(jQuery);


// ./ ../ /  本地文件 自定义模块




// 前面不加路径 找的是内置模块或第三方包
//内置模块 nodejs本身自带模块 fs http path url

//第三方包 通过npm下载下来的  
//1.在当前目录查找node_modules -> mockjs 找不到
//2.去全局找 NODE_PATH环境变量用来配置npm -g 下载的路径
//3.最后找不到 Cannot find module 'jquery'  找不到包啦.该下载了!!!!


