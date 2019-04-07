const concat = (arr,item)=>{
    item.forEach(val=>{
        arr.splice(val.index,0,val.item)
    })
    return arr;
}

module.exports = concat;