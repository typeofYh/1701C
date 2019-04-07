class Init{
    constructor({id,type}){
        //id要修改的id
        this.id = id;
        //type==add是新增
        this.type = type;
        //删除按钮
        this.removeBtn = document.querySelector('.remove');
        //标题
        this.title = document.querySelector('.title');
        //内容
        const main = document.querySelector('.main')
        this.main = main;
        //所有的input标签
        this.inps = [...main.querySelectorAll('input')];
        //性别父元素
        this.sexBox = main.querySelector('#sex');
        //男和女
        this.sexItem = [...this.sexBox.children];
        //确定按钮
        this.sure = main.querySelector('.sure');
        this.InitPage();
    }
    InitPage(){
        //点击男女
        this.sexItem.forEach(span=>{
            span.onclick = ()=>{
                this.sexChange(span);
            }
        })
        this[this.type](); //如果type是add add() edit()
        this.sureEvent();
        this.removeEvent();
    }
    //初始化渲染编辑页面
    edit(){
        let {id} = this;
        //获取编辑页面的初始数据
        axios.get('/address/edit?id='+id).then(res=>{
            let {code,msg} = res.data;
            if(!code){
                this.main.innerHTML = msg
                return ;
            }
            this.editInitRender(res.data)
        })
    }
    //初始化渲染添加页面
    add(){
        this.title.innerHTML = '新增页面';
        this.removeBtn.style.display = 'none';
    }
    //给确定按钮添加事件
    sureEvent(){
        this.sure.onclick = ()=>{
            this[this.type+'Event']();
        } 
    }
    getPostDate(){
        let postdata = {};
        this.inps.forEach(item=>{
            postdata[item.id] = item.value;
        })
        postdata.sex = this.sexItem.findIndex(span=>span.classList.contains('active'));
        return postdata;
    }
    //点击添加页面确认按钮触发
    addEvent(){
        let postdata = this.getPostDate();
        axios.post('/address/add',postdata).then(res=>{
            let {code,msg} = res.data;
            if(code){
                window.location.href="/"
            }else{
                alert(msg);
            }
        })
    }
    //点击编辑页面确认按钮触发
    editEvent(){
        let postdata = this.getPostDate();
        postdata.id = id;
        axios.post('/address/changeEdit',postdata).then(res=>{
            let {code,msg} = res.data;
            if(code){
                window.location.href="/"
            }else{
                alert(msg);
            }
        })
    }
    //点击删除
    removeEvent(){
        this.removeBtn.onclick = ()=>{
            axios.get('/address/del?id='+this.id).then(res=>{
                let {code,msg} = res.data;
                if(code){
                    window.location.href="/"
                }else{
                    alert(msg);
                }
            })
        }   
    }
    //初始渲染编辑页面
    editInitRender(data){
        this.sexChange(this.sexItem[data.sex]); //显示男女
        this.inps.forEach(item=>{ //给所有的input标签添加value
            item.value = data[item.id];
        })
    }
    sexChange(span){ //男女table切换
        this.sexItem.forEach(el=>el.classList.remove('active'));
        span.classList.add('active');
    }
}