import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vant/lib/index.css';
import vant from "vant"
import i18n from "@/lang/index.js"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(vant)
app.use(i18n)

app.use(createPinia())
app.use(router)

app.mount('#app')
