<template>
  <div class="recommend">
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
            type:Array,
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
    }
    .recommend-item{
        flex: 1;
        margin-top: 5px;
        text-align: center;
    }
    .recommend-item img {
        width: 65px;
        height: 65px;
    }
    .recommend-item p {
        margin-top: 10px;
    }
</style>