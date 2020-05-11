<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/navBar'
  export default {
    name: "Home",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
 .home-nav{
   color: #fff;
   background: var(--color-tint);
 }
</style>
