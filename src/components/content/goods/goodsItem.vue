<template>
  <div>
        <img :src="goodsItem.show.img" alt="">
        <div>
            <p>{{goodsItem.title}}</p>
            <p class="price">{{goodsItem.price}}</p>
            <p class="col"></p>
        </div>
  </div>
</template>

<script>
export default {
    name:"gootsItem",
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>

</style>