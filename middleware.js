const app = {
    callback(ctx){  //最执行完调用
        console.log(ctx); //{name:'Lucy',age:12}
    },
    use(ck){
        if(this.action){
            this.action.push(ck);
        }else{
            this.action = [ck];
        }
    },
    go(ctx){  //执行
        this.ctx = ctx; //副本
        console.log(this.action);
    }
}
app.use((ctx,next)=>{
    ctx.name = 'Lucy'
    // next(); //下一个函数
})
app.use((ctx,next)=>{
    ctx.age = 12  //不会执行
    next(); //下一个函数
})
app.go({});
// console.log(app.ctx);