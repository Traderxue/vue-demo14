<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const goBack = () =>{
    router.back()
}

</script>

<template>
  <div class="transfer">
    <div class="header">
      <span class="material-symbols-outlined" style="font-size: 20px;" @click="goBack"> arrow_back_ios </span>
      <span>转账</span><span></span>
    </div>
    <div class="box">
        <div>
            <span>可用余额</span>
            <span>0.000 USDT</span>
        </div>
        <div>
            <span>用户账号</span>
            <input type="text" placeholder="请输入用户账号">
        </div>
        <div>
            <span>转账数量</span>
            <input type="text" placeholder="请输入转账数量">
        </div>
        <div>
            <button>转账</button>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.transfer{
    width: auto;
    height: auto;
    padding: 15px;
    font-size: 15px;
    color: #FFF;
    .header{
        width: auto;
        height: auto;
        display: flex;
        justify-content: space-between;
    }
    .box{
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        font-size: 15px;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0px;
            input{
                font-size: 14px;
                width: auto;
                height: 30px;
                padding-left: 10px;
                background: #2D4059;
                border: 0;
                border-bottom: 1px solid gray;
            }
            button{
                width: 60%;
                height: 30px;
                border: 0;
                border-radius: 2px;
                margin: 10px auto;
                background: #fce38a;
                color: #000;
                font-size: 13px;
            }
        }
    }
}
</style>