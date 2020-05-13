<template>
  <div class="navBar">
    <!-- 构建顶部导航组件 -->
	  <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
	  <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
 name:"navBar"
}
</script>

<style scoped>
  .navBar{
    width: 100%;
    display: flex;
    height: 44px;
    text-align: center;
    line-height: 44px;
  }
  .left ,.right{
    width: 60px;
    height: 44px;
  }
  .center{
    flex: 1;
    height: 44px;
  }
</style>