// function Table(parent,options){
//     this.parent = document.querySelector(parent);
//     this.settings = options;
// }   

// Table.prototype = {
//     constructor:Table,
//     init(){

//     }
// }

// function AutoTable(parent,options){
//     Table.call(this,parent,options)  //借用构造函数
// }

// AutoTable.prototype = Object.create(Table.prototype); //原型继承
// AutoTable.prototype.constructor = AutoTable; //修改本来的构造函数
// new AutoTable('.tablebox',{

// })

class Table {
    constructor(parent,options){
        this.parent = document.querySelector(parent);
        this.settings = options;
    }
    //原型上的方法
    init(){

    }
}
//class声明的是构造函数
//不会变量提示
//在同一作用域下不能重名
let table = new Table('.tablebox',{
    classname:'active'
});

//继承
class AutoTable extends Table{
    constructor(parent,options){
        super(parent,options); //语法糖  调用super函数
        console.log(parent);
    }
}

let autotable = new AutoTable('.tablebox1',{

})

console.log(autotable.parent);


