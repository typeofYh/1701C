function ajax({
    url='',
    type='get',
    async=true,
    data=''
}){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        //readyState 4
        xhr.onload = ()=>{  //readyState 3-4
            if(xhr.status===200){
                resolve(xhr.responseText)
            }else{
                reject(xhr.statusText);
            }
        }  
        xhr.open(type,url,async);
        xhr.send(data?data:null);
    })
}



