<template>

<div id="top-header">
<div class="center">
    <div class="location"> 
        <a href=""> <div class='el-icon-location'></div>浙江</a>
        <div class="location-drop">
            <div  id='locations'>
                
                <div class="area">
                <ul>
                    <li class='item-area fl' v-for="(i,index) of locations" :key="index" ><a>{{i}}</a></li>
                </ul>
                </div>
                <div class='version'>
                    <div class="split-line"></div>
                <p class="fl">地区专享版本</p>
                <ul class="version-list fl">
                    <li class='item-version fl' v-for="(i,index) of version" :key="index" ><a>{{i}}</a></li>
                </ul>
                </div>
                <div class="Available-Sites">
                    <div class="split-line"></div>

                </div>
            </div>
        </div>
    </div>
    <ul class="fr">
    
        <li class="fr"><a href="">网站导航</a></li>
        <li class="fr"><a href="">客户服务</a></li>
        <div class='space fr'></div>
        <li class="fr"><a href="">企业采购</a></li>
        <li class="fr"><a href="">京东会员</a></li>
        <li class="fr"><a href="">我的京东</a></li>
        <li class="fr"><a href="">我的订单</a></li>
        <li class="fr"><a href="">免费注册</a></li>
        <li class="fr"><a href="">你好，请登录</a></li>

    </ul>
</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            locations:['北京','上海','天津','重庆','河北','山西','河南','辽宁','黑龙江','内蒙古','江苏','山东','安徽','浙江','福建','湖北','湖南','广东','广西','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','港澳','台湾','钓鱼岛','海外']
            ,version:['中国香港','中国台湾','京东全球'],
            
        }
    },
    // mounted(){
    //     console.log(this)
    // }

}
</script>

<style scoped>
.spacer {
    overflow: hidden;
    margin: 11px 5px 0;
    width: 1px;
    height: 10px;
    background-color: #ccc;
}
ul {
    list-style: none;
}
p {
    font-size: 16px;
    width: 290px;
    margin: 10px ;
    color: rgb(153,153,153);
}


#top-header {
    
    background-color: rgb(227,228,229);
    height: 30px;
    width: 100%;
    border-bottom: 1px solid rgb(190, 190, 190);


}
.center {
    margin: auto;
    width: 990px;
    height: inherit;

}
.location {
    position: relative;
    float: left;
    width: 58px;
    height: 30px;
    z-index: 2;

    line-height: 30px;
}
.location:hover {
    background-color: rgb(255,255,255);
    border: 1px solid rgb(190, 190, 190);
    border-bottom: none;
    
    line-height: 29px;
    margin-left: -1px;

}
.location a {
    margin-left: 10px;
}
.location-drop {
    position: absolute;
    display: none;

    width:322px;
    height:464px;
    border: 1px solid rgb(190, 190, 190);
    top:30px;
    border-top: none;
    padding: 10px ;
    background-color: rgb(255,255,255);
}
.location:hover .location-drop {
    display: block;
    margin-left: -1px;
    box-shadow: 1px 2px 1px rgb(0 0 0 / 10%);
    z-index: 1;



}

.el-icon-location {

    color:rgb(241,2,21);
}
.item-area {

    width: 60px;
    padding: 2px 0;
}
.split-line {
    width: 262px;
    height: 20px;
    border-bottom: 1px dotted #eee;
    float: left;
    margin-left: 24px;
}

.item-version {
width: 120px;
}
.fr li {
    width:80px ;
    line-height: 30px;
    
}
.fr a {
font-size: 10px;
}
</style>