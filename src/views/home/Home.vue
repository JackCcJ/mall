<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/navBar';
  import {getHomeMultidata} from 'network/home';
  import HomeSwiper from './childComps/HomeSwiper';
  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper
    },
    data(){
      return {
        banners:[],        
        recommends:[]
      }
    },
    created(){
      getHomeMultidata().then(res => {
        for( let i = 0;i<res.data.banner.list.length;i++){
          res.data.banner.list[i].id = i
        }
        this.banners = res.data.banner.list; //轮播图数据
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
 .home-nav{
   color: #fff;
   background: var(--color-tint);
 }
</style>
