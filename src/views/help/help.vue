<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()

const activeName1 = ref(["1"]);
const activeName2 = ref(["1"]);

const goBack = ()=>{
    router.back()
}
</script>

<template>
  <div class="help">
    <div class="header">
      <span class="material-symbols-outlined" style="font-size: 20px" @click="goBack">
        arrow_back_ios
      </span>
      <span>帮助中心</span><span></span>
    </div>
    <h3>新手指引</h3>
    <van-collapse v-model="activeName1">
      <van-collapse-item title="购买USDT?" name="1">
        代码是写出来给人看的，附带能在机器上运行。
      </van-collapse-item>
      <van-collapse-item title="如何加入社群？" name="2">
        技术无非就是那些开发它的人的共同灵魂。
      </van-collapse-item>
      <van-collapse-item title="绑定银行卡？" name="3">
        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
      </van-collapse-item>
    </van-collapse>
    <h3>常见问题</h3>
    <van-collapse v-model="activeName2
    ">
      <van-collapse-item title="提币未到？" name="1">
        代码是写出来给人看的，附带能在机器上运行。
      </van-collapse-item>
      <van-collapse-item title="如何提币？" name="2">
        技术无非就是那些开发它的人的共同灵魂。
      </van-collapse-item>
      <van-collapse-item title="提币未到怎么办？" name="3">
        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<style lang="scss" scoped>
.help {
  width: auto;
  height: auto;
  padding: 15px;
  color: #fff;
  .header {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    margin-top: 25px;
    margin-bottom: 10px;
    border-left: 5px solid #fce38a;
    padding-left: 10px;
  }
  ::v-deep(.van-collapse) {
    background: #2d4059;
  }
  ::v-deep(.van-cell--clickable) {
    background: #2d4059;
    color: #fff;
  }
  ::v-deep(.van-collapse-item__content) {
    background: #2d4059;
    color: #dbe2ef;
  }
}
</style>