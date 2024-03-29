import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './common.scss'
import App from './App.vue'
//import router from './router/index'
import router from '@/router/index'
import 'virtual:windi.css'
import 'ant-design-vue/dist/antd.css'
import '@/polyfill/polyfill'
import 'virtual:svg-icons-register'
import i18n from '@/global/i18n'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
