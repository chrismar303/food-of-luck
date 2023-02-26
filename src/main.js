import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import BaseButton from '@/components/input/BaseButton.vue'
import { yelpApi } from './api'
import '@/index.css'

const app = createApp(App)
app.component('BaseButton', BaseButton)
app.use(yelpApi, {
  baseUrl: import.meta.env.VITE_BASE_URL
})
app.provide('yelpApi', app.config.globalProperties.$yelpApi)
app.use(router).mount('#app')
