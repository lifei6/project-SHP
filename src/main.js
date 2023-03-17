import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false


import atm from '@/assets/1.gif'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading:atm
})


import {Button, MessageBox } from 'element-ui'
Vue.component(Button.name,Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
import router from './router'
import store from '@/store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'

import * as API from '@/api'
// console.log(API)

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  }
}).$mount('#app')
