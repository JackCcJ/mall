<template>
  <div class="goodsList">
    <goods-item v-for="item in goods" :goodsItem="item" :key="item.id"/>
  </div>
</template>

<script>
import goodsItem from './goodsItem'
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
</style>