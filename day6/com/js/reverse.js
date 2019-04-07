const reverse = (str) =>{
    return str.split('').reverse().join('');
}
// global.classname = '1701C';
//抛出模块
// exports
//exports 不可以直接赋值 可以添加属性或方法抛出
// module.exports  可以直接赋值 可以抛出任意类型的值 出现多个找最后一个

//exports = reverse;  失败  1
// module.exports = reverse;  //成功 function(){}
// module.exports  = {abc:reverse};  //成功 {abc:function(){}}
// module.exports  = '1701C';
// module.exports = {num:1234};
// exports.abc = reverse; // 成功   {abc:function(){}}

// exports.reverse = reverse;
// exports.classname = '1701C';
// exports.person = 26;
module.exports = {
    reverse
}
