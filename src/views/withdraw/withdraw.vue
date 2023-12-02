<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const num = ref("")

const address = ref("TH67K3FKzSz2Fqe1dfPMmkYaj2YxEcLTgC")

const goBack = () =>{
  router.back()
}

</script>

<template>
  <div class="withdraw">
    <div class="header">
      <span class="material-symbols-outlined" style="font-size: 20px;" @click="goBack"> arrow_back_ios </span>
      <span>提现</span>
      <span></span>
    </div>
    <h3>提现USDT</h3>
    <div class="box">
      <div>
        <span>可提现金额</span>
        <span>0.0000 USDT</span>
      </div>
      <div>
        <span>本次提现</span>
        <input type="text" placeholder="0.000 USDT" v-model="num">
      </div>
      <div>
        <span>提现地址</span>
        <input type="text" placeholder="请输入提现地址" v-model="address">
      </div>
      <div>
        <button>立即提现</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.withdraw{
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
  }
  h3{
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .box{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0px;
      input{
        font-size: 14px;
        height: 30px;
        padding-left: 10px;
        background: #2D4059;
        border: 0;
      }
      button{
        margin: 10px auto;
        width: 60%;
        height: 30px;
        border: 0;
        border-radius: 2px;
        background: #fce38a;
        font-size: 14px;
        color: #000;
      }
    }
  }
}
</style>