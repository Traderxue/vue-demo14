<script setup>
import { ref } from "vue";

const coinList = ref([
    {
        type:"BTC",
        canuse:"0.000",
        freeze:"0.000",
        fold:"0.000"
    },
    {
        type:"ETH",
        canuse:"0.000",
        freeze:"0.000",
        fold:"0.000"
    },
    {
        type:"SOL",
        canuse:"0.000",
        freeze:"0.000",
        fold:"0.000"
    },
    {
        type:"DOGE",
        canuse:"0.000",
        freeze:"0.000",
        fold:"0.000"
    },
    {
        type:"APE",
        canuse:"0.000",
        freeze:"0.000",
        fold:"0.000"
    },
])
</script>

<template>
  <div class="wallet">
    <div class="header">
      <div class="top">
        <h3>总资产折合</h3>
        <h3>0.000</h3>
      </div>
      <div class="bottom">
        <div style="color: #11999e">
          <p>今日收益</p>
          <span>0</span>
        </div>
        <div style="color: #f6416c">
          <p>总收益</p>
          <span>0</span>
        </div>
      </div>
    </div>
    <div class="banner">
      <div>
        <img src="http://localhost:5173/cz.png" alt="" />
        <span>充值</span>
      </div>
      <div>
        <img src="http://localhost:5173/tx.png" alt="" />
        <span>提现</span>
      </div>
      <div>
        <img src="http://localhost:5173/zz.png" alt="" />
        <span>转账</span>
      </div>
    </div>
    <div class="coin">
      <div class="list" v-for="(item,index) in coinList" :key="index">
        <div>
          <span>{{item.type}}</span>
          <span class="material-symbols-outlined" style="font-size: 19px">
            arrow_forward_ios
          </span>
        </div>
        <div><span>可用</span><span>锁定</span><span>折合($)</span></div>
        <div><span>{{item.canuse}}</span><span>{{item.freeze}}</span><span>{{item.fold}}</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wallet {
  width: auto;
  height: auto;
  padding: 15px 15px 70px 15px;
  color: #fff;
  font-size: 15px;
  .header {
    width: auto;
    height: 200px;
    margin: -15px -15px 0px -15px;
    padding: 15px;
    background: url("http://localhost:5173/img_3.png");
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    .top {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      h3 {
        padding: 5px 0px;
      }
    }
    .bottom {
      width: auto;
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 0px 30px;
        font-weight: 600;
        span {
          margin: 10px 0px;
        }
      }
    }
  }
  .banner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 15px 0px;
    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .coin {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .list {
      padding: 15px;
      margin: 5px 0px;
      font-size: 15px;
      border-bottom: 1px solid #f5f5f5;
      div {
        padding: 5px 0px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>