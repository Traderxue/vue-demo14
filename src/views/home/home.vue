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
  .assets{
    display: flex;
    justify-content: space-around;
    padding: 5px 0px;
    div{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        span{
            margin: 2px 0px;
        }
    }
  }
}
</style>