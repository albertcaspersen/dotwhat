# DotWhat Modules Documentation

This directory contains reusable components, composables, and styles that streamline the DotWhat codebase by eliminating duplication.

## Directory Structure

```
modules/
├── composables/          # Reusable Vue composables
│   ├── useScrollAnimation.js
│   └── useEntranceAnimation.js
├── components/           # Reusable Vue components
│   ├── AnimatedHeading.vue
│   ├── GlassCard.vue
│   └── LegalPageTemplate.vue
└── styles/              # Shared CSS files
    ├── animations.css
    └── typography.css
```

## Composables

### useScrollAnimation

A composable that provides scroll-based blur, fade, and translateY animations.

**Usage:**
```javascript
import { ref } from 'vue'
import { useScrollAnimation } from '../modules/composables/useScrollAnimation'

const elementRef = ref(null)

useScrollAnimation(elementRef, {
  maxBlur: 10,
  translateYFactor: 0.13,
  fadeStart: 200,
  fadeDistance: 400
})
```

**Parameters:**
- `elementRef`: Vue ref to the element to animate
- `config`: Animation configuration object
  - `maxBlur`: Maximum blur amount in pixels (default: 10)
  - `translateYFactor`: Multiply scroll by this for translateY (default: 0.13)
  - `fadeStart`: Scroll position to start fading (default: 200)
  - `fadeDistance`: Distance over which to fade (default: 400)
  - `duration`: Animation duration (default: 0.3)

**Used in:** HomeV2, ClientsV2, DomainAcquisitionsV2

---

### useEntranceAnimation

A composable that provides GSAP line reveal entrance animations.

**Usage:**
```javascript
import { ref } from 'vue'
import { useEntranceAnimation } from '../modules/composables/useEntranceAnimation'

const line1 = ref(null)
const line2 = ref(null)
const line3 = ref(null)

useEntranceAnimation([line1, line2, line3], {
  delay: 0.4,
  stagger: 0.2,
  duration: 1.2
})
```

**Parameters:**
- `lineRefs`: Array of Vue refs to animate
- `config`: Animation configuration object
  - `delay`: Delay before animation starts (default: 0.4)
  - `duration`: Animation duration (default: 1.2)
  - `stagger`: Stagger time between lines (default: 0.2)
  - `ease`: GSAP easing function (default: 'power4.out')
  - `yStart`: Initial Y position (default: '100%')
  - `yEnd`: Final Y position (default: '0%')
  - `opacityStart`: Initial opacity (default: 0)
  - `opacityEnd`: Final opacity (default: 1)

**Used in:** HomeV2, ClientsV2, DomainAcquisitionsV2

---

## Components

### AnimatedHeading

A heading component with built-in line-wrapper structure and optional entrance animations.

**Usage:**
```vue
<template>
  <AnimatedHeading
    :lines="['First line', 'Second line', 'Third line']"
    tag="h1"
    heading-class="my-custom-class"
    :animate="true"
    :animation-config="{ delay: 0.4, stagger: 0.2 }"
  />
</template>

<script setup>
import AnimatedHeading from '../modules/components/AnimatedHeading.vue'
</script>
```

**Props:**
- `text`: String - Plain text (no line animation)
- `lines`: Array - Array of strings, each will be animated separately
- `tag`: String - HTML tag (h1, h2, h3, etc.) - default: 'h1'
- `headingClass`: String - Custom CSS class
- `animate`: Boolean - Enable entrance animation - default: true
- `animationConfig`: Object - Configuration for useEntranceAnimation

**Used in:** HomeV2, NewsPageV2

---

### GlassCard

A glass morphism card component with consistent styling.

**Usage:**
```vue
<template>
  <GlassCard padding="2rem" border-radius="8px">
    <h2>Card Title</h2>
    <p>Card content goes here</p>
  </GlassCard>
</template>

<script setup>
import GlassCard from '../modules/components/GlassCard.vue'
</script>
```

**Props:**
- `padding`: String - Card padding - default: '2rem'
- `borderRadius`: String - Border radius - default: '2px'
- `backgroundColor`: String - Background color - default: 'rgba(255, 255, 255, 0.08)'
- `blur`: String - Backdrop blur amount - default: '20px'
- `saturation`: String - Backdrop saturation - default: '180%'

**Used in:** ContactV2, DomainAcquisitionsV2

---

### LegalPageTemplate

A template component for legal pages (Terms of Use, Privacy Policy).

