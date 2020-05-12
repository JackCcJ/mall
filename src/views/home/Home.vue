<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/navBar';
  import {getHomeMultidata} from 'network/home';
  import {Swiper, SwiperItem} from 'components/common/swiper';
  export default {
    name: "Home",
    components:{
      NavBar
      ,Swiper
      , SwiperItem
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
