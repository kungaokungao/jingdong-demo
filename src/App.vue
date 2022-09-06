<template>
  <div >
  <topHeader></topHeader>
  <HomeSearch></HomeSearch>
  <shopping-list></shopping-list>
  </div>
</template>

<script>
import topHeader from './components/header.vue'
import homeSearchVue from './components/homeSearch.vue';
import HomeSearch from './components/homeSearch.vue';
import shoppingList from './components/shoppingList.vue';
export default {
  name: 'App',
  components: {
    topHeader,
    homeSearchVue,
    HomeSearch,shoppingList
}
}
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
    list-style: none;

}
body {
  background-color: rgb(244,244,244);
}
.fl {
    float: left;
}
.fr {
    float: right;
}
a:hover {
    color: red;

}
a {
        text-decoration: none;
        color: rgb(153,153,153);
        font-size: 14px;
}
</style>
