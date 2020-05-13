<template>
      <div class="wrapper" ref="wrapper">
          <div class="content">
            <slot></slot>
          </div>
      </div>
</template>

<script>
import Bscroll from 'better-scroll';//导入插件
export default {
    name:'scroll',
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            scroll:null,//构建一个空的属性
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper,{ //开启滚动插件，拿到唯一值
            click:true ,//默认点击事件无效，开启点击事件
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        this.scroll.on('scroll',(position)=>{ //实时监听坐标的回调
            this.$emit('scroll',position)
        })
        this.scroll.on('pullUpLoad',()=>{
            
        })
    },
    methods:{
        scrollTo(x,y,time=500){
            this.scroll.scrollTo(x,y,time) //构建控制坐标属性，以便于父组件控制时间以及
        }
    }
}
</script>

<style>

</style>