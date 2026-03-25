<template>
  <!-- Hero Section -->
  <section class="pt-20 bg-gradient-to-br from-secondary via-secondary-dark to-primary text-white py-24 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-32 h-32 border border-white rounded-full animate-float"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full animate-float delay-200"></div>
      <div class="absolute top-1/2 left-1/3 w-16 h-16 border border-accent rounded-full animate-pulse"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
      <div class="scroll-reveal">
        <span class="text-accent-light text-sm font-semibold tracking-wider uppercase bg-accent/20 px-4 py-2 rounded-full inline-block mb-6">
          {{ $t('about.subtitle') }}
        </span>
        <h1 class="text-display mb-8 animate-fade-in-up">
          {{ $t('about.title') }}
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8 animate-scale-in delay-200"></div>
        <p class="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
          {{ $t('about.subtitle') }}
        </p>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="py-20 bg-light-bg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="space-y-8 scroll-reveal">
          <div class="space-y-6">
            <span class="text-secondary font-semibold tracking-wider uppercase text-sm">Our Story</span>
            <h2 class="text-title text-primary">
              Passion. Creativity. Excellence.
            </h2>

            <div class="space-y-6 text-gray-600 leading-relaxed">
              <p class="text-lg">
                At New Home Design & Management, we are passionate about creating
                beautiful architectural and interior spaces that enhance your living and working
                environments. Our team of experienced designers brings creativity and innovation to every project.
              </p>

              <p>
                Founded in 2024, we have quickly established ourselves as
                leaders in high-end space design. We believe that
                great design should not only be beautiful but also
                functional and add value to your property.
              </p>

              <p>
                Our approach combines international design trends with local cultural
                elements and modern construction techniques. We work closely with our clients to understand
                their vision and deliver tailored solutions for homes, villas, offices, and commercial properties.
              </p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-6 py-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-secondary counter" ref="counter1">{{ stats.projects }}</div>
                <div class="text-sm text-gray-500 uppercase tracking-wider">{{ $t('about.projectsCompleted') }}</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-secondary counter" ref="counter2">{{ stats.satisfaction }}</div>
                <div class="text-sm text-gray-500 uppercase tracking-wider">{{ $t('about.clientSatisfaction') }}</div>
              </div>
            </div>

            <button type="button" class="btn btn-secondary">
              <i class="fas fa-arrow-right mr-2"></i>
              {{ $t('about.viewProjects') }}
            </button>
          </div>
        </div>

        <!-- Right Content - Enhanced Images -->
        <div class="space-y-6 scroll-reveal delay-200">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="card-hover-lift overflow-hidden rounded-2xl">
                <img src="/images/project-garden.jpg"
                     alt="Modern Garden Design"
                     class="w-full h-48 object-cover transition-transform duration-700 hover:scale-110">
              </div>

              <div class="card-hover-lift overflow-hidden rounded-2xl">
                <img src="/images/project-backyard.jpg"
                     alt="Landscape Architecture"
                     class="w-full h-32 object-cover transition-transform duration-700 hover:scale-110">
              </div>
            </div>

            <div class="space-y-4 pt-8">
              <div class="card-hover-lift overflow-hidden rounded-2xl">
                <img src="/images/about-villa.jpg"
                     alt="Outdoor Living Space"
                     class="w-full h-32 object-cover transition-transform duration-700 hover:scale-110">
              </div>

              <div class="card-hover-lift overflow-hidden rounded-2xl">
                <img src="/images/project-pool.jpg"
                     alt="Garden Pathway"
                     class="w-full h-48 object-cover transition-transform duration-700 hover:scale-110">
              </div>
            </div>
          </div>

          <!-- Floating Achievement -->
          <div class="relative">
            <div class="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl card-glow">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                  <i class="fas fa-trophy text-white"></i>
                </div>
                <div>
                  <div class="font-bold text-gray-800">Award Winner</div>
                  <div class="text-sm text-gray-600">2024 Design Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Timeline Section -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <span class="text-secondary font-semibold tracking-wider uppercase text-sm">Our Journey</span>
        <h2 class="text-title mt-4 mb-6">Company Timeline</h2>
        <p class="text-subtitle max-w-2xl mx-auto">
          From our founding to becoming a leading landscape design studio
        </p>
      </div>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary to-primary"></div>

        <div class="space-y-12">
          <!-- Timeline Item 1 -->
          <div class="relative flex items-center scroll-reveal stagger-child">
            <div class="flex-1 text-right pr-8">
              <div class="bg-white p-6 rounded-xl shadow-lg card-hover-lift">
                <h3 class="text-xl font-semibold text-primary mb-2">{{ $t('about.companyFounded') }}</h3>
                <p class="text-gray-600">{{ $t('about.companyFoundedDesc') }}</p>
              </div>
            </div>
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg"></div>
            <div class="flex-1 pl-8">
              <div class="text-2xl font-bold text-secondary">2024</div>
            </div>
          </div>

          <!-- Timeline Item 2 -->
          <div class="relative flex items-center scroll-reveal stagger-child">
            <div class="flex-1 text-right pr-8">
              <div class="text-2xl font-bold text-secondary">2024</div>
            </div>
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
            <div class="flex-1 pl-8">
              <div class="bg-white p-6 rounded-xl shadow-lg card-hover-lift">
                <h3 class="text-xl font-semibold text-primary mb-2">First Major Project</h3>
                <p class="text-gray-600">Completed our first large-scale commercial landscape design project, setting new standards in the industry.</p>
              </div>
            </div>
          </div>

          <!-- Timeline Item 3 -->
          <div class="relative flex items-center scroll-reveal stagger-child">
            <div class="flex-1 text-right pr-8">
              <div class="bg-white p-6 rounded-xl shadow-lg card-hover-lift">
                <h3 class="text-xl font-semibold text-primary mb-2">Award Recognition</h3>
                <p class="text-gray-600">Received the Design Excellence Award for innovative and sustainable landscape architecture.</p>
              </div>
            </div>
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
            <div class="flex-1 pl-8">
              <div class="text-2xl font-bold text-secondary">2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-20 bg-light-bg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <span class="text-secondary font-semibold tracking-wider uppercase text-sm">{{ $t('about.team.title') }}</span>
        <h2 class="text-title mt-4 mb-6">{{ $t('about.team.subtitle') }}</h2>
        <p class="text-subtitle max-w-2xl mx-auto">
          {{ $t('about.team.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Team Member 1 -->
        <div class="card card-hover-lift text-center scroll-reveal stagger-child">
          <div class="p-8">
            <div class="relative mb-6">
              <img src="/avatars/kevin-cartoon.svg"
                   alt="Kevin Zhao"
                   class="w-24 h-24 rounded-full mx-auto object-cover">
              <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <i class="fas fa-check text-white text-sm"></i>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ $t('about.team.kevin.name') }}</h3>
            <p class="text-secondary font-medium mb-3">{{ $t('about.team.kevin.title') }}</p>
            <p class="text-gray-600 text-sm mb-4">{{ $t('about.team.kevin.description') }}</p>
            <div class="flex justify-center space-x-3">
              <a href="tel:626-278-8652" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" title="Call Kevin">
                <i class="fas fa-phone text-sm"></i>
              </a>
              <a href="mailto:contact@newhomedesignmanagement.com" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" title="Email Kevin">
                <i class="fas fa-envelope text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Team Member 2 -->
        <div class="card card-hover-lift text-center scroll-reveal stagger-child">
          <div class="p-8">
            <div class="relative mb-6">
              <img src="/avatars/ferris-cartoon.svg"
                   alt="Ferris Qin"
                   class="w-24 h-24 rounded-full mx-auto object-cover">
              <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <i class="fas fa-check text-white text-sm"></i>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ $t('about.team.ferris.name') }}</h3>
            <p class="text-secondary font-medium mb-3">{{ $t('about.team.ferris.title') }}</p>
            <p class="text-gray-600 text-sm mb-4">Oversees construction projects and client relations, ensuring quality delivery from concept to completion.</p>
            <div class="flex justify-center space-x-3">
              <a href="tel:909-999-1856" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" title="Call Ferris">
                <i class="fas fa-phone text-sm"></i>
              </a>
              <a href="mailto:contact@newhomedesignmanagement.com" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" title="Email Ferris">
                <i class="fas fa-envelope text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Company Info -->
        <div class="card card-hover-lift text-center scroll-reveal stagger-child">
          <div class="p-8">
            <div class="relative mb-6">
              <div class="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <i class="fas fa-building text-white text-2xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-2">Our Office</h3>
            <p class="text-secondary font-medium mb-3">West Covina Location</p>
            <p class="text-gray-600 text-sm mb-4">Visit us at our West Covina office to discuss your design and construction needs.</p>
            <div class="flex justify-center space-x-3">
              <a href="https://maps.google.com/?q=3636+S+Nogales+St,+West+Covina,+CA+91792" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" title="View on Map">
                <i class="fas fa-map-marker-alt text-sm"></i>
              </a>
              <a href="mailto:contact@newhomedesignmanagement.com" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" title="Email Us">
                <i class="fas fa-envelope text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Values Section -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <span class="text-secondary font-semibold tracking-wider uppercase text-sm">Our Values</span>
        <h2 class="text-title mt-4 mb-6">What Drives Us</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Value 1 -->
        <div class="text-center space-y-6 scroll-reveal stagger-child">
          <div class="w-20 h-20 bg-gradient-to-r from-secondary to-secondary-light text-white rounded-full flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <i class="fas fa-leaf text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-primary">Sustainability</h3>
          <p class="text-gray-600 leading-relaxed">
            We prioritize eco-friendly practices and sustainable design
            solutions that benefit both our clients and the environment.
          </p>
        </div>

        <!-- Value 2 -->
        <div class="text-center space-y-6 scroll-reveal stagger-child">
          <div class="w-20 h-20 bg-gradient-to-r from-accent to-accent-light text-white rounded-full flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <i class="fas fa-lightbulb text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-primary">Innovation</h3>
          <p class="text-gray-600 leading-relaxed">
            We embrace new technologies and creative approaches to
            deliver unique and cutting-edge landscape solutions.
          </p>
        </div>

        <!-- Value 3 -->
        <div class="text-center space-y-6 scroll-reveal stagger-child">
          <div class="w-20 h-20 bg-gradient-to-r from-primary to-primary-light text-white rounded-full flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <i class="fas fa-handshake text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-primary">Partnership</h3>
          <p class="text-gray-600 leading-relaxed">
            We build lasting relationships with our clients through
            collaboration, transparency, and exceptional service.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-float"></div>
      <div class="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full animate-float delay-200"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 text-center relative z-10 scroll-reveal">
      <h2 class="text-hero mb-6">{{ $t('about.readyToWork') }}</h2>
      <p class="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
        {{ $t('about.readyToWorkDesc') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button type="button" class="btn btn-secondary">
          <i class="fas fa-calendar mr-2"></i>
          {{ $t('about.scheduleConsultation') }}
        </button>
        <button type="button" class="btn btn-outline">
          <i class="fas fa-phone mr-2"></i>
          {{ $t('about.callNow') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const counter1 = ref(null)
const counter2 = ref(null)

const stats = ref({
  projects: 0,
  satisfaction: 0
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
})
</script>
