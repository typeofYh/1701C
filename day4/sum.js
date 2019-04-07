function getNum(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(getNumber());
        },time)
    })
}

function getNumber(){
    return Math.round(Math.random()*10);
}

async function sum(){
    console.log('1111');
    let n1 = await getNum(3000)
    console.log(22222);
    let n2 = await getNum(300)
    let n3 = await getNum(50)
    console.log(n1+n2+n3);
}
sum();
