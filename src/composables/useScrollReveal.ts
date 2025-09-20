import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(): void {
  let observer: IntersectionObserver | null = null

  const setupScrollReveal = (): void => {
    // 添加 js-enabled 类来启用动画
    document.documentElement.classList.add('js-enabled')

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')

          // Add stagger effect for child elements
          const children = entry.target.querySelectorAll('.stagger-child')
          children.forEach((child: Element, index: number) => {
            setTimeout(() => {
              child.classList.add('revealed')
            }, index * 100)
          })
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-reveal class
    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((el: Element) => {
      observer?.observe(el)
    })
  }

  onMounted(() => {
    setupScrollReveal()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    setupScrollReveal
  }
}