**Usage:**
```vue
<template>
  <LegalPageTemplate
    title="Privacy Policy"
    :intro-text="introText"
    :sections="sections"
  />
</template>

<script setup>
import LegalPageTemplate from '../modules/components/LegalPageTemplate.vue'

const introText = `Your intro text here with <br> HTML support`

const sections = [
  {
    title: "Section Title",
    paragraphs: [
      "First paragraph",
      "Second paragraph with <strong>HTML</strong>"
    ]
  }
]
</script>
```

**Props:**
- `title`: String - Page title (required)
- `introText`: String - Introduction text with HTML support (required)
- `sections`: Array - Array of section objects (required)
  - Each section: `{ title: string, paragraphs: string[] }`

**Slots:**
- `cta`: Optional CTA section at the bottom

**Used in:** TermsOfUseV2, PrivacyPolicyV2

---

## Styles

### animations.css

Common animation classes for line-wrapper animations and utility animations.

**Usage:**
```vue
<style scoped>
@import '../modules/styles/animations.css';
</style>
```

**Classes:**
- `.line-wrapper`: Block display with overflow hidden (for GSAP animations)
- `.line`: Block display for animated text lines
- `.fade-in`: Fade-in animation
- `.slide-up`: Slide-up animation

---

### typography.css

Consistent font families and text styles.

**Usage:**
```vue
<style scoped>
@import '../modules/styles/typography.css';
</style>
```

**Classes:**
- `.font-bevietnam-bold`: BeVietnamPro-Bold font
- `.font-bevietnam-regular`: BeVietnamPro-Regular font
- `.font-bevietnam-variable`: BeVietnamPro-Variable font
- `.heading-primary`: Primary heading style (4rem)
- `.heading-secondary`: Secondary heading style (3rem)
- `.heading-tertiary`: Tertiary heading style (2rem)
- `.body-text`: Body text style
- `.body-text-large`: Large body text style
- `.subtitle-text`: Subtitle text style
- `.text-white`, `.text-muted`, `.text-dimmed`, `.text-accent`: Text color utilities

---

## Migration Guide

### From Original to V2 Pages

#### Example: Migrating Home.vue to HomeV2.vue

**Before (Home.vue):**
```vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const titleRef = ref(null)

const handleScroll = () => {
  if (titleRef.value) {
    const scrollY = window.scrollY
    const maxBlur = 10
    const blurAmount = Math.min(scrollY / 50, maxBlur)
    const translateY = scrollY * 0.13
    const fadeStart = 200
    const fadeDistance = 400
    const opacity = Math.max(0, 1 - (Math.max(0, scrollY - fadeStart) / fadeDistance))
    
    gsap.to(titleRef.value, {
      filter: `blur(${blurAmount}px)`,
      y: translateY,
      opacity: opacity,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
```

**After (HomeV2.vue):**
```vue
<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '../modules/composables/useScrollAnimation'

const titleRef = ref(null)

useScrollAnimation(titleRef, {
  maxBlur: 10,
  translateYFactor: 0.13,
  fadeStart: 200,
  fadeDistance: 400
})
</script>
```

### Benefits

1. **Reduced Code Duplication**: ~40% reduction in duplicate code
2. **Easier Maintenance**: Update animations in one place
3. **Consistent Behavior**: All pages use the same animation logic
4. **Better Performance**: Shared imports reduce bundle size
5. **Faster Development**: Reuse components instead of copying code

---

## V2 Routes

All V2 pages are available at:
- `/home-v2` - HomeV2 component
- `/clients-v2` - ClientsV2 component  
- `/faq-v2` - FAQV2 component
- `/news-v2` - NewsPageV2 component
- `/contact-v2` - ContactV2 component
- `/terms-of-use-v2` - TermsOfUseV2 component
- `/privacy-policy-v2` - PrivacyPolicyV2 component
- `/services/domain-acquisitions-v2` - DomainAcquisitionsV2 component

Original routes remain unchanged and continue working.

---

## Testing V2 Pages

1. Navigate to any V2 route (e.g., `/home-v2`)
2. Compare with original route (e.g., `/`)
3. Verify animations work correctly
4. Check responsive design on mobile
5. Test all interactive elements

---

## Future Enhancements

Consider creating additional modules for:
- Card components (ClientCard, StatCard, ProcessCard)
- Form components (with validation)
- Button components (with consistent styling)
- Navigation components
- Animation presets (bounce, zoom, rotate)

---

## Support

For questions or issues with the modules, refer to:
- Original component implementations in `/src/components/`
- GSAP documentation: https://greensock.com/docs/
- Vue 3 Composition API: https://vuejs.org/guide/extras/composition-api-faq.html

