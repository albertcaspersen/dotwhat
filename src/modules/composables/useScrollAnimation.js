import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

/**
 * Composable for scroll-based animations (blur, fade, translateY)
 * Used across Home, Clients, DomainAcquisitions pages
 * 
 * @param {Object} elementRef - Vue ref to the element to animate
 * @param {Object} config - Animation configuration
 * @param {number} config.maxBlur - Maximum blur amount in pixels (default: 10)
 * @param {number} config.translateYFactor - Multiply scroll by this for translateY (default: 0.13)
 * @param {number} config.fadeStart - Scroll position to start fading (default: 200)
 * @param {number} config.fadeDistance - Distance over which to fade (default: 400)
 * @param {number} config.duration - Animation duration (default: 0.3)
 * @returns {Object} - Object with handleScroll function
 */
export function useScrollAnimation(elementRef, config = {}) {
  const {
    maxBlur = 10,
    translateYFactor = 0.13,
    fadeStart = 200,
    fadeDistance = 400,
    duration = 0.3
  } = config

  const handleScroll = () => {
    if (!elementRef.value) return

    const scrollY = window.scrollY
    const blurAmount = Math.min(scrollY / 50, maxBlur)
    const translateY = scrollY * translateYFactor
    const maxOpacity = 1
    const opacity = Math.max(0, maxOpacity - (Math.max(0, scrollY - fadeStart) / fadeDistance))
    
    gsap.to(elementRef.value, {
      filter: `blur(${blurAmount}px)`,
      y: translateY,
      opacity: opacity,
      duration: duration,
      ease: 'power2.out'
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    handleScroll
  }
}

