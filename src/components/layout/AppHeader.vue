<template>
  <nav 
    class="bg-white/90 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 transition-all duration-300"
    :class="{ 'nav-scrolled': isScrolled, 'nav-hidden': isHidden }"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center animate-fade-in-left">
          <router-link to="/" class="bg-gradient-to-br from-primary via-primary-light to-secondary text-white px-4 py-3 font-bold text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
            <span class="relative z-10">New<span class="text-accent-light">Home</span></span>
            <div class="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </router-link>
        </div>

        <!-- Navigation Menu -->
        <div class="hidden md:flex space-x-8 animate-fade-in-up delay-200">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path" 
            class="relative text-gray-600 hover:text-secondary transition-all duration-300 font-medium py-2 group"
            active-class="text-primary"
          >
            {{ $t(item.label) }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </router-link>
        </div>

        <!-- Language Toggle & Contact Button -->
        <div class="hidden md:flex items-center space-x-4 animate-fade-in-right delay-300">
          <button 
            @click="toggleLanguage"
            class="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors rounded-md border border-gray-300 hover:border-primary"
          >
            {{ locale === 'en' ? 'CN' : 'EN' }}
          </button>
          <button type="button" class="btn btn-primary">
            <i class="i-mdi-phone mr-2"></i>
            {{ $t('nav.contactUs') }}
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-2">
          <button 
            @click="toggleLanguage"
            class="px-2 py-1 text-xs font-medium text-gray-600 hover:text-primary transition-colors rounded border border-gray-300"
          >
            {{ locale === 'en' ? 'CN' : 'EN' }}
          </button>
          <button
            type="button"
            class="mobile-menu-btn text-gray-600 hover:text-primary transition-colors p-2"
            @click="toggleMobileMenu"
            :class="{ 'active': isMobileMenuOpen }"
          >
            <span class="text-xl">☰</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      class="mobile-menu md:hidden bg-white border-t border-gray-200 transform transition-all duration-300"
      :class="{ 
        'active translate-y-0 opacity-100': isMobileMenuOpen,
        '-translate-y-full opacity-0': !isMobileMenuOpen 
      }"
    >
      <div class="px-4 py-6 space-y-4">
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path" 
          class="block text-gray-600 hover:text-secondary transition-colors py-2 font-medium"
          active-class="text-primary"
          @click="closeMobileMenu"
        >
          {{ $t(item.label) }}
        </router-link>
        <button type="button" class="btn btn-primary w-full mt-4">
          <i class="i-mdi-phone mr-2"></i>
          {{ $t('nav.contactUs') }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '@/stores/locale'

const { locale } = useI18n()
const localeStore = useLocaleStore()

const isScrolled = ref(false)
const isHidden = ref(false)
const isMobileMenuOpen = ref(false)
const lastScrollY = ref(0)

const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/about', label: 'nav.about' },
  { path: '/services', label: 'nav.services' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/contact', label: 'nav.contact' }
]

const toggleLanguage = () => {
  localeStore.toggleLocale()
  locale.value = localeStore.locale
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 初始化语言设置
onMounted(() => {
  locale.value = localeStore.locale
})

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  if (currentScrollY > 100) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }

  if (currentScrollY > lastScrollY.value && currentScrollY > 200) {
    isHidden.value = true
  } else {
    isHidden.value = false
  }
  
  lastScrollY.value = currentScrollY
}

onMounted(() => {
  // 初始化语言设置
  locale.value = localeStore.locale
  
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-scrolled {
  @apply bg-white/95 backdrop-blur-md shadow-lg;
}

.nav-hidden {
  @apply -translate-y-full;
}

.mobile-menu-btn.active i {
  @apply rotate-90;
}

.router-link-active span {
  @apply scale-x-100;
}
</style>
