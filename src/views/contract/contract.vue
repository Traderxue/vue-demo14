<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()

const value = ref(1);

const active = ref("");
const active_btn = ref("买入开多");

const dataList = ref([
  {
    price: 21332.12,
    num: 0.58,
  },
  {
    price: 21332.12,
    num: 3.5,
  },
  {
    price: 25632.12,
    num: 0.36,
  },
  {
    price: 21332.12,
    num: 0.3,
  },
]);

const buy = () => {
  active.value = "buy";
  active_btn.value = "买入开多";
};

const sell = () => {
  active.value = "sell";
  active_btn.value = "卖出开空";
};

const goAll = () =>{
  router.push("/all")
}
</script>

<template>
  <div class="contract">
    <div class="title">
      <span>合约</span>
    </div>
    <div class="header">
      <div>
        <span
          class="material-symbols-outlined"
          style="font-size: 22px; margin-right: 5px"
        >
          menu
        </span>
        <span>BTC/USDT</span>
      </div>
      <span class="material-symbols-outlined"> signal_cellular_alt </span>
    </div>
    <div class="box">
      <div class="left">
        <div
          v-for="(item, index) in dataList"
          :key="index"
          style="color: #00b8a9"
        >
          <span>{{ item.price }}</span
          ><span>{{ item.num }}</span>
        </div>
        <span style="font-weight: 600; font-size: 18px; margin: 10px 0px"
          >23456</span
        >
        <div
          v-for="(item, index) in dataList"
          :key="index"
          style="color: #e84545"
        >
          <span>{{ item.price }}</span
          ><span>{{ item.num }}</span>
        </div>
      </div>
      <div class="right">
        <div class="btn">
          <button @click="buy" class="buy">开多</button
          ><button @click="sell" class="sell">开空</button>
        </div>
        <div class="select">
          <p>请选择杠杆1-200x</p>
          <van-stepper v-model="value" step="10" min="0" max="200" />
        </div>
        <div class="num">
          <p>请输入数量 USDT</p>
          <input type="text" placeholder="0.000" />
        </div>
        <div class="btn1">
          <p>可用0.0000 USDT</p>
          <button :class="active == 'buy' ? 'buy' : 'sell'">
            {{ active_btn }}
          </button>
        </div>
      </div>
    </div>
    <div class="position">
      <div class="top">
        <span style="font-weight: 600;font-size: 15px;">当前持仓</span>
        <div @click="goAll">
          <span class="material-symbols-outlined"> segment </span>
          <span>全部</span>
        </div>
      </div>
      <div v-if="true">
        <van-empty description="暂无持仓" />
      </div>
      <div v-else>111</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contract {
  width: auto;
  height: auto;
  padding: 15px;
  color: #fff;
  .title {
    text-align: center;
  }
  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .box {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    height: 260px;
    .left {
      width: 45%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0px;
      }
    }
    .right {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        font-size: 12px;
        margin-bottom: 5px;
      }
      .btn {
        display: flex;
        justify-content: space-between;
        button {
          width: 70px;
          height: 35px;
          font-size: 14px;
          border: 0;
          border-radius: 2px;
        }
      }
      .select {
        ::v-deep(.van-stepper__input) {
          width: 50%;
          margin: 0;
          height: 35px;
        }
        ::v-deep(.van-stepper__minus) {
          width: 25%;
          height: 35px;
          border-radius: 0px;
        }
        ::v-deep(.van-stepper__plus) {
          width: 25%;
          height: 35px;
          border-radius: 0px;
        }
      }
      .num {
        overflow: hidden;
        input {
          height: 30px;
          background: #2d4059;
          border: 0px;
          border-bottom: 1px solid gray;
        }
      }
      .btn1 {
        button {
          width: 100%;
          height: 35px;
          border: 0;
          font-size: 14px;
          border-radius: 2px;
        }
      }
      .buy {
        background: #00b8a9;
      }
      .sell {
        background: #e84545;
      }
    }
  }
  .position {
    margin: 10px 0px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      margin: 15px 0px;
      div {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>