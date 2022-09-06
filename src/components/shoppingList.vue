<template>

<div>
    <div class="fs">
    <div class="inner">
        <div class="list">
            <ul >
                <li v-for="(i,index) in aa " :key=index  >
                    <div>
                        <ul>
                        <li v-for="(x,index) in i " :key=index class="item"> 
                        <a href="">{{x}}</a> <span>/</span></li>
                        </ul>
                    </div>
                    
                </li>
            </ul>
        </div>
    
        <LoopImg></LoopImg>
        <serviceBox/>
    </div>


</div>

</div>
</template>

<script>

import serviceBox from './serviceBox.vue'
import LoopImg from './loopImg.vue'
export default {
    data(){
        return {
            aa:[['家用电器'],['手机','运营商','数码'],['电脑' ,'办公'],['家具', '家居' ,'家装' ,'厨具'],['美妆', '个护清洁', '宠物' ],['女鞋', '箱包' ,'钟表' ,'珠宝']
                ,['男鞋', '户外', '运动'],['房产' ,'汽车' ,'汽车用品'],['母婴' ,'玩具乐器'],['食品','酒类' ,'生鲜', '特产'],['艺术' ,'礼品鲜花', '农资绿植'],['医药保健', '计生情趣'],['图书' ,'文娱', '教育' ,'电子书'],['机票', '酒店','旅游', '生活'],
                ['众筹', '白条' ,'保险'],['安装', '维修', '清洗', '二手'],['工业品']]

        }
    }
    ,
    
        components:{LoopImg ,serviceBox},
    computed:{

    }


}
</script>

<style scoped>
    .list ul>li:hover {
        background-color: rgb(217,217,217);
    }
    .list div {
        height: 24px;
        padding-left: 18px;
    }
    .list{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
    }
    ul {
        list-style: none;
        
    }
    ul a {
        color: black;
    }
    .item {
        float: left;

    }
    .list li ul li:last-child span {
        display: none;
    }
    .list {
        width: 190px;
        height: 470px;
        padding: 10px 0px;
        margin-top: 10px;
        background-color: rgb(254,254,254);
    }
    .fs {
    
        height: 480px;
        margin-bottom: 30px;

    }
    .inner {
        position: relative;
        width: 990px;
        height: 480px;
        margin: auto;
    }

</style>