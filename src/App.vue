<template>
  <div>
    <Header></Header>
    <!-- 路由出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show==true"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name:"",
  components:{
    Header,
    Footer
  },
  mounted(){
    this.$store.dispatch("getCategoryList");

  }

}
</script>

<style>

</style>