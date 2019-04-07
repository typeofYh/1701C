class Banner{
    constructor(parent,data){
        this.parent = document.querySelector(parent);
        this.render(data);
    }
    loadeImage(imgurl){
        return new Promise((resolve,reject)=>{
            const img = new Image();
            img.onload = ()=>{
                resolve(img);
            }
            img.onerror = ()=>{
                reject(`找不到图片${imgurl}`)
            }
            img.src = imgurl;
        })
    }
    render(data){
        // let swiperhtml = `<div class="swiper-container banner">
        //     <div class="swiper-wrapper">
        //         ${
        //             data.map(item=>`<div class="swiper-slide">${item.title}<img src="${item.img}" /></div>`).join('')
        //         }
        //     </div>
        // </div>`;
        this.swiperContainer = document.createElement('div');
        this.swiperContainer.className = 'swiper-container banner';
        this.swiperWrapper = document.createElement('div');
        this.swiperWrapper.className = 'swiper-wrapper';
        let imgs = data.map(item=>this.loadeImage(item.img));
        Promise.all(imgs).then(res=>{
            res.forEach((item,i)=>{
                let swiperSlide = document.createElement('div');
                swiperSlide.className = 'swiper-slide';
                swiperSlide.appendChild(item);
                this.swiperWrapper.appendChild(swiperSlide);
                //所有图片加载完成
                if(i===data.length-1){
                   this.setSwiper();
                }
            })
        })
        // 
        // this.parent.innerHTML = swiperhtml;
        this.swiperContainer.appendChild(this.swiperWrapper);
        this.parent.appendChild(this.swiperContainer);
    }
    setSwiper(){
        new Swiper(this.swiperContainer,{
            autoplay:true
        });
    }
}

