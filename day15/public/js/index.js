axios.get(
    '/api/index?pageid=1&limit=10'
).then(res=>{
    console.log(res);
})


axios.get(
    '/api/list'
).then(res=>{
    console.log(res);
})

axios.post(
    '/api/list'
).then(res=>{
    console.log(res);
})

const login = {
    init(parent){
        this.parent = document.querySelector(parent);
        this.input = Array.from(this.parent.querySelectorAll('input'));
        this.btn = this.parent.querySelector('.btn')
        this.addEvent();
    },
    addEvent(){
        this.params = {};
        //点击登陆
        this.btn.onclick = ()=>{
            this.input.forEach(item=>{
                this.params[item.name] = item.value;
            })
            //
            axios.post('/login/user',this.params).then(data=>{
                console.log(data);
            })
        }
    }
}

login.init('.form')