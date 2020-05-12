<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">风羽购物商城</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control class="tab-control" :titles="['流行','新款','精选']" />
    <goods-list :goods="goods['pop'].list" />
  </div>
</template>

<script>
  //公共组件
  import NavBar from 'components/common/navbar/navBar';
  import TabControl from 'components/content/tabControl/tabControl';
  //网络请求组件
  import {getHomeMultidata,getHomeGoods} from 'network/home';
  //子组件
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  import goodsList from 'components/content/goods/goodsList'
  export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,
      getHomeMultidata,
      HomeSwiper,
      RecommendView,
      FeatureView,
      goodsList
    },
    data(){
      return {
        banners:[],        
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
      }
    },
    created(){
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res => {
        this.banners = res.data.banner.list; //轮播图数据
        this.recommends = res.data.recommend.list;
      })
      },
      getHomeGoods(type,){
        const page = this.goods[type].page+1
        getHomeGoods('pop',page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
      }
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
