function loagin(){
    const loginbtn = document.querySelector('#loginbtn');
    let inputs = [...document.querySelectorAll('input')];
    loginbtn.onclick = function(){
        let [user,pwd] = [inputs[0].value,inputs[1].value];
        axios.post('/api/login',{
            user,pwd
        }).then(res=>{
            let {code,msg} = res.data;
            alert(msg);
            if(code){
                window.location.href="/home.html"
            }
        })
    }
}

loagin();