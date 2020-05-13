<template>
  <div class="back-top">
      <!-- 展示回到顶部按钮 -->
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name:'BackTop'
}
</script>

<style>
    .back-top{
        width: 40px;
        position: fixed;
        bottom: 45px;
        right: 10px;
        z-index: 999;
    }
    .back-top img {
        width: 100%;
    }
</style>