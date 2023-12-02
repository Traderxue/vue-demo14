<script setup>
import { onMounted, ref } from "vue";
import { getPrice } from "@/api/okx.js";

const dataList = ref([
  {
    type: "BTC",
    price: "3464",
    parcent: "1.12",
    up: 1,
  },
  {
    type: "DOGE",
    price: "3464",
    parcent: "1.12",
    up: 0,
  },
  {
    type: "BTC",
    price: "3464",
    parcent: "1.12",
    up: 1,
  },
  {
    type: "DOGE",
    price: "3464",
    parcent: "1.12",
    up: 0,
  },
  {
    type: "BTC",
    price: "3464",
    parcent: "1.12",
    up: 1,
  },
  {
    type: "BTC",
    price: "3464",
    parcent: "1.12",
    up: 1,
  },
  {
    type: "DOGE",
    price: "3464",
    parcent: "1.12",
    up: 0,
  },
  {
    type: "BTC",
    price: "3464",
    parcent: "1.12",
    up: 1,
  },
  {
    type: "BTC",
    price: "3464",
    parcent: "1.12",
    up: 1,
  },
]);

const getPrices = () => {
  dataList.value.forEach(async (item) => {
    const { data: res } = await getPrice(item.type);
    item.price = res.data[0].markPx;
    console.log(res);
  });
};

onMounted(() => {
  getPrices();
});
</script>

<template>
  <div class="usdt">
    <div class="title">
      <span>交易种类</span>
      <span style="text-align: center">价格</span>
      <span style="text-align: right">涨跌幅</span>
    </div>
    <div class="box" v-for="(item, index) in dataList" :key="index">
      <div>
        <span>{{ item.type }}</span
        ><span>/USDT</span>
      </div>
      <div style="text-align: center">
        <span :class="item.up == 1 ? 'up' : 'down'">{{ item.price }}</span>
      </div>
      <div style="text-align: right">
        <button :class="item.up == 1 ? 'up_btn' : 'down_btn'">
          {{ item.parcent }}%
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.usdt {
  width: auto;
  height: auto;
  padding-bottom: 65px;
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 15px;
    span {
      width: 33%;
    }
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    font-size: 15px;
    div {
      width: 33%;
    }
    button {
      width: 70px;
      height: 30px;
      border: 0;
      font-size: 14px;
      border-radius: 2px;
    }
    .up {
      color: #11999e;
      font-weight: 600;
    }
    .down {
      color: #e84545;
      font-weight: 600;
    }
    .up_btn {
      background: #11999e;
    }
    .down_btn {
      background: #e23e57;
    }
  }
}
</style>