<template>
  <div class="detail">
    <child-detail />
  </div>
</template>

<script>
import childDetail from './childDetail/childDetail';
export default {
    name:'detail',
    components:{
      childDetail
    },
    data(){
      return{
        iid:null
      }
    },
    created(){
      this.iid = this.$route.params.iid
    }
}
</script>

<style>

</style>