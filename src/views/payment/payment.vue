<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const type = ref("");
const name = ref("");
const amount = ref("");

const dataList = ref([
  {
    type: "银行卡",
    name: "李四",
    amount: "32464612",
  },
  {
    type: "微信",
    name: "李四",
    amount: "wx41546",
  },
  {
    type: "支付宝",
    name: "李四",
    amount: "164444645",
  },
]);

const addType = () => {
    if(type.value==""||name.value==""||amount.value==""){
        return console.log("支付方式为空")
    }
  dataList.value.push({
    type: type.value,
    name: name.value,
    amount: amount.value,
  });
};

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="payment">
    <div class="header">
      <span
        class="material-symbols-outlined"
        style="font-size: 20px"
        @click="goBack"
      >
        arrow_back_ios
      </span>
      <span>帮助中心</span><span></span>
    </div>
    <div class="box" v-for="(item, index) in dataList" :key="index">
      <span>{{ item.type }}</span>
      <span>{{ item.name }}</span>
      <div>
        <span>{{ item.amount }}</span>
        <span
          class="material-symbols-outlined"
          style="font-size: 20px; margin-left: 10px"
        >
          file_copy
        </span>
      </div>
      <img src="http://localhost:5173/btc.png" alt="" />
    </div>
    <div class="add">
      <van-cell-group inset>
        <van-field v-model="type" label="支付方式" />
        <van-field v-model="name" label="姓名" />
        <van-field v-model="amount" label="账号" />
        <van-field disabled />
      </van-cell-group>
      <button @click="addType">确认添加</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.payment {
  width: auto;
  height: auto;
  padding: 15px;
  color: #fff;
  font-size: 15px;
  .header {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box {
    margin-top: 25px;
    background: #3d84a8;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    div {
      display: flex;
      align-items: center;
    }
    span {
      padding: 5px 0px;
    }
    img {
      width: 60px;
      height: 60px;
      position: absolute;
      right: 15px;
    }
  }
  .add {
    width: auto;
    height: auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    ::v-deep(.van-field) {
      background: #2d4059;
    }
    ::v-deep(.van-field__label) {
      color: #fff;
    }
    ::v-deep(.van-field__control) {
      color: #fff;
    }
    ::v-deep(.van-cell-group--inset) {
      border-radius: 0;
    }
    button {
      width: 60%;
      margin: 0 auto;
      height: 30px;
      border: 0;
      border-radius: 2px;
      background: #fce38a;
      color: #000;
      font-size: 13px;
      margin-bottom: 20px;
    }
  }
}
</style>