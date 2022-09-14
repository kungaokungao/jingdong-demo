    <template>
    <div class="big-box">
        <div class="w flex">
        <div class="count-down">
            <div>京东秒杀</div>
            <div class="iconfont icon-shandian"></div>
            <span> <strong>20:00</strong><span> 点场 距结束</span> </span>
            <div class="number flex">
            <div>{{ countDown.H }}</div>
            <span>:</span>
            <div>{{ countDown.M }}</div>
            <span>:</span>
            <div>{{ countDown.S }}</div>
            </div>
        </div>
        <!-- <div class="loop-img flex">
            <a href="" v-for="(i, index) in imgUrl" :key="index">
            <div class="flex" ref="img">
                <img :src="i" alt="" />
                <span>狗🐕dog</span>
                <span>💴999,999</span>
            </div>
            </a>
            <button class="el-icon-arrow-left fl" @click="preImg"></button>
            <button class="el-icon-arrow-right fr" @click="nextImg"></button>
        </div> -->
        <swiperTest />
        </div>
    </div>
    </template>

    <script>
import swiperTest from './swiperTest.vue';

    export default {
    components: { swiperTest },
    data() {
        return {
        countDown: { H: "00", M: "00", S: "00" },
        imgUrl: [
            require("../assets/countDownImg/1.1.jpg"),
            require("../assets/countDownImg/1.2.jpg"),
            require("../assets/countDownImg/1.3.jpg"),
            require("../assets/countDownImg/2.1.jpg"),
            require("../assets/countDownImg/2.1.jpg"),
            require("../assets/countDownImg/2.1.jpg"),
            require("../assets/countDownImg/3.1.jpg"),
            require("../assets/countDownImg/3.2.jpg"),
            require("../assets/countDownImg/3.3.jpg"),
        ],
        };
    },

    methods: {
        cont() {
        setInterval(() => {
            let end = this.$moment({ h: 20 });
            let now = this.$moment();
        
            if (end.diff(now)<0) {
            end = end.add(1, "days");
            
            
            }
            let h = end.diff(now, "hours");
            let m = end.diff(now, "minutes") % 60;
            let s = end.diff(now, "seconds") % 60;
            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
            this.countDown = { H: h, M: m, S: s };
            
        }, 1000);
        },
        preImg(){
        

        },
        nextImg(){}
    },mounted() {
        this.cont()
    },
    };
    </script>

    <style>
    .el-icon-arrow-left,
    .el-icon-arrow-right {
    position: absolute;

    background-color: rgba(104, 100, 100, 0.5);
    font-size: 30px;
    border: none;
    align-self: center;
    }
    .el-icon-arrow-right {
    right: 0;
    border-radius: 50% 0 0 50%;
    }
    .el-icon-arrow-left {
    border-radius: 0 50% 50% 0;
    }
    .el-icon-arrow-left:hover,
    .el-icon-arrow-right:hover {
    background-color: rgba(85, 82, 82, 0.8);
    }
    .loop-img img {
    height: 140px;
    width: 140px;
    object-fit: cover;
    }
    .loop-img div {
    width: 205px;
    height: 260px;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    background-color: rgb(254,254,254);
    
    
    }
    .loop-img div span {
    margin: 15px 0 0 0 ;
    font-size: 15px;
    }
    .count-down ~ .loop-img {
    overflow: hidden;
    width: 900px;
    align-items: stretch;
    }
    .big-box {
    height: 260px;
    }
    .w {
    position: relative;
    left: 10px;
    width: 1010px;
    height: 260px;
    margin: 0 auto;
    
    }
    .w > div {
    height: 260px;
    width: 210px;
    }
    .count-down {
    background-color: rgb(223, 43, 31);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    color: aliceblue;
    }
    .count-down div {
    margin-top: 35px;
    margin-bottom: 10px;
    font-size: 35px;
    font-weight: 650;
    text-align: center;
    }
    .icon-shandian {
    text-align: center;
    font-size: 50px;
    margin-top: 10px !important;
    }
    .number div {
    margin: 0px;
    height: 30px;
    width: 30px;
    background-color: rgb(47, 52, 48);
    }
    .number {
    margin-top: 10px;
    justify-content: center;
    }
    .number span {
    line-height: 20px;
    }
    .number div {
    font-size: 20px;
    }
    </style>