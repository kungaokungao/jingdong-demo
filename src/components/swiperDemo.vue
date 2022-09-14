<template>
<swiper class="a" :options="myoption">
    <swiper-slide >111</swiper-slide>
    <swiper-slide ><span >222</span>
    <img src="../assets/v2-92713f72b2784e779e257222ebba503d_r.jpg" alt="" class="ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">
    </swiper-slide>
    <swiper-slide > <div class="ani box" swiper-animate-effect="zoomInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">333</div></swiper-slide>
    <swiper-slide>444</swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
    <div class="swiper-button-next" slot="button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->

</swiper>
</template>

<script>
import Swiper from "swiper"
export default {
data() {
    return {
        myoption:{
            
        }
    }
},
mounted(){
    new Swiper(".swiper-container",{
        navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',          
                        },
                on:{
                    init: function(){
                    swiperAnimateCache(this); //隐藏动画元素 
                    swiperAnimate(this); //初始化完成开始动画
                    }, 
                    slideChangeTransitionEnd: function(){ 
                    swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
                    } 
}
    })
}
}
</script>

<style scoped>
.a {
    height: 250px;
    width: 350px;
    background-color: orange;
}
img {
    height: 50px;
    width: 50px;
}
.box {
    height: 60px;
    width: 60px;
    
}
</style>