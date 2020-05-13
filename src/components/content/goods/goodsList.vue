<template>
  <div class="goods">
    <!-- 拿到父组件传入的值根据值的长度进行循环多少条数据，把值属性传入子组件-->
    <goods-item v-for="item in goods" :goodsItem="item" :key="item.id"/>
  </div>
</template>

<script>
import goodsItem from './goodsItem' //导入展示数据组件
export default {
    name:'goodsList',
    components:{
        goodsItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>