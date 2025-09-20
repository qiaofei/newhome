import { defineConfig, type UserConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import presetAttributify from '@unocss/preset-attributify'
import presetTypography from '@unocss/preset-typography'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  content: {
    filesystem: [
      'src/**/*.{vue,js,ts,jsx,tsx}',
      'index.html'
    ]
  },
  presets: [
    presetWind({
      important: true
    }),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      warn: true,
    })
  ],
  theme: {
    colors: {
      'primary': '#065f46',
      'primary-light': '#047857',
      'primary-dark': '#064e3b',
      'secondary': '#10b981',
      'secondary-light': '#34d399',
      'secondary-dark': '#059669',
      'accent': '#f59e0b',
      'accent-light': '#fbbf24',
      'accent-dark': '#d97706',
      'light-bg': '#f8fafc'
    }
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: '#065f46',
        light: '#047857',
        dark: '#064e3b'
      },
      secondary: {
        DEFAULT: '#10b981',
        light: '#34d399',
        dark: '#059669'
      },
      accent: {
        DEFAULT: '#f59e0b',
        light: '#fbbf24',
        dark: '#d97706'
      },
      'light-bg': '#f8fafc'
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif']
    },
    animation: {
      'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
      'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
      'scale-in': 'scaleIn 0.5s ease-out forwards',
      'float': 'float 3s ease-in-out infinite',
      'slide-in-bottom': 'slideInFromBottom 0.8s ease-out forwards',
      'rotate-in': 'rotateIn 0.6s ease-out forwards'
    },
    keyframes: {
      fadeInUp: {
        'from': {
          opacity: '0',
          transform: 'translateY(30px)'
        },
        'to': {
          opacity: '1',
          transform: 'translateY(0)'
        }
      },
      fadeInLeft: {
        'from': {
          opacity: '0',
          transform: 'translateX(-30px)'
        },
        'to': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
      fadeInRight: {
        'from': {
          opacity: '0',
          transform: 'translateX(30px)'
        },
        'to': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
      scaleIn: {
        'from': {
          opacity: '0',
          transform: 'scale(0.9)'
        },
        'to': {
          opacity: '1',
          transform: 'scale(1)'
        }
      },
      float: {
        '0%, 100%': {
          transform: 'translateY(0px)'
        },
        '50%': {
          transform: 'translateY(-10px)'
        }
      },
      slideInFromBottom: {
        'from': {
          opacity: '0',
          transform: 'translateY(100px)'
        },
        'to': {
          opacity: '1',
          transform: 'translateY(0)'
        }
      },
      rotateIn: {
        'from': {
          opacity: '0',
          transform: 'rotate(-10deg) scale(0.9)'
        },
        'to': {
          opacity: '1',
          transform: 'rotate(0deg) scale(1)'
        }
      }
    }
  },
  shortcuts: {
    'btn': 'inline-flex items-center justify-center px-6 py-3 font-medium no-underline rounded-md transition-all duration-300 cursor-pointer border-none relative overflow-hidden',
    'btn-primary': 'btn bg-gradient-to-r from-primary to-primary-light text-white shadow-md hover:shadow-xl hover:-translate-y-0.5',
    'btn-secondary': 'btn bg-gradient-to-r from-secondary to-secondary-light text-white shadow-md hover:shadow-xl hover:-translate-y-0.5',
    'btn-outline': 'btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-lg',
    'card': 'bg-white rounded-xl shadow-md transition-all duration-300 overflow-hidden',
    'card-hover-lift': 'hover:-translate-y-2.5 hover:scale-102 hover:shadow-2xl',
    'text-display': 'text-4xl md:text-6xl font-light leading-tight tracking-tight',
    'text-hero': 'text-2xl md:text-4xl font-normal leading-tight tracking-tight',
    'text-title': 'text-xl md:text-2xl lg:text-4xl font-semibold leading-tight',
    'text-subtitle': 'text-lg md:text-xl font-normal leading-relaxed text-gray-600',
    'gradient-text': 'bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent',
    'glass': 'bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20'
  }
})
