import { onMounted } from 'vue'
import { gsap } from 'gsap'

/**
 * Composable for entrance animations (GSAP line reveal)
 * Used across Home, Clients, Content, DomainAcquisitions pages
 * 
 * @param {Array} lineRefs - Array of Vue refs to animate
 * @param {Object} config - Animation configuration
 * @param {number} config.delay - Delay before animation starts (default: 0.4)
 * @param {number} config.duration - Animation duration (default: 1.2)
 * @param {number} config.stagger - Stagger time between lines (default: 0.2)
 * @param {string} config.ease - GSAP easing function (default: 'power4.out')
 * @param {number} config.yStart - Initial Y position (default: '100%')
 * @param {number} config.yEnd - Final Y position (default: '0%')
 * @param {number} config.opacityStart - Initial opacity (default: 0)
 * @param {number} config.opacityEnd - Final opacity (default: 1)
 */
export function useEntranceAnimation(lineRefs, config = {}) {
  const {
    delay = 0.4,
    duration = 1.2,
    stagger = 0.2,
    ease = 'power4.out',
    yStart = '100%',
    yEnd = '0%',
    opacityStart = 0,
    opacityEnd = 1
  } = config

  onMounted(() => {
    // Filter out null refs and get the actual DOM elements
    const elements = lineRefs
      .map(ref => ref.value)
      .filter(el => el !== null && el !== undefined)

    if (elements.length === 0) return

    // Set initial state
    gsap.set(elements, {
      y: yStart,
      opacity: opacityStart
    })
    
    // Animate to final state
    gsap.to(elements, {
      y: yEnd,
      opacity: opacityEnd,
      duration: duration,
      ease: ease,
      stagger: stagger,
      delay: delay
    })
  })
}

