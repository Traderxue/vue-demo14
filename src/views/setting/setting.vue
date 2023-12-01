<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const nickName = ref("用户昵称");
const email = ref("xxx@gmail.com");
const phone = ref("1845646555");
const address = ref("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t")
const version = ref("1.1.16")

const goBack = () =>{
    router.back()
}
</script>

<template>
  <div class="setting">
    <div class="header">
      <span class="material-symbols-outlined" style="font-size: 20px;" @click="goBack"> arrow_back_ios </span>
      <span>设置中心</span>
      <span></span>
    </div>
    <div class="box">
      <div>
        <span>头像</span
        ><img src="https://avatars.githubusercontent.com/u/128983356" alt="" />
      </div>
      <div>
        <span>昵称</span>
        <input type="text" placeholder="请输入内容" v-model="nickName" />
      </div>
      <div>
        <span>邮箱</span>
        <input type="text" placeholder="请输入内容" v-model="email" />
      </div>
      <div>
        <span>手机号</span>
        <input type="text" placeholder="请输入内容" v-model="phone" />
      </div>
      <div>
        <span>提币地址</span>
        <input type="text" placeholder="请输入内容" v-model="address" />
      </div>
      <div>
        <span>版本</span>
        <input type="text" placeholder="请输入内容" v-model="version" />
      </div>
      <div style="border-bottom: 0px;justify-content: center;">
        <button>保存配置</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.setting {
  width: auto;
  height: auto;
  padding: 15px;
  color: #fff;
  font-size: 15px;
  .header{
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      border-bottom: 1px solid rgba($color: #fff, $alpha: 0.5);
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      input {
        height: 30px;
        text-align: right;
        background: #2d4059;
        border: 0;
        color: #fff;
      }
      button{
        width: 60%;
        height: 30px;
        margin-top: 25px;
        border: 0;
        border-radius: 2px;
        background: #fce38a;
        color: #000;
        font-size: 13px;
      }
    }
  }
}
</style>