<template>
    <div class="detailSwiper">
        <swiper>
            <swiper-item class="swiper-item" v-for="item in topImages" :key="item.id">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name:"detailSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    props: {    
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .swiper-item{
        height: 300px;
        overflow: hidden;
    }
</style>