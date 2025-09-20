<template>
  <section class="py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-float"></div>
      <div class="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full animate-float delay-200"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 text-center relative z-10 scroll-reveal">
      <h2 class="text-hero mb-6">{{ $t('cta.title') }}</h2>
      <p class="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
        {{ $t('cta.description') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button type="button" class="btn btn-secondary">
          <i class="i-mdi-calendar mr-2"></i>
          {{ $t('cta.scheduleConsultation') }}
        </button>
        <button type="button" class="btn btn-outline">
          <i class="i-mdi-phone mr-2"></i>
          {{ $t('cta.callNow') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// 组件逻辑可以在这里添加
</script>
