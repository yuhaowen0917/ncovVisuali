import { createApp } from 'vue'
import App from './App.vue'
//引入 bootstrap
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

// createApp(App).mount('#app')

const app = createApp(App);

// import axios from 'axios'

// app.config.globalProperties.$axios = axios
app.mount('#app')