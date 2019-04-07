let {classname:classname='1701C',person} = {a:26,classname:''}

console.log(classname,person);



let $ = {
    find(){

    },
    addClass(){

    },
    scrollTop(){
        return {
            x:1,
            y:1
        }
    }
}

let {scrollTop} = $;

console.log(scrollTop());



//{key:变量名} = {key:变量值}


let obj = {
    name:'zs',
    age:13,
    aa:{
        an:1121
    }
};

let obj1 = {...obj};
obj1.aa.a1 = 'ww';

console.log(obj,obj1);





//{string:'120120120'}

//{string:4}

