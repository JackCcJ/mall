<template>
  <div class="tab-control">
      <div v-for="(item, index) in titles" class="tab-control-item" :key="item.id" :class="{active : index === currentIndex}" @click="itemclick(index)">
          <span>
              {{item}}
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name :"tabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },data(){
        return{
            currentIndex:0 //索引的值
        }
    },methods:{
            itemclick(index){
                this.currentIndex = index; //根据点击的索引更改样式
                this.$emit('tabClick',index);//向父组件传入当前点击的选项
            }
    }
}
</script>

<style>
    .tab-control{
       display: flex;
       text-align: center;
    }
    .tab-control-item{
        flex: 1;
        height: 40px;
        line-height: 40px;
    }
    .tab-control-item span{
        padding: 5px;
    }
    .active{
        color: var(--color-high-text);
    }
    .active span{
        border-bottom: 3px solid var(--color-high-text)
    }
</style>