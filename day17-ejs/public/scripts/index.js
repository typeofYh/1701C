function tableNav(settings){
    const navspan = settings.parent;
    const smallnav = settings.content;
    navspan.forEach((item,key)=>{
        item.onclick = function(){
            changeClass(navspan,key); //当前点击span的下标
            //获取大导航id
            let navId = this.getAttribute(settings.key);
            //根据大导航id获取小导航数据
            axios.get(settings.url+navId).then(res=>{ 
                //渲染小导航
                render(res.data,smallnav);
                //渲染默认第一个小导航的列表
                renderContent(res.data[0].id);
                changeClass([...smallnav.children],0);
            })
        }
    })
    navspan[0].onclick();

    //点击小导航时
    smallnav.onclick = function(e){
        let tag = e.target;
        if(tag.tagName==='SPAN'){
            changeClass([...this.children],tag.getAttribute('index')*1);
            let typeId = tag.getAttribute('smallnavid');
            //渲染对应列表
            renderContent(typeId)
        }
    }
}

tableNav({
    parent:[...document.querySelectorAll('.nav span')],
    content:document.querySelector('.smallnav'),
    key:'navId',
    url:'/api/smallnav?navId='
});

let smallcontent = document.querySelector('.smallcontent');

function render(arr,parent){
    parent.innerHTML = arr.map((item,i)=>{
       return `<span smallNavId="${item.id}" index="${i}">${item.title}</span>`
    }).join('')
}
function renderContent(id){
    axios.get('/api/shoplist?typeId='+id).then(res=>{
        smallcontent.children[0].innerHTML = res.data.map(item=>`<li>${item.title}</li>`).join('')
    })
}

function changeClass(parent,key){
    parent.forEach((el,i)=>{
        i===key ? el.classList.add('active') : el.classList.remove('active');
    });
}
//http://localhost:3000/api/shoplist?typeId=9