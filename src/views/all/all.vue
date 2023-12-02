<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const dataList = ref([
    {
        time:"2023/10/15 10:22:02",
        open_price:"2636",
        close_price:"21135",
        direction:"空",
        profit:"+90"
    },
    {
        time:"2023/10/15 10:22:02",
        open_price:"2636",
        close_price:"21135",
        direction:"空",
        profit:"+90"
    },
    {
        time:"2023/10/15 10:22:02",
        open_price:"2636",
        close_price:"21135",
        direction:"空",
        profit:"+90"
    },

])

const goBack = () =>{
    router.back()
}
</script>


<template>
  <div class="all">
    <div class="header">
      <span
        class="material-symbols-outlined"
        style="font-size: 20px"
        @click="goBack"
      >
        arrow_back_ios
      </span>
      <span>全部仓位</span>
      <span></span>
    </div>
    <div class="box" v-for="(item,index) in dataList" :key="index">
        <div><span>时间</span><span>{{item.time}}</span></div>
        <div><span>开仓价格</span><span>{{item.open_price}}</span></div>
        <div><span>平仓价格</span><span>{{item.close_price}}</span></div>
        <div><span>方向</span><span>{{item.direction}}</span></div>
        <div><span>盈亏</span><span>{{item.profit}}</span></div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.all{
    width: auto;
    height: auto;
    padding: 15px;
    font-size: 15px;
    color: #FFF;
    .header{
        width: auto;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .box{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        margin-top: 25px;
        border-bottom: 1px solid #FFF;
        padding: 15px 0px;
        div{
            display: flex;
            justify-content: space-between;
            padding: 2px 0px;
            color: #fdfdfd;
        }
    }

}
</style>