<template>
  <!-- Hero Section -->
  <section class="pt-24 bg-white py-20">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <div class="space-y-6">
        <p class="text-secondary font-medium text-lg">{{ $t('contact.subtitle') }}</p>
        <h1 class="text-4xl lg:text-5xl font-light text-primary">
          {{ $t('contact.title') }}
        </h1>
        <div class="w-24 h-1 bg-accent mx-auto"></div>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          {{ $t('contact.description') }}
        </p>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="py-20 bg-light-bg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Address -->
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white p-3 rounded-full">
                <i class="i-mdi-map-marker text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-primary mb-2">{{ $t('contact.address') }}</h3>
                <p class="text-gray-600">
                  3636 S Nogales St, West Covina, CA 91792
                </p>
              </div>
            </div>
          </div>

          <!-- Phone -->
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-start space-x-4">
              <div class="bg-secondary text-white p-3 rounded-full">
                <i class="i-mdi-phone text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-primary mb-2">{{ $t('contact.phone') }}</h3>
                <p class="text-gray-600">Kevin Zhao 626-278-8652</p>
                <p class="text-gray-600">Ferris Qin： 909-999-1856</p>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-start space-x-4">
              <div class="bg-accent text-white p-3 rounded-full">
                <i class="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-primary mb-2">{{ $t('contact.email') }}</h3>
                <p class="text-gray-600">contact@newhomedesignmanagement.com</p>
              </div>
            </div>
          </div>

          <!-- Hours -->
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white p-3 rounded-full">
                <i class="fas fa-clock text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-primary mb-2">
                  {{ $t('contact.businessHours') }}
                </h3>
                <p class="text-gray-600">{{ $t('contact.weekdays') }}</p>
                <p class="text-gray-600">{{ $t('contact.weekends') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-primary mb-6">
            {{ $t('contact.form.title') }}
          </h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >{{ $t('contact.form.name') }} *</label
                >
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  :placeholder="$t('contact.form.namePlaceholder')"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >{{ $t('contact.form.phone') }} *</label
                >
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  :placeholder="$t('contact.form.phonePlaceholder')"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >{{ $t('contact.form.email') }}</label
              >
              <input
                v-model="form.email"
                type="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                :placeholder="$t('contact.form.emailPlaceholder')"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >{{ $t('contact.form.projectType') }}</label
              >
              <select
                v-model="form.projectType"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              >
                <option value="">{{ $t('contact.form.selectProjectType') }}</option>
                <option value="residential">{{ $t('contact.form.residential') }}</option>
                <option value="commercial">{{ $t('contact.form.commercial') }}</option>
                <option value="landscape">{{ $t('contact.form.landscape') }}</option>
                <option value="renovation">{{ $t('contact.form.renovation') }}</option>
                <option value="consultation">{{ $t('contact.form.consultation') }}</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >{{ $t('contact.form.projectDescription') }} *</label
              >
              <textarea
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                :placeholder="$t('contact.form.projectDescriptionPlaceholder')"
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-primary w-full"
              :disabled="isSubmitting"
            >
              <i class="fas fa-paper-plane mr-2"></i>
              {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.submit') }}
            </button>
          </form>
        </div>
      </div>

      <!-- 联系信息 -->
      <div class="space-y-8 scroll-reveal">
        <div class="card p-8">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">{{ $t('contact.contactMethods') }}</h2>
          <div class="space-y-6">
            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
              >
                <i class="i-mdi-email text-primary text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">{{ $t('contact.email') }}</h3>
                <p class="text-gray-600">contact@newhomedesignmanagement.com</p>
              </div>
            </div>

            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
              >
                <i class="i-mdi-phone text-secondary text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">{{ $t('contact.phone') }}</h3>
                <p class="text-gray-600">Kevin Zhao: 626-278-8652</p>
                <p class="text-gray-600">Ferris Qin: 909-999-1856</p>
              </div>
            </div>

            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
              >
                <i class="i-mdi-map-marker text-accent text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">{{ $t('contact.address') }}</h3>
                <p class="text-gray-600">
                  3636 S Nogales St<br />West Covina, CA 91792
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
              >
                <i class="fas fa-clock text-primary-light text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">{{ $t('contact.businessHours') }}</h3>
                <p class="text-gray-600">{{ $t('contact.weekdays') }}</p>
                <p class="text-gray-600">{{ $t('contact.weekends') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 服务区域 -->
        <div class="card p-8">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">{{ $t('contact.serviceAreas') }}</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center">
              <span class="text-secondary mr-2">📍</span>
              <span class="text-gray-600">West Covina, CA</span>
            </div>
            <div class="flex items-center">
              <span class="text-secondary mr-2">📍</span>
              <span class="text-gray-600">Los Angeles County</span>
            </div>
            <div class="flex items-center">
              <span class="text-secondary mr-2">📍</span>
              <span class="text-gray-600">San Gabriel Valley</span>
            </div>
            <div class="flex items-center">
              <span class="text-secondary mr-2">📍</span>
              <span class="text-gray-600">Orange County</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isSubmitting = ref(false);

const form = ref({
  name: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
});

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // 这里可以添加表单提交逻辑
    console.log("表单数据:", form.value);

    // 模拟API调用
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 重置表单
    form.value = {
      name: "",
      phone: "",
      email: "",
      projectType: "",
      message: "",
    };

    alert("消息发送成功！我们会尽快与您联系。");
  } catch (error) {
    console.error("发送失败:", error);
    alert("发送失败，请稍后重试。");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
