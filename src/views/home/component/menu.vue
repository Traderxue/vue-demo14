<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Clipboard from "clipboard";
import { showToast } from "vant";

const router = useRouter();

const uid = ref("645645");

const list = ref([
  {
    title: "身份认证",
    icon: "verified_user",
    path: "/security",
  },
  {
    title: "账户中心",
    icon: "lock",
    path: "/wallet",
  },
  {
    title: "设置中心",
    icon: "settings",
    path: "/setting",
  },
  {
    title: "收款方式",
    icon: "credit_card",
    path: "/payment",
  },
  {
    title: "咨询客服",
    icon: "support_agent",
    path: "",
  },
  {
    title: "帮助中心",
    icon: "help",
    path: "/help",
  },
  {
    title: "关于我们",
    icon: "info",
    path: "/about",
  },
]);

const copyToClipboard = () => {
  const clipboard = new Clipboard(".material-symbols-outlined", {
    text: () => uid.value,
  });

  clipboard.on("success", (e) => {
    console.log("复制成功", e);
    clipboard.destroy(); // 清理内存
    showToast("复制成功");
  });
};

const topup = () => {
  router.push("/topup");
};

const widthdraw = () => {
  router.push("/widthdraw");
};

const transfer = () => {
  router.push("/transfer");
};

const goTab = (item) => {
  router.push(item.path);
};
</script>

<template>
  <div class="menu">
    <div class="header">
      <h3>FTTX</h3>
      <div>
        <span>UID: {{ uid }}</span>
        <span
          class="material-symbols-outlined"
          style="margin-left: 5px; cursor: pointer"
          @click="copyToClipboard"
        >
          file_copy
        </span>
      </div>
    </div>
    <div class="banner">
      <div @click="topup">
        <img src="http://localhost:5173/cz.png" alt="" />
        <span>充值</span>
      </div>
      <div @click="widthdraw">
        <img src="http://localhost:5173/tx.png" alt="" />
        <span>提现</span>
      </div>
      <div @click="transfer">
        <img src="http://localhost:5173/zz.png" alt="" />
        <span>转账</span>
      </div>
    </div>
    <div class="list">
      <div v-for="(item, index) in list" :key="index" @click="goTab(item)">
        <span class="material-symbols-outlined" style="font-size: 22px">
          {{ item.icon }}
        </span>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  width: auto;
  height: auto;
  padding: 30px 10px;
  font-size: 15px;
  .header {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 25px;
    div {
      display: flex;
      align-items: center;
    }
    h3 {
      padding-bottom: 10px;
    }
    span {
      font-size: 14px;
    }
  }
  .banner {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      img {
        width: 35px;
        height: 35px;
      }
    }
  }
  .list {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 25px;
    div {
      display: flex;
      align-items: center;
      margin: 10px 0px;
      padding: 5px 0px;
      span {
        padding-right: 10px;
      }
    }
  }
}
</style>