<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">风羽购物商城</div></nav-bar>
    <!-- 设定需要滚动插件的区域，传入是否实时监听数据 -->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll" :pull-up-load="true">
    <!-- 传入banners需要的值 -->
    <home-swiper :banners="banners" />
    <!-- 传入分类数据 -->
    <recommend-view :recommends="recommends" />
    <!-- 大图传入 -->
    <feature-view />
    <!-- Tab选项卡构建，传入需要分类的值，以及接受子组件的值-->
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick='tabClick'/>
    <!-- 主要内容的数据，传入子组件 -->
    <goods-list :goods='showGoods' />
    </scroll>
    <!-- 回到顶部的组件，监听组件的事件 -->
    <back-top @click.native="backClick" v-show="backTop"/>
  </div>
</template>

<script>
  //公共组件
  import NavBar from 'components/common/navbar/navBar'
  import TabControl from 'components/content/tabControl/tabControl'
  //网络请求组件
  import {getHomeMultidata,getHomeGoods} from 'network/home'
  //子组件
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  import goodsList from 'components/content/goods/goodsList'
  import scroll from 'components/common/scroll/scroll'
  import BackTop from 'components/content/backTop/BackTop'

  export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,
      getHomeMultidata,
      HomeSwiper,
      RecommendView,
      FeatureView,
      goodsList,
      scroll,
      BackTop
    },
    data(){
      return {
        banners:[],        //定义banners接受
        recommends:[],     //定义分类接受
        goods:{            // 定义主要内容接受的数组
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:"pop", //定义默认传入子组件的值
        backTop:false      //定义显示隐藏属性
      }
    },
    created(){ //当页面渲染时
      this.getHomeMultidata()   //获取数据内容方法
      this.getHomeGoods('pop')  //传入pop数据内容方法
      this.getHomeGoods('new')  //传入new数据内容方法
      this.getHomeGoods('sell') //传入sell数据内容方法
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      //事件监听相关方法
      tabClick(index){ //根据监听组件的值来展示不同的数据
        switch(index){
          case 0:
            this.currentType ="pop"
            break
          case 1:
            this.currentType = "new"
            break
          case 2:
            this.currentType = "sell"
            break
        }
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0,700); //回到顶部选择坐标以及时间
      },
      scroll(position){ //获取返回顶部的坐标，大于-1000显示，小于隐藏
        this.backTop = (-position.y) > 1000
      },
      //网络请求相关方法
      getHomeMultidata(){
        getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;       //轮播图数据
        this.recommends = res.data.recommend.list; //分类数据
      })
      },
      getHomeGoods(type,){   //获取主要内容方法
        const page = this.goods[type].page+1 //设置默认的页码
        getHomeGoods(type,page).then(res=>{  //传入需要拿到数据的值
        this.goods[type].list.push(...res.data.list) //把拿到数据的集合添加的数组
        this.goods[type].page += 1    //设置默认的页码
      })
      }
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
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
   z-index: 99;
   position: sticky;
   top: 43px;
 }
 .content{
   height: calc(100% - 44px);
   overflow: hidden;
 }
</style>
