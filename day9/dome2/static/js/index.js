ajax.get('/api/index',{
    async:false,
    // data:{
    //     name:'zs',
    //     age:13
    // }
}).then(data=>{
    console.log(data)
})

ajax.post('/api/login',{
    data:{
        user:'zs',
        pwd:1234
    }
}).then(data=>{
    console.log(data)
})
//   http://localhost:3000/api/index?name=zs



//