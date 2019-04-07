// let a = 10;
// let b = 20;
// let c = 30;

// let [a,b,[c]] = [10,20,[30]]
// console.log(a,b,c);

let [username='zs',pwd] = ['',1234]

console.log(username,pwd);


function sum([title='sum',...arr]){
    let res = arr.reduce(function(prev,next,index,array){  //p:初始值 n数组每一个值  
        return prev + next.n;
    },0)
    return title +'=' +res;
}

console.log(sum([,{n:1},{n:2},{n:4},{n:4},{n:5}]));


//...reset 操作符 在解构中使用只能出现在最后一个


let [title,...n] = ['班级:','1610A','1701C'];

// console.log(title,n);




let arr1 = [1,2,{
    name:'zs',
    age:13
}];

arr2 = [...arr1]; //可以实现浅拷贝
arr2.push(5);
arr2[2].age = 10;
console.log(arr1)
console.log(arr2);


// let {0:a1} = [12];

// console.log(a1);

//{key:变量名} = {key:变量值}

// let {key:value}


//classname 1701C  person 26

// let [classname,person] = ['1701C',26]
let {classname,person} = {classname:'1701C',person:26}
console.log(classname,person);

let a = 'zs'
let obj = {
    a
}
console.log(obj.a);

