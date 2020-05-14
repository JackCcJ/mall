<template>
  <nav-bar>
    <div slot="center" class="titles">
        <div v-for="(item , index) in titles" :class="{active:index==currentIndex}" @click="itmeClick(index)" :key="item.id">
            {{item}}
        </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/navBar'
export default {
    name:'childDetail',
    components:{
        NavBar
    },
    data(){
        return{
            titles:[
                '商品','参数','评论','推荐'
            ],
            currentIndex:0
        }
    },methods:{
        itmeClick(index){
            this.currentIndex = index
        }
    }
}
</script>

<style>
    .titles{
        display: flex;
        font-size: 16px;
        justify-content: space-between;
    }
    .titles div{
        flex: 1;
    }
    .active{
        color: red;
    }
</style>