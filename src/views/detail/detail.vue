<template>
  <div class="detail">
    <child-detail />
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
import childDetail from './childDetail/childDetail';
import {getDetail} from 'network/detail';
import detailSwiper from './childDetail/detailSwiper';
export default {
    name:'detail',
    components:{
      childDetail,
      detailSwiper
    },
    data(){
      return{
        iid: null,
        topImages:null
      }
    },
    created(){
      this.iid = this.$route.params.iid
      console.log(this.iid);
      getDetail(this.iid).then(
        res=>{
          this.topImages=res.result.itemInfo.topImages
        }
      )
    }
}
</script>

<style>

</style>