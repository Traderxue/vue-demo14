<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const active = ref("USDT");

const titleList = ref([
  {
    title: "USDT",
    path: "/usdt",
  },
  {
    title: "ETH",
    path: "/eth",
  },
]);

const goTab = (item) => {
  active.value = item.title;
  router.push(item.path);
};
</script>

<template>
  <div class="quote">
    <div class="header">
      <span
        v-for="(item, index) in titleList"
        :key="index"
        @click="goTab(item)"
        :class="item.title==active?'active':''"
        >{{ item.title }}</span
      >
    </div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.quote {
  width: auto;
  height: auto;
  padding: 15px;
  color: #fff;
  background: #2d4059;
  .header {
    display: flex;
    justify-content: space-around;
    font-weight: 600;
    padding: 10px 0px;
    .active {
      color: rgb(246, 160, 5);
    }
  }
}
</style>