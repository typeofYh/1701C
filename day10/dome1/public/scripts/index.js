axios.get('/api/list',{
    params:{
        pageid:1,
        limit:20
    }
}).then(res=>{
    console.log(res.data);
}) 


axios.post('/api/login',{
    user:'zs',
    pwd:1234
}).then(res=>{
    console.log(res.data);
})

axios.post('/api/aa',{
    user:'ww',
    pwd:5678
}).then(res=>{
    console.log(res.data);
})

