const form = document.querySelector('form');
const login = form.querySelector('.login');
const inputs = form.querySelectorAll('input');
login.onclick = function(){
    let user = {};
    Array.from(inputs,item=>{
        user[item.id] = item.value;
    })
    axios.post('/api/login',user).then(res=>{
        console.log(res);
    })
}