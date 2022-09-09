<template>
  <div class="big-box">
    <ul ref="listImg" id="aa">
      <!-- <li><a href=""><img src="@/assets/v2-6f067bf071e5743265da744d5cc64a1c_r.jpg" alt="">{{imgSrc[currentIndex]}}</a></li> -->
      <li>
        <a href=""><img :src="imgSrc[currentIndex]" alt="" />{{}}</a>
      </li>
    </ul>
    <button class="el-icon-arrow-left fl" @click="preImg"></button>
    <button class="el-icon-arrow-right fr" @click="nextImg"></button>
    <div class="index-list">
      <div v-for="(i, index) in 4" :key="index">
        <input
          type="radio"
          v-model="currentIndex"
          :value="i - 1"
          id="radio-list"
        />
        <label for="radio-list"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      left: 1,
      time: 22,
      imgSrc: [
        require("../assets/v2-6f067bf071e5743265da744d5cc64a1c_r.jpg"),
        require("../assets/v2-92713f72b2784e779e257222ebba503d_r.jpg"),
        require("../assets/v2-aa3160b40e85d617685296483a2fb4e1_r.jpg"),
        require("../assets/v2-ae5f7d6303afa278cb5bc30705e5529a_r.jpg"),
        require("../assets/v2-6f067bf071e5743265da744d5cc64a1c_r.jpg"),
      ],
      currentIndex: 0,
    };
  },
  methods: {
    preImg() {
      if (this.currentIndex === 0) {
        this.currentIndex = 3;
      } else {
        this.currentIndex--;
      }
    },
    nextImg() {
      if (this.currentIndex === 3) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    autoImg() {
      setInterval(this.nextImg, 1500);
    },
  },
  mounted() {
    this.autoImg();

    // console.log(this.$refs.listImg)
  },
  beforeDestroy() {
    clearInterval(this.autoImg);
  },
};
</script>

<style scoped>
.index-list {
  position: absolute;
  left: 30px;
  top: 450px;
  height: 30px;
  width: 120px;
  display: flex;
  justify-content: space-between;
}

.el-icon-arrow-left,
.el-icon-arrow-right {
  position: absolute;
  top: 230px;
  left: 0px;
  background-color: rgba(85, 82, 82, 0.5);
  font-size: 30px;
  border: none;
}
.el-icon-arrow-right {
  left: 560px;
  border-radius: 50% 0 0 50%;
}
.el-icon-arrow-left {
  border-radius: 0 50% 50% 0;
}
.el-icon-arrow-left:hover,
.el-icon-arrow-right:hover {
  background-color: rgba(85, 82, 82, 0.8);
}
.big-box {
  left: 200px;
  top: -490px;
  position: relative;
  height: 490px;
  width: 590px;
  overflow: hidden;
}
.big-box li {
  float: left;
}
.big-box ul {
  width: 2950px;
}
img {
  z-index: 1;
  height: 490px;
  width: 590px;
  object-fit: cover;

  transition: opacity 0.2s;
}
#aa img {
}
</style>