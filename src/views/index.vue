<script setup>
import { ref } from "vue";
import { showToast } from "vant";

const loading = ref(false);

const onRefresh = () => {
  setTimeout(() => {
    showToast("刷新成功");
    loading.value = false;
    window.location.reload();
  }, 1000);
};

const active = ref(0);
</script>

<template>
  <div class="index">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <RouterView />
    </van-pull-refresh>
    <van-tabbar
      v-model="active"
      active-color="#F6A005"
      inactive-color="#FFF"
      route
    >
      <van-tabbar-item to="/home">
        <span class="material-symbols-outlined"> home </span><br />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/quote">
        <span class="material-symbols-outlined"> monitoring </span><br />
        <span>行情</span>
      </van-tabbar-item>
      <van-tabbar-item to="/contract"
        ><span class="material-symbols-outlined"> list_alt </span>
        <br />
        <span>合约</span></van-tabbar-item
      >
      <van-tabbar-item to="/wallet">
        <span class="material-symbols-outlined"> account_balance_wallet </span
        ><br /><span>钱包</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
::v-deep(.van-tabbar) {
  background: #303841;
}
::v-deep(.van-tabbar-item) {
  background: #303841;
}
</style>