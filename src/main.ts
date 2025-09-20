import './assets/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

// 导入语言包
import en from './locales/en.json'
import zh from './locales/zh.json'

// 定义消息类型
interface Messages {
  [key: string]: any
}

// 获取保存的语言设置
const savedLocale = localStorage.getItem('locale') || 'en'

// 创建i18n实例
const i18n = createI18n<[Messages], 'en' | 'zh'>({
  legacy: false,
  locale: savedLocale as 'en' | 'zh',
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
