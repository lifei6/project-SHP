<template>
  <div>
    <TypeNav/>
    <ListContianer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
import ListContianer from './ListContianer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from "./Brand"
import { mapState } from "vuex";
// import Swiper from "swiper";
export default {
    name:'',
    components:{
        ListContianer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand,
    },
  mounted(){
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },

};


</script>

<style>

</style>