<template>
  <section class="pt-20 min-h-screen bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-32 h-32 border border-white rounded-full animate-float"></div>
      <div class="absolute top-40 right-20 w-24 h-24 border border-white rounded-full animate-float delay-200"></div>
      <div class="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full animate-float delay-400"></div>
      <div class="absolute top-1/2 right-1/3 w-20 h-20 border border-secondary rounded-full animate-pulse"></div>
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary-dark/60"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
        <!-- Left Content -->
        <div class="space-y-8 scroll-reveal">
          <div class="space-y-6">
            <div class="inline-block">
              <span class="text-secondary-light text-sm font-semibold tracking-wider uppercase bg-secondary/20 px-4 py-2 rounded-full">
                {{ $t('hero.welcome') }}
              </span>
            </div>

            <h1 class="text-display gradient-text animate-fade-in-up">
              {{ $t('hero.ourJourney') }}<br>
              <span class="text-secondary-light font-normal typewriter" ref="typewriterRef">{{ $t('hero.journey') }}</span>
            </h1>

            <div class="w-24 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full animate-scale-in delay-300"></div>
          </div>

          <h2 class="text-hero font-light text-gray-200 animate-fade-in-up delay-200">
            {{ $t('hero.tagline') }}
          </h2>

          <p class="text-lg text-gray-300 leading-relaxed max-w-lg animate-fade-in-up delay-300">
            {{ $t('hero.description') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
            <button type="button" class="btn btn-secondary group">
              <i class="i-mdi-leaf mr-2 group-hover:animate-pulse"></i>
              {{ $t('hero.discoverMore') }}
            </button>
            <button type="button" class="btn btn-outline group">
              <i class="i-mdi-phone mr-2 group-hover:animate-pulse"></i>
              {{ $t('hero.getQuote') }}
            </button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up delay-500">
            <div class="text-center">
              <div class="text-2xl font-bold text-secondary" ref="counter1">{{ stats.projects }}</div>
              <div class="text-sm text-gray-400">{{ $t('hero.stats.projects') }}</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-secondary" ref="counter2">{{ stats.satisfaction }}</div>
              <div class="text-sm text-gray-400">{{ $t('hero.stats.satisfaction') }}</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-secondary" ref="counter3">{{ stats.experience }}</div>
              <div class="text-sm text-gray-400">{{ $t('hero.stats.experience') }}</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Enhanced Image -->
        <div class="relative animate-fade-in-right delay-300">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl card-hover-lift">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                 :alt="$t('hero.awardWinning')"
                 class="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            <!-- Image Overlay Content -->
            <div class="absolute bottom-6 left-6 right-6">
              <div class="glass p-4 rounded-xl">
                <h3 class="text-white font-semibold text-lg">{{ $t('hero.awardWinning') }}</h3>
                <p class="text-gray-200 text-sm">{{ $t('hero.awardDescription') }}</p>
              </div>
            </div>
          </div>

          <!-- Floating Achievement Card -->
          <div class="absolute -bottom-8 -left-8 bg-white text-gray-800 p-6 rounded-2xl shadow-2xl card-glow animate-slide-in-bottom delay-600">
            <div class="flex items-center space-x-4">
              <div class="bg-gradient-to-r from-secondary to-secondary-light text-white p-4 rounded-full">
                <i class="fas fa-award text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg">{{ $t('hero.awardTitle') }}</h3>
                <p class="text-gray-600">{{ $t('hero.designExcellence') }}</p>
                <div class="flex text-accent text-sm mt-1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full animate-pulse"></div>
          <div class="absolute top-1/2 -right-8 w-16 h-16 bg-accent/20 rounded-full animate-float delay-300"></div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const typewriterRef = ref(null)
const counter1 = ref(null)
const counter2 = ref(null)
const counter3 = ref(null)

const stats = ref({
  projects: 0,
  satisfaction: 0,
  experience: 0
})

const animateCounter = (element, target, duration = 2000) => {
  const increment = target / (duration / 16)
  let current = 0
  
  const updateCounter = () => {
    current += increment
    if (current < target) {
      element.textContent = Math.floor(current)
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target
    }
  }
  
  updateCounter()
}

onMounted(() => {
  // 设置计数器动画
  useIntersectionObserver(counter1, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      animateCounter(counter1.value, 150)
      stats.value.projects = 150
    }
  })
  
  useIntersectionObserver(counter2, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      animateCounter(counter2.value, 98)
      stats.value.satisfaction = 98
    }
  })
  
  useIntersectionObserver(counter3, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      animateCounter(counter3.value, 5)
      stats.value.experience = 5
    }
  })
})
</script>
