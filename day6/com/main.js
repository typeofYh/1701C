//require(moudlePath) 引入模块  commonjs规范的引入方法
//默认可以忽略.js.json.node后缀
const reverse = require('./js/reverse')

console.log(reverse.reverse('hello'));


const insert = require('./js/insert');

insert([1,2,3,3],[{
    index:2,
    item:'hello'
},{
    index:3,
    item:'zs'
}]);

//[1,[hello,2],3,3];



// console.log(global.classname);


// ./ ../ /  不加./认为是一个模块名


//{dirname:'a',children:[{filename:'a.js'},{dirname:'aa',children}]}