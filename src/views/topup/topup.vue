<script setup>
import { ref } from "vue"
import Clipboard from 'clipboard';
import { useRouter } from "vue-router"
import { showToast } from "vant";

const router = useRouter()

const address = ref("0x4675C7e5BaAFBFFbca748158bEcBA61ef3b0a263")

const copyToClipboard = () => {
  const clipboard = new Clipboard('.copy-btn', {
    text: () => address.value,
  });

  clipboard.on('success', (e) => {
    console.log('复制成功', e);
    clipboard.destroy(); // 清理内存
    showToast("复制成功");
  });
}

const goBack = () =>{
    router.back()
}
</script>

<template>
  <div class="topup">
    <div class="header">
      <span class="material-symbols-outlined" style="font-size: 20px;" @click="goBack"> arrow_back_ios </span>
      <span>充值</span>
      <span></span>
    </div>
    <h3>充值USDT</h3>
    <div class="box">
        <div>
            <img src="http://localhost:5173/ewm.png" alt="">
            <p>注意：该地址只支持充值ERC20的币种</p>
            <span>{{address}}</span>
        </div>
        <button @click="copyToClipboard" class="copy-btn">复制地址</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topup{
    width: auto;
    height: auto;
    padding: 15px;
    font-size: 15px;
    color: #FFF;
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h3{
        margin: 20px 0px;
    }
    .box{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;
        margin-top: 20px;
        p{
            font-size: 13px;
            margin: 20px 0px;
            color: #e23e57;
        }
        img{
            width: 120px;
            height: 120px;
            margin-bottom: 15px;
        }
        button{
            height: 30px;
            width: 60%;
            margin: 20px auto;
            border: 0;
            border-radius: 2px;
            background: #fce38a;
            color: #000;
            font-size: 13px;
        }
    }
}
</style>