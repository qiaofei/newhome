<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import { useScrollReveal } from './composables/useScrollReveal'

// 初始化滚动动画
useScrollReveal()
</script>

<template>
  <div class="min-h-screen bg-light-bg">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>


