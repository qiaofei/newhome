<template>
  <!-- Hero Section -->
  <section class="pt-24 bg-gradient-to-br from-secondary to-primary text-white py-20">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="text-5xl lg:text-6xl font-light mb-6 tracking-wider">
        {{ $t('projects.title') }}
      </h1>
      <div class="w-24 h-1 bg-accent mx-auto mb-8"></div>
      <p class="text-xl text-gray-200 max-w-3xl mx-auto">
        {{ $t('projects.subtitle') }}
      </p>
    </div>
  </section>

  <!-- Filter Section -->
  <section class="py-8 bg-white border-b">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-wrap justify-center gap-4">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          class="px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group"
          :class="activeCategory === category.id
            ? 'bg-gradient-to-r from-primary to-primary-light text-white'
            : 'bg-transparent text-gray-600 hover:text-primary hover:bg-gray-50'"
        >
          <span class="relative z-10">{{ $t(`projects.categories.${category.id}`) }}</span>
          <div
            v-if="activeCategory !== category.id"
            class="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
          ></div>
        </button>
      </div>
    </div>
  </section>

  <!-- Projects Grid -->
  <section class="py-20 bg-light-bg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
          @click="openProject(project)"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="text-white text-center">
                <i class="i-mdi-eye text-3xl mb-2"></i>
                <p class="text-lg font-medium">{{ $t('projects.viewProject') }}</p>
              </div>
            </div>
            <div class="absolute top-4 left-4">
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {{ $t(`projects.items.${project.title}.category`) }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-primary mb-2">{{ $t(`projects.items.${project.title}.title`) }}</h3>
            <p class="text-gray-600 mb-4">{{ $t(`projects.items.${project.description}.description`) }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ project.year }}</span>
              <div class="flex items-center text-secondary font-medium">
                <span class="mr-2">{{ $t('projects.viewProject') }}</span>
                <i class="i-mdi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="btn btn-secondary group">
          <i class="i-mdi-plus mr-2 group-hover:rotate-90 transition-transform duration-300"></i>
          {{ $t('projects.loadMore') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('all')

const categories = [
  { id: 'all' },
  { id: 'residential' },
  { id: 'commercial' },
  { id: 'garden' },
  { id: 'hardscape' }
]

const projects = ref([
  {
    id: 1,
    title: 'modernGarden',
    description: 'modernGarden',
    category: 'residential',
    categoryId: 'residential',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'corporateHQ',
    description: 'corporateHQ',
    category: 'commercial',
    categoryId: 'commercial',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'zenGarden',
    description: 'zenGarden',
    category: 'garden',
    categoryId: 'garden',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'stonePatio',
    description: 'stonePatio',
    category: 'hardscape',
    categoryId: 'hardscape',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'luxuryVilla',
    description: 'luxuryVilla',
    category: 'residential',
    categoryId: 'residential',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'shoppingCenter',
    description: 'shoppingCenter',
    category: 'commercial',
    categoryId: 'commercial',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.categoryId === activeCategory.value)
})

const openProject = (project) => {
  console.log('打开项目:', project.title)
}
</script>
