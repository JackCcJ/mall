<template>
  <div class="recommend">
      <!-- 分类组件 -->
      <div v-for="item in recommends" :key="item.id" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>
<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,//定义接受父组件的值
            default(){
                return[]
            }
        }
    }
}
</script>
<style>
    .recommend{
        display: flex;
        width: 100%;
        padding: 5px 0 15px 0;
        border-bottom :10px solid #eee;
    }
    .recommend-item{
        flex: 1;
        margin-top: 5px;
        text-align: center;
    }
    .recommend-item img {
        width: 65px;
        height: 65px;
        margin-bottom: 15px;
    }
</style>