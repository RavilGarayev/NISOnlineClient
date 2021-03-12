import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/index.full.js';
import axios from 'axios'
import 'axios/lib/axios.js'
import 'cors/lib/index.js'
import config from './assets/config.js'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
