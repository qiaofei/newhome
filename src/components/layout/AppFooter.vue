<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Logo & Description -->
        <div class="space-y-6 scroll-reveal">
          <div class="bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 font-bold text-xl inline-block rounded-lg">
            New<span class="text-secondary-light">Home</span>
          </div>
          <p class="text-gray-400 leading-relaxed">
            {{ $t('footer.description') }}
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors text-white" aria-label="Instagram">
              <i class="i-mdi-instagram"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors text-white" aria-label="LinkedIn">
              <i class="i-mdi-linkedin"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors text-white" aria-label="Facebook">
              <i class="i-mdi-facebook"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6 scroll-reveal delay-100">
          <h3 class="font-bold text-lg text-secondary">{{ $t('footer.quickLinks') }}</h3>
          <div class="space-y-3">
            <router-link 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path" 
              class="block text-gray-400 hover:text-white transition-colors"
            >
              {{ $t(item.label) }}
            </router-link>
          </div>
        </div>

        <!-- Service Areas -->
        <div class="space-y-6 scroll-reveal delay-200">
          <h3 class="font-bold text-lg text-secondary">{{ $t('footer.serviceAreas') }}</h3>
          <div class="space-y-3 text-gray-400">
            <p><span class="mr-2 text-secondary">📍</span>{{ $t('footer.locations.westCovina') }}</p>
            <p><span class="mr-2 text-secondary">📍</span>{{ $t('footer.locations.losAngeles') }}</p>
            <p><span class="mr-2 text-secondary">📍</span>{{ $t('footer.locations.sanGabriel') }}</p>
            <p><span class="mr-2 text-secondary">📍</span>{{ $t('footer.locations.orange') }}</p>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6 scroll-reveal delay-300">
          <h3 class="font-bold text-lg text-secondary">{{ $t('footer.contactInfo') }}</h3>
          <div class="space-y-4 text-gray-400">
            <p class="flex items-center">
              <i class="i-mdi-email mr-3 text-secondary text-lg"></i>
              contact@newhomedesignmanagement.com
            </p>
            <p class="flex items-center">
              <i class="i-mdi-phone mr-3 text-secondary text-lg"></i>
              Kevin Zhao 626-278-8652
            </p>
            <p class="flex items-center">
              <i class="i-mdi-phone mr-3 text-secondary text-lg"></i>
              Ferris Qin： 909-999-1856
            </p>
            <p class="flex items-start">
              <i class="i-mdi-map-marker mr-3 text-secondary mt-1 text-lg"></i>
              <span v-html="$t('footer.address').replace('\n', '<br>')"></span>
            </p>
            <p class="flex items-start">
              <i class="i-mdi-clock mr-3 text-secondary mt-1 text-lg"></i>
              <span v-html="$t('footer.hours').replace('\n', '<br>')"></span>
            </p>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            {{ $t('footer.copyright') }}
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">{{ $t('footer.privacyPolicy') }}</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">{{ $t('footer.termsOfService') }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/about', label: 'nav.about' },
  { path: '/services', label: 'nav.services' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/contact', label: 'nav.contact' }
]
</script>
