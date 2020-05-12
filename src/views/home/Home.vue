<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">风羽购物商城</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/navBar';
  import {getHomeMultidata} from 'network/home';
  import HomeSwiper from './childComps/HomeSwiper';
  import RecommendView from './childComps/RecommendView'
  
  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      getHomeMultidata
    },
    data(){
      return {
        banners:[],        
        recommends:[]
      }
    },
    created(){
      getHomeMultidata().then(res => {
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
