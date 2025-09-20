<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <span class="text-secondary font-semibold tracking-wider uppercase text-sm">{{ $t('services.sectionTitle') }}</span>
        <h2 class="text-title mt-4 mb-6">{{ $t('services.title') }}</h2>
        <p class="text-subtitle max-w-2xl mx-auto">
          {{ $t('services.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card card-hover-lift scroll-reveal stagger-child">
          <div class="p-8 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="i-mdi-home text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('services.residential.title') }}</h3>
            <p class="text-gray-600">{{ $t('services.residential.description') }}</p>
          </div>
        </div>

        <div class="card card-hover-lift scroll-reveal stagger-child">
          <div class="p-8 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="i-mdi-office-building text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('services.commercial.title') }}</h3>
            <p class="text-gray-600">{{ $t('services.commercial.description') }}</p>
          </div>
        </div>

        <div class="card card-hover-lift scroll-reveal stagger-child">
          <div class="p-8 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="i-mdi-compass-outline text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('services.design.title') }}</h3>
            <p class="text-gray-600">{{ $t('services.design.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 组件逻辑可以在这里添加
</script>
