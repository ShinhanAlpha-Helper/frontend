import vue, { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


// Vue.prototype.$axios = axios
// app.config.globalProperties.$axios = axios;

createApp(App).use(store).use(router).mount('#app')
