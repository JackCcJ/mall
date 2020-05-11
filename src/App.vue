<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import MainTabbar from './components/content/mainTabbar/MainTabBar';
export default {
  name:'app',
  components: {
    MainTabBar
  }
}
</script>
<style>
  @import "assets/css/base.css";
</style>
