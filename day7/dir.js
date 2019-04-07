const fs = require('fs');  

// console.log(fs);

// const filepath = './src';


// appendFile(filepath,'1701C',(error)=>{
//     if(error){
//         return ;
//     }
//     console.log('写入成功');
// })


// unlink(filepath,(error)=>{
//     if(error){
//         console.log(error.message);
//         return;
//     }
//     console.log('删除成功')
// })



// fs.readdir('./aaa',(error,data)=>{
//     if(error){
//         console.log(error.message);
//         return;
//     }
//     data.forEach(filename=>{
//         fs.unlinkSync('./aaa/'+filename);
//     })
//     fs.rmdirSync('./aaa');
// })

// fs.stat('./aaa/a.js',(error,data)=>{
//     if(error){
//         console.log(error.message);
//         return ;
//     }
//     console.log(data.isFile() ? '它是一个文件' : '它不是一个文件'); //判断是不是一个文件
//     console.log(data.isDirectory() ? '它是一个文件夹' : '它不是一个文件夹')//判断是不是一个文件夹
// })


//删除目录
//1.可以有非空文件夹 不能直接删除 先删文件在删文件夹
//2.还有文件  删除文件
function rmdir(dirpath){
    if(fs.existsSync(dirpath)){
        const files = fs.readdirSync(dirpath);
        files.forEach(item=>{
            let path = dirpath+'/'+item;
            //是不是一个文件
            let fileMsg = fs.statSync(path).isFile();
            if(fileMsg){
                //是文件 删文件
                fs.unlinkSync(path);
            }else{
                //是目录 
                rmdir(path);
            }
        })
        fs.rmdirSync(dirpath);
    }else{
        console.log('文件路径有误')
    }
}

rmdir('./aaa');


fs.readFile('../day6/com/js/insert.js','utf8',(error,data)=>{
    if(error){
        return;
    }
    console.log(data);
})




