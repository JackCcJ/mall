<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">风羽购物商城</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control class="tab-control" :titles="['流行','新款','精选']" />
  </div>
</template>

<script>
  //公共组件
  import NavBar from 'components/common/navbar/navBar';
  import TabControl from 'components/content/tabControl/tabControl';
  //网络请求组件
  import {getHomeMultidata} from 'network/home';
  //子组件
  import HomeSwiper from './childComps/HomeSwiper';
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,
      getHomeMultidata,
      HomeSwiper,
      RecommendView,
      FeatureView
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
  #home{
    padding-top: 44px;
  }
 .home-nav{
   color: #fff;
   background: var(--color-tint);
   top: 0;
   left: 0;
   position: fixed;
   width: 100%;
   z-index: 99;
   height: 44px;
 }
 .tab-control{
   background-color: #fff;
   position: sticky;
   top: 43px;
 }
</style>
