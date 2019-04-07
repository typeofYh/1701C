const wrap = document.querySelector('.wrap');
const nav = wrap.querySelector('.nav');
const bigNavs = [...nav.children];
const smallnav = document.querySelector('.smallnav');
const smallContent = document.querySelector('.smallcontent>ul');

bigNavs.forEach((item,i)=>{
    item.onclick = async function(){
        changeClass(bigNavs,i);
        let id = item.getAttribute('navid');
        let res =  await axios.get('/api/smallnav?navId='+id)
        renderContent(res.data,smallnav,'span')
        changeClass([...smallnav.children],0);
        let shopres = await axios.get('/api/shoplist?typeId='+res.data[0].id)
        renderContent(shopres.data,smallContent,'li');
    }
})
bigNavs[0].onclick();

smallnav.onclick = function(e){
    let tag = e.target;
    if(tag.tagName==='SPAN'){
        changeClass([...this.children],tag.getAttribute('index')*1);
        let typeId = tag.getAttribute('data-id');
        //渲染对应列表
        axios.get('/api/shoplist?typeId='+typeId).then(res=>{
            renderContent(res.data,smallContent,'li');
        })
    }
}

function renderContent(arr,parent,tag){
    parent.innerHTML = arr.map((item,i)=>{
        return `<${tag} data-id="${item.id}" index="${i}">${item.title}</${tag}>`
     }).join('')
}

function changeClass(parent,key){
    parent.forEach((el,i)=>{
        i===key ? el.classList.add('active') : el.classList.remove('active');
    });
}