<template>
<div class="main-box">
    <div class="user-box">
        <a href="" class="fl"><img src="../assets/QQ图片20220903214550.png" alt=""></a>
        <div class="login fl" > 
        <a href="">Hi~.欢迎光临京东!</a>
        <br>
        <a href="">登录</a><span>&nbsp;|</span> <a href="">注册</a>
        </div>
        <div class="button fl"><a href="">新人福利</a> </div>
        <div class="button fl"><a href="">新人福利</a></div>
    </div>
    <div class="news fl">
        <div>
            <b>京东快报</b> 
            <a class="fr" href="">更多></a>
        </div>
        <div class="news-links">
            <ul>
                <li><div class="news-tag fl">最新</div> <a href="">体积小,功率大,诚意十足!!!!!!!!!</a></li>
                <li><div class="news-tag fl">热评</div> <a href="">体积小,功率大,诚意十足</a></li>
                <li><div class="news-tag fl">推荐</div> <a href="">体积小,功率大,诚意十足</a></li>
                <li><div class="news-tag fl">热议</div> <a href="">体积小,功率大,诚意十足</a></li>
            </ul>
        </div>
        <div class="service">
            <ul>
                <li >
                    <a href=""><div class="el-icon-office-building"></div>
                    <span>企业购</span></a>
                    
                </li>
                <li >
                    <a href=""><div class="el-icon-mobile-phone"></div>
                    <span>话费</span></a>
                    
                </li>
                <li >
                    <a href=""><div class="el-icon-postcard"></div>
                    <span>礼品卡</span></a>
                    
                </li>
                <li >
                    <a href=""><div class="el-icon-place"></div>
                    <span>游戏</span></a>
                    
                </li>
                <li >
                    <a href=""><div class="el-icon-school"></div>
                    <span>酒店</span></a>
                    
                </li>
                <li>
                    <a href=""><div class="el-icon-refrigerator"></div>
                    <span>企业购</span></a>
                    
                </li>
                <li>
                    <a href=""><div class="el-icon-present"></div>
                    <span>企业购</span></a>
                    
                </li>
                <li >
                    <a href=""><div class="el-icon-wallet"></div>
                    <span>白条</span></a>
                    
                </li>
                <li>
                    <a href=""><div class="el-icon-video-camera"></div>
                    <span>电影票</span></a>
                    
                </li>
                
            </ul>
        </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .service span {
        display: block;
        font-size: 10px;
    }
    .service {

        margin-top: 15px;
        width:  190px;
        height: 230px;
        margin: 0 auto;
        
        
    }
    .service  ul {
        display: flex;
        flex-flow: row wrap;
        
    }
    .service li {
        padding-right: 3px;
        width: 60px;
        height: 63px;
        text-align: center;
    
    }
    .service li div {
        height: 28px;
        width: 28px;
        
    }
    .button {
        padding-top: 0px  !important;
        height: 25px;
        width: 60px;
        font-size: 5px;
        line-height: 27px;
        text-align: center;
        background-color: rgb(225,37,27);
        border-radius: 12.5px  12.5px ;
    }

    .button:hover {
        background-color: rgb(190, 33, 24) !important;
    }
    .button:hover a {
        color: rgb(255,255,255) !important;
    }
.main-box {
    float: left;
    position:absolute;
    top: 0px;
    left: 800px;
    height: 470px;
    width: 190px;
    background-color:rgb(254,254,254);
    padding: 10px;
    
}
.user-box div {
    margin:0 10px;
    padding-top: 3px;
    
}
.user-box a {
    color: black;
    font-size: 12px;
    
}
.login {height: 50px;}
.login+div a{
font-size: 8px;
color: rgb(255,255,255);
}
.user-box div:last-child {
    background-color: rgb(54,54,52) ;
    
}
.user-box div:last-child a {
    color: rgb(213,200,135);
}
.news {
    margin-top: 20px;
    width: 190px;
    height: 130px;

}
.news-tag {
    display: inline-block;
    height: 18px;
    width:  29px ;
    margin-right: 6px;
    background-color: rgb(253,238,237);
    font-size: 3px;
    
    padding: 0 3px;
    text-align: center;
    margin-top: 2px !important;
    
    
    
}
.news-tag+a {
    font-size: 5px;
}
.news div:first-child {
    margin-top: 8px;
    line-height: 20px;
}
.news-links ul {
    margin-top: 15px;
    height: 88px;
}
li {
    margin-top: 3px;
    line-height: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}


</style>