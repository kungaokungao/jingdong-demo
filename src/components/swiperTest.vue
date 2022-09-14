<template>
  <div>
    <swiper class="aa" :options="swiperOption" >
        <a href=""></a>
        <swiper-slide  v-for="(i, index) in imgUrl" :key="index">
            <div>
                <a href="">
                    <div class="flex loop-card">
                        <img :src="i" alt="" />
                    <span>狗🐕dog</span>
                    <span>💴999,999</span>
                    </div>
                    
                </a>
            </div>
        </swiper-slide>
        <div class="swiper-button-prev " slot="button-prev"><div class=" el-icon-arrow-left fl"></div></div>
        
        <div class="swiper-button-next" slot="button-next"><div class=" el-icon-arrow-right fl"></div></div>
    </swiper>
  
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    components:{
        swiper,swiperSlide
    },
    data() {
        return {
            swiperOption:{
                autoplay:true,
                speed:500,
                loop:true,
                slidesPerView:4,
                slidesPerGroup:4,
                navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        },
                on:{
                    click(){
                        console.log(this)
                    }
                }

            },
            imgUrl: [
        
        require("../assets/countDownImg/1.2.jpg"),
        require("../assets/countDownImg/1.3.jpg"),
        require("../assets/countDownImg/2.1.jpg"),
        require("../assets/countDownImg/2.2.jpg"),
        require("../assets/countDownImg/2.3.jpg"),
        require("../assets/countDownImg/3.1.jpg"),
        require("../assets/countDownImg/3.2.jpg"),
        require("../assets/countDownImg/3.3.jpg"),
      ]
        }
    },

}
</script>

<style scoped >
.el-icon-arrow-left {

    height: 100%;
    width: 100%;
      position: absolute;
      
}

.swiper-button-next{ 
  background:none;
  right: 0px;
  height: 30px;
  width: 30px;

}
.swiper-button-prev {

  background:none;
  left: 0px;
  height: 30px;
  width: 30px;
}
.loop-card {
      width: 205px;
  height: 260px;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  background-color: rgb(254,254,254);
}
.aa {
    height:  260px;
    width:800px;
  
    
}
.aa .swiper-slide {

    width: 205px;
    height: 260px;
}
.swiper-slide span {
  margin: 15px 0 0 0 ;
  font-size: 15px;
}

img {
  height: 140px;
  width: 140px;
  object-fit: cover;
}
</style>