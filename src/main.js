import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from '@/components/input/BaseButton.vue'
import router from '@/router'
import '@/index.css'

const app = createApp(App)
app.component('BaseButton', BaseButton)
app.use(router).mount('#app')
