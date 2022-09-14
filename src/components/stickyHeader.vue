<template>
  <div id="head  " ref="sh">
    <div class="search" ref="stickyBox">
          <div class="search-m">
            <input class="search-box" type="text" placeholder="菠萝手机" />
            <el-button
              class="search-button fr"
              type="primary"
              icon="el-icon-search"
            ></el-button>
            <a class="camera-search" href=""
              ><div class="el-icon-camera"></div
            ></a>
            <div class="shopping-car">
              <div class="el-icon-shopping-cart-2"></div>
              <span>我的购物车</span>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
//      methods: {
//     scroll() {
      
      
//       if (window.scrollY > 140) {
        
//         this.$refs.sh.style.cssText="display :block"
        
//       }else{
//  this.$refs.sh.style.cssText="display :none"

//       }
//     },
//   },
//   mounted() {
    
//  window.addEventListener("scroll", this.scroll, true);
    
   
  
//   }

}
</script>

<style scoped >


.shopping-car span {
  font-size: 15px;
  color: rgb(226, 35, 26);
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
.el-icon-camera {
  color: rgb(171, 159, 183);
}
.el-icon-shopping-cart-2 {
  float: left;
  color: rgb(226, 35, 26);
  font-size: 22px;
  line-height: 34px;
  margin-left: 12px;
}
.camera-search:hover .el-icon-camera {
  color: rgb(226, 35, 26);
}
#head {
    position: fixed;
    top: 100px;
    
    height: 140px;
    background-color: red !important;;
  width: 100%;
}

.logo {
  position: absolute;
  z-index: 1;
  top: 10px;
  width: 190px;
  height: 120px;
}
.search-m {
    position: relative;
    left: -100px;
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
  background-color: rgb(200, 22, 35);
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
  color: rgb(203, 200, 200);
  font-size: 10px;
}
.search-box:focus::placeholder {
  color: rgb(164, 152, 152);
}

</style>