import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './common.scss'
import App from './App.vue'
import 'virtual:windi.css'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')

