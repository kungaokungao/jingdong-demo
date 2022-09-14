<template>
  <div >
    
    <topHeader></topHeader>
    <HomeSearch></HomeSearch>
    <stickyHeader  />
    <shopping-list></shopping-list>
    <countDown />
    <swiperDemo />
   
  </div>
</template>

<script>
import topHeader from "./components/header.vue";
import countDown from "./components/countDown.vue";
import HomeSearch from "./components/homeSearch.vue";
import shoppingList from "./components/shoppingList.vue";
import swiperDemo from  "./components/swiperDemo.vue"
import stickyHeader  from "./components/stickyHeader.vue"
export default {
  name: "App",
  components: {
    topHeader,
    HomeSearch,
    shoppingList,
    countDown,
    swiperDemo,
    stickyHeader 

  },
};
</script>

<style>

* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
body {
  background-color: rgb(244, 244, 244);
}
.fl {
  float: left;
}
.fr {
  float: right;
}
a:hover {
  color: red !important;
}
a {
  text-decoration: none;
  color: rgb(153, 153, 153);
  font-size: 14px;
}
.flex {
  display: flex;
}
</style>
