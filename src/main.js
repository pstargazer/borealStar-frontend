
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/input.css'
import './assets/css/output.css'

import axios from 'axios';
 
axios.defaults.baseURL = import.meta.env.VITE_APP_BACKEND_URL;
// this.prototype.axios=axios  

const app = createApp(App)

// Vue.component('pagination', require('laravel-vue-pagination'));

app.use(createPinia())
app.use(router)


app.mount('#app')