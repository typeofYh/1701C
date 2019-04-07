const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const apiRouter = require('./routes/app.route');
//实现跨域
// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin","http://localhost:8080")
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// })
// app.use(express.static(path.join(__dirname,'public')))
app.use(express.json());
app.use('/api',apiRouter);

// app.use('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })


app.listen(process.env.PORT||3000,()=>{
    console.log('port is 3000');
})