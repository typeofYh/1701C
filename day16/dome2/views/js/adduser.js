function addUser(){
    const adduser = document.querySelector('#adduser');
    let inputs = [...document.querySelectorAll('input')];
    adduser.onclick = function(){
        let [user,pwd] = [inputs[0].value,inputs[1].value];
        axios.post('/api/adduser',{  //8080 -》 3000
            user,pwd
        }).then(res=>{
            let {code,msg} = res.data;
            alert(msg);
            if(code){ //注册成功跳转登陆页面
                window.location.href="/index.html"
            }
        })
    }
}

addUser();