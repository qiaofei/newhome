<template>
  <!-- Hero Section -->
  <section class="pt-16 bg-gradient-to-br from-primary to-gray-900 text-white relative overflow-hidden min-h-screen">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img src="/images/services-hero.jpg" 
           alt="Landscape Design" 
           class="w-full h-full object-cover opacity-30">
    </div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 py-20">
      <div class="text-center space-y-8">
        <div class="space-y-4">
          <h1 class="text-5xl lg:text-6xl font-light tracking-wider">
            {{ $t('services.heroTitle') }} <span class="text-secondary font-normal">Design</span>
          </h1>
          <p class="text-xl text-gray-200">{{ $t('services.heroSubtitle') }}</p>
        </div>

        <button class="btn btn-secondary">
          {{ $t('services.discoverMore') }}
        </button>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-5xl font-light text-primary mb-6">{{ $t('services.ourServices') }}</h2>
        <div class="w-24 h-1 bg-accent mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="text-center space-y-4 group scroll-reveal stagger-child">
          <div class="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:bg-secondary transition-colors">
            <i class="fas fa-home text-3xl"></i>
          </div>
          <h3 class="text-xl font-bold text-primary">{{ $t('services.residential.title') }}</h3>
          <p class="text-gray-600">
            {{ $t('services.residential.description') }}
          </p>
        </div>

        <!-- Service 2 -->
        <div class="text-center space-y-4 group scroll-reveal stagger-child">
          <div class="bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors">
            <i class="fas fa-utensils text-3xl"></i>
          </div>
          <h3 class="text-xl font-bold text-primary">{{ $t('services.commercial.title') }}</h3>
          <p class="text-gray-600">
            {{ $t('services.commercial.description') }}
          </p>
        </div>

        <!-- Service 3 -->
        <div class="text-center space-y-4 group scroll-reveal stagger-child">
          <div class="bg-accent text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors">
            <i class="fas fa-drafting-compass text-3xl"></i>
          </div>
          <h3 class="text-xl font-bold text-primary">{{ $t('services.design.title') }}</h3>
          <p class="text-gray-600">
            {{ $t('services.design.description') }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="py-20 bg-light-bg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-4xl font-light text-primary mb-6">{{ $t('services.processTitle') }}</h2>
        <div class="w-24 h-1 bg-accent mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Step 1 -->
        <div class="text-center space-y-4 scroll-reveal stagger-child">
          <div class="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            1
          </div>
          <h3 class="text-xl font-bold text-primary">{{ $t('services.process.consultation.title') }}</h3>
          <p class="text-gray-600">
            {{ $t('services.process.consultation.description') }}
          </p>
        </div>
        
        <!-- Step 2 -->
        <div class="text-center space-y-4 scroll-reveal stagger-child">
          <div class="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            2
          </div>
          <h3 class="text-xl font-bold text-primary">{{ $t('services.process.design.title') }}</h3>
          <p class="text-gray-600">
            {{ $t('services.process.design.description') }}
          </p>
        </div>
        
        <!-- Step 3 -->
        <div class="text-center space-y-4 scroll-reveal stagger-child">
          <div class="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            3
          </div>
          <h3 class="text-xl font-bold text-primary">{{ $t('services.process.planning.title') }}</h3>
          <p class="text-gray-600">
            {{ $t('services.process.planning.description') }}
          </p>
        </div>
        
        <!-- Step 4 -->
        <div class="text-center space-y-4 scroll-reveal stagger-child">
          <div class="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            4
          </div>
          <h3 class="text-xl font-bold text-primary">{{ $t('services.process.execution.title') }}</h3>
          <p class="text-gray-600">
            {{ $t('services.process.execution.description') }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-primary text-white">
    <div class="max-w-7xl mx-auto px-4 text-center scroll-reveal">
      <h2 class="text-4xl font-light mb-6">{{ $t('services.readyTransform') }}</h2>
      <p class="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
        {{ $t('services.readyTransformDesc') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="btn btn-secondary">
          <i class="i-mdi-calendar mr-2"></i>
          {{ $t('cta.scheduleConsultation') }}
        </button>
        <button class="btn btn-outline">
          <i class="i-mdi-phone mr-2"></i>
          {{ $t('cta.callNow') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// 组件逻辑
</script>
