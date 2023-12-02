<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="about">
    <div class="header">
      <span
        class="material-symbols-outlined"
        style="font-size: 20px"
        @click="goBack"
      >
        arrow_back_ios
      </span>
      <span>关于我们</span>
      <span></span>
    </div>
    <div class="box">
      <h3>我们的使命</h3>
      <p>
        我们的使命是帮助投资者实现他们的财务目标。我们深知每位投资者都有独特的需求和目标，因此，我们提供多样化的工具和资源，以满足不同投资者的需求。无论您是初学者还是经验丰富的专业人士，我们都致力于为您提供量身定制的解决方案。
      </p>
    </div>
    <div class="box">
      <h3>专业的团队</h3>
      <p>
    我们拥有一支专业、富有经验的团队，致力于为客户提供最新的市场分析、投资建议和财务规划。我们的团队精通股票市场的方方面面，始终紧跟市场脉搏，以确保我们的客户始终站在投资的前沿。 
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  width: auto;
  height: auto;
  padding: 15px;
  font-size: 15px;
  color: #FFF;
  .header {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box{
    width: auto;
    height: auto;
    margin: 20px 0px;
    h3{
        padding: 5px 0px;
    }
    p{
        padding: 2px 0px;
    }
  }
}
</style>