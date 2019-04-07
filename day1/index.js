

//ECMAscript

//es 6.0


//声明变量的方式

//var function 

//let const   class import

for(let i=0;i<5;i++){
    let i = 10;
    { let i = 20;console.log(i) }
    setTimeout(function(){
        console.log(i);
    },0)
}

// let str = 'beijing';
// if(true){
//     console.log(str);

//     let str = 'bawei';

// }

let n = 10;
n+=2
console.log(n);

const n1 = 20; //基本类型的值  栈内存中
// n1+=2
console.log(n1);


const arr = [1,2,3,4];  //引用类型的值  堆内存中
// arr = arr.slice(1);
// console.log(arr);


function getStyle(el){
    const styleObj = el.style;
    console.log(Object.keys(styleObj));
}
const wrap = document.querySelector('.wrap')
getStyle(wrap);



function format(obj){
    //name=zs&age=13&sex=1
    //['name=zs&age=13,sex=1]
    return Object.entries(obj).map(function(item){
        return item.join('=');
    }).join('&')
}

console.log(format({name:'zs',age:13,sex:1}));

//


function reverser(){

}

reverser('hello')  //olleh

function Arrayfrom(){

}
Arrayfrom(document.querySelectorAll('div'));

function toArray(){

}

toArray({
    count:3,
    arr:[1,2,2,3,3,4,5,6,6,9]
})

//[[1,2,2],[3,3,4],[5,6,6],[9]]

