<template>
<div>
    <div id="header">
        <div class="m">
            <a class="logo fl" href=""> <img src="../assets/home-logo.png" alt=""></a>
            <div class="search">
                <div class="search-m">
                    <input class="search-box" type="text" placeholder="菠萝手机">
                    <el-button  class="search-button fr" type="primary" icon="el-icon-search"></el-button>
                    <a class="camera-search" href=""><div class="el-icon-camera"></div></a>
                    <div class="shopping-car" >
                        <div class="el-icon-shopping-cart-2"></div>
                        <span>我的购物车</span>
                    </div>
                </div>
            </div>
            <div class="hot-words">
                <div><a href="">卡地亚</a></div>
                <div><a href="">手机</a></div>
                <div><a href="">开学必备</a></div>
                <div><a href="">淘宝</a></div>
            </div>
            <div class="nav-item">
                <div><a href="">秒杀</a></div>
                <div><a href="">优惠券</a></div>
                <div><a href="">PLUS会员</a></div>
                <div><a href="">品牌闪购</a></div>
                <div><a href="">拍卖</a></div>
                <div><a href="">京东家电</a></div>
                <div><a href="">京东超市</a></div>
                <div><a href="">京东生鲜</a></div>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped >
.nav-item {
    display: flex;
    width: 750px;
    height: 30px;
    margin-left: 250px;
    justify-content:space-between;
    padding-top: 10px;

}
.nav-item a {
    color: #000;
    font-size: 15px;
}
.hot-words {
    padding-top: 10px;
    display: flex;
    width: 250px;
    height: 30px;
    margin-left: 260px;
    justify-content:space-between ;
    flex-basis: auto;
}
.shopping-car span {
    font-size: 15px;
    color: rgb(226,35,26)
}
.shopping-car {
    position: absolute;
    width: 130px;
    height: 34px;
    background-color: #fff;
    text-align: center;
    line-height: 34px;
    border: 1px solid rgb(214, 211, 211);
    top: 25px;
    left: 843px;
}
.camera-search {
    position: absolute;
top: 34px;
left: 720px;
}
.el-icon-camera{

    color: rgb(171,159,183);

}
.el-icon-shopping-cart-2 {
    float: left;
    color: rgb(226,35,26);
    font-size: 22px; 
    line-height: 34px;
    margin-left: 12px;
}
.camera-search:hover .el-icon-camera{
    color: rgb(226,35,26);
    
}
#header {
    height: 140px;
    background-color: rgb(255,255,255);
    width: 100%;
}
.m {
    position: relative;
    margin: 0 auto;
    height: 140px;
    width: 1190px;
}
.logo {
    position: absolute;
    z-index: 1;
    top: 10px;
    width: 190px;
    height: 120px;

}
.search-m {
    height: 60px;
    width: 960px;
    margin: auto;
}
.search-button {
    background-color: #e2231a;
    position: absolute;
    border: none;
    border-radius: 0px;
    width: 58px;
    height: 32px;
    top: 27px;
    left: 760px;
    padding-top: 10px;
}
.search-button:hover {
    background-color: rgb(200,22,35);
}
.search-button i {
    line-height: 32px;
    align-content: center;
}
.search-box {
    position: absolute;
    left: 260px;
    top: 25px;
    width: 546px;
    height: 32px;
    border: 2px solid #e2231a;
    background: #fff;
    outline: none;
    padding-left: 10px;
}
.search-box::placeholder {
    color: rgb(203,200,200);
    font-size: 10px;
}
.search-box:focus::placeholder {
    color:rgb(164,152,152);
}

</style>