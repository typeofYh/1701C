const data = require('./data').data;
const {join} = require('path');
const {mkdirSync,writeFileSync} = require('fs');


const CreateDir = (obj)=>{
    mkdirSync(obj.dirname);
    obj.children.map(item=>{
        //item对象
        //判断是文件还是文件夹
        let isFile = item['filename'];
        if(isFile){
            //是文件
            let filename = join(obj.dirname,item.filename);
            writeFileSync(filename,item.children.join(''));
        }else{
            //是文件夹
            item.dirname = join(obj.dirname,item.dirname);
            CreateDir(item);  //{}
        }
    })
}

CreateDir(data);



