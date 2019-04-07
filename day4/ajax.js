function ajax(options){
    let settings = Object.assign({},{
        type:'get',
        async:true,
        data:''
    },options);
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        let {url,type,async} = settings;
        xhr.open(type,url,async);
        xhr.send(null);
        //readystate 3-4
        //0 请求未初始化
        //1 请求已建立
        //2 请求已发送
        //3 请求已过半
        //4 请求已响应
        xhr.onload = function(){
            //xhr.status 服务器状态 
            //200 成功
            //404 地址找不到
            //304 读取浏览器缓存
            //500 服务器错误
            if(xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304){
                //成功
                resolve(xhr.responseText);
            }else{
                //失败
                reject(xhr.statusText);
            }
        }
    })
    
}