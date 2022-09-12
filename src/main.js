import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from '../node_modules/moment'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "../node_modules/swiper/dist/css/swiper.css"
Vue.use(VueAwesomeSwiper)
Vue.prototype.$moment = moment;
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
