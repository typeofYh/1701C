const express = require('express');
const app = express();
const {mockPath,read,viewsPath,staticPath} = require('./util');
app.set('views',viewsPath);
app.set('views engine','ejs')
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    read(mockPath('index.json')).then(jsondata=>{
        jsondata = JSON.parse(jsondata)
        jsondata.data.slice(0,10);
        res.render('index.ejs',jsondata);
    })
})  
app.get('/api/page',(req,res)=>{
    let {pageid} = req.query;
    read(mockPath('index.json')).then(jsondata=>{
        jsondata = JSON.parse(jsondata)
        jsondata.data.slice(pageid*10,(pageid+1)*10);
        res.send(jsondata);
    })
})  
app.get('/api/sort',(req,res)=>{
    let {key} = req.query;
    read(mockPath('index.json')).then(jsondata=>{
        jsondata = JSON.parse(jsondata)
        jsondata.data.splice(0,10);
        jsondata.data.sort((a,b)=>{
           return b[key] - a[key]
        })
        res.send(jsondata);
    })
})

app.listen(3000,()=>{
    console.log('port is 3000');
})