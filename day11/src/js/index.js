axios.get('/api/index?pageid=1&limit=10').then(data=>{
    console.log(data);
})

axios.post('/api/login',{
    user:'ww',
    pwd:1234
}).then(data=>{
    console.log(data);
})

axios.post('/api/mes',{
    user:'zs',
    pwd:1234
}).then(data=>{
    console.log(data);
})