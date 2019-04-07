// console.log(axios);
//  /  -> http://localhost:8000/api/index
axios.get('/api/index?pageid=2&limit=20').then(res=>{
    render(res.data.list);
    //res请求结果
})

function render(listdata){
    const list = document.querySelector('.list');
    list.innerHTML = listdata.map(item=>`<dl>
        <dt><img src="${item.image}" /></dt>
        <dd>${item.title}</dd>
    </dl>`).join('');
}