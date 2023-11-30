import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vant/lib/index.css';
import vant from "vant"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(vant)

app.use(createPinia())
app.use(router)

app.mount('#app')