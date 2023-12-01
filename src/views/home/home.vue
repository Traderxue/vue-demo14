<script setup>
import { onMounted, ref } from "vue";
import {getPrice} from "@/api/okx.js"

const tradeList = ref([
  {
    type:"BTC",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"ETH",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"SOL",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"APE",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"DOGE",
    price:"",
    parcent:"",
    up:0
  },
])

const getData = async ()=>{
  const {data:res} = await getPrice()
  console.log(res)
}

onMounted(()=>{
  getData()
})
</script>

<template>
  <div class="home">
    <div class="top">
      <div class="header">
        <span class="material-symbols-outlined"> person </span>
        <span>首页</span>
        <span class="material-symbols-outlined"> language </span>
      </div>
      <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="http://localhost:5173/banner1.png" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="http://localhost:5173/banner2.png" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="http://localhost:5173/banner3.png" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="notice">
        <van-notice-bar
          left-icon="volume-o"
          color="#FFF"
          background="#2d4059"
          text="无缝对接真实BTC，ETH, LTC，USDT，以及山寨钱包，安全采用多签名技术。"
        />
      </div>
    </div>
    <div class="assets">
      <div>
        <span>BTC/USDT</span>
        <span>23474.58</span>
        <span>0.61%</span>
      </div>
      <div>
        <span>BTC/USDT</span>
        <span>23474.15</span>
        <span>0.61%</span>
      </div>
      <div>
        <span>BTC/USDT</span>
        <span>23474.15</span>
        <span>0.61%</span>
      </div>
    </div>
    <div class="buy">
      <div class="left">
        <span>快捷买币</span>
        <p>支持USDT、BTC等</p>
        <img src="http://localhost:5173/img_2.png" alt="" />
      </div>
      <div class="right">
        <div class="buy_top">
          <span>快捷买币</span>
          <img src="http://localhost:5173/yhk.png" alt="" />
        </div>
        <div class="buy_bottom">
          <span>锁仓挖矿</span>
          <img src="http://localhost:5173/tz.png" alt="" />
        </div>
      </div>
    </div>
    <div class="type">
      <h3>交易列表</h3>
      <div class="title">
        <span>交易种类</span>
        <span style="text-align: center;">最新价</span>
        <span style="text-align: right;">涨跌幅</span>
      </div>
      <div class="list">
        <div style="display: flex;">
          <span>BTC</span>
          <p>/USDT</p>
        </div>
        <div style="text-align: center;"><span>34216.16</span></div>
        <div style="text-align: right;">
          <button class="up">+15.35%</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: 100%;
  padding: 15px;
  color: #fff;
  background: #2d4059;
  .top {
    width: auto;
    height: auto;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .banner {
      width: auto;
      height: auto;
      margin: 10px 0px;
      img {
        width: 100%;
        height: 170px;
        border-radius: 5px;
      }
    }
    .notice {
      margin: 10px 0px;
    }
  }
  .assets {
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
    background: #3d84a8;
    border-radius: 5px;
    margin-bottom: 15px;
    div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      padding: 10px 15px;
      span {
        margin: 2px 0px;
      }
    }
  }
  .buy {
    width: auto;
    height: 140px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    .left {
      width: 60%;
      height: auto;
      padding: 15px;
      background: #3d84a8;
      box-sizing: border-box;
      border-radius: 3px;
      position: relative;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      span {
        font-size: 18px;
        font-weight: 600;
      }
      p {
        font-size: 14px;
      }
      img {
        position: absolute;
        width: 60px;
        height: 60px;
        top: 25px;
        right: 25px;
      }
    }
    .right {
      width: 35%;
      height: 140px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      div {
        height: 45%;
        background: #3d84a8;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 3px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 13px;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
  .type {
    h3 {
      margin: 20px 0px;
      border-left: 5px solid #30e3ca;
      padding-left: 10px;
    }
    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      span{
        width: 33%;
      }
    }
    .list{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      padding: 10px 0px ;
      div{
        width: 33%;
        button{
          width: 70px;
          height: 30px;
          border: 0;
          border-radius: 2px;
        }
        .up{
          background: #11999e;
        }
        .down{
          background: #e23e57;
        }
      }
    }
  }
}
</style>