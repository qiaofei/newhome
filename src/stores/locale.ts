import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

type Locale = 'en' | 'zh'

export const useLocaleStore = defineStore('locale', () => {
  const locale: Ref<Locale> = ref((localStorage.getItem('locale') as Locale) || 'en')

  const setLocale = (newLocale: Locale): void => {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }

  const toggleLocale = (): void => {
    const newLocale: Locale = locale.value === 'en' ? 'zh' : 'en'
    setLocale(newLocale)
  }

  return {
    locale,
    setLocale,
    toggleLocale
  }
})
