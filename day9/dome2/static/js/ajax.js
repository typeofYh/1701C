const ajax = {
    get(url='',options={}){
        let {async=true,data={}} = options;
        return new Promise((resolve,reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.onload = ()=>{
                if(xhr.status===200){
                    resolve(xhr.responseText);
                }else{
                    reject(`接口错误`);
                }
            }
            xhr.open('get',this.format(data) ? `${url}?${this.format(data)}` :url,async);
            xhr.send(null);
        })
    },
    post(url='',options){
        let {async=true,data=null} = options;
        return new Promise((resolve,reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.onload = ()=>{
                if(xhr.status===200){
                    resolve(xhr.responseText);
                }else{
                    reject(`接口错误`);
                }
            }
            xhr.open('post',url,async);
            xhr.send(data?JSON.stringify(data):data); //{name:zs,pwd:1221}  name=zs&pwd=1244
        })
    },
    format(data){
        return Object.entries(data).map(item=>`${item[0]}=${item[1]}`).join('&');
    }
}