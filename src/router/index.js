import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: () => import("@/views/index.vue"),
      children: ([
        {
          path: "",
          component: () => import("@/views/home/home.vue")
        },
        {
          path: "/home",
          component: () => import("@/views/home/home.vue")
        },
        {
          path:"/quote",
          component:()=>import("@/views/quote/quote.vue"),
          children:([
            {
              path:"",
              component:()=>import("@/views/quote/component/usdt.vue")
            },
            {
              path:"/usdt",
              component:()=>import("@/views/quote/component/usdt.vue")
            },
            {
              path:"/eth",
              component:()=>import("@/views/quote/component/eth.vue")
            }
          ])
        },
        {
          path:"/contract",
          component:()=>import("@/views/contract/contract.vue")
        },
        {
          path:"/wallet",
          component:()=>import("@/views/wallet/wallet.vue")
        }
      ])
    }

  ]
})

export default router
