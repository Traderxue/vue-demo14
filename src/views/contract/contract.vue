<template>
  <div class="contract">
    <div class="title">
        <span>合约</span>
    </div>
    <div class="header">
      <div>
        <span class="material-symbols-outlined" style="font-size: 22px;margin-right: 5px;"> menu </span>
        <span>BTC/USDT</span>
      </div>
      <span class="material-symbols-outlined"> signal_cellular_alt </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contract {
  width: auto;
  height: auto;
  padding: 15px;
  color: #fff;
  .title{
    text-align: center;
  }
  .header{
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
  }
}
</style>