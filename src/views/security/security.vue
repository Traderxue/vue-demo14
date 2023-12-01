<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const goBack = () =>{
    router.back()
}

</script>

<template>
  <div class="security">
    <div class="header">
      <span class="material-symbols-outlined" style="font-size: 21px" @click="goBack">
        arrow_back_ios
      </span>
      <span>身份认证</span><span></span>
    </div>
    <div class="banner">
      <img src="http://localhost:5173/sfrz.png" alt="" />
    </div>
    <div class="box">
        <div>
            <span>真实姓名</span>
            <input type="text">
        </div>
        <div>
            <span>身份证号</span>
            <input type="text">
        </div>
        <div class="btn">
            <button v-if="true">立即认证</button>
            <button v-else>已认证</button>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.security {
  width: auto;
  height: auto;
  padding: 15px;
  color: #fff;
  font-size: 15px;
  .header {
    display: flex;
    justify-content: space-between;
  }
  .banner {
    width: auto;
    height: 260px;
    margin-top: 15px;
    text-align: center;
    img {
        height: 240px;
    }
  }
  .box{
    margin-top: 25px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    div{
        display: flex;
        justify-content: space-around;
        align-items: baseline;
        padding: 10px 0px;
        input{
            height: 30px;
            background: #2d4059;
            border: 0;
            border-bottom: 1px solid #FFF;
            padding-left: 10px;
        }
        button{
            width: 50%;
            height: 30px;
            margin-top: 20px;
            border-radius: 2px;
            border: 0;
            background: #fce38a;
            color: #000;
            font-size: 13px;
        }
    }
  }
}
</style>