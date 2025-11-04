<template>
    <section class="home grid-item grid-home">
      <h1 
        ref="titleRef"
        class="font-bevietnam-bold text-[4rem] font-medium text-white leading-[1.2] m-0 p-0 max-w-[43vw] fixed overflow-hidden pb-[2vh] md:text-[2.5rem] md:max-w-[90vw] md:relative max-[430px]:text-[1.75rem] max-[430px]:max-w-[90vw] max-[430px]:leading-[1.3] max-[430px]:pb-[1vh] max-[430px]:relative max-[393px]:text-[1.65rem] max-[393px]:max-w-[85vw]"
      >
        <span class="line-wrapper"><span class="line" ref="line1">Smarter domain</span></span>
        <span class="line-wrapper"><span class="line" ref="line2">strategies that strengthen</span></span>
        <span class="line-wrapper"><span class="line" ref="line3">your digital presence.</span></span>
      </h1>
    </section>
    
    <!-- Description som separat grid item -->
    <section 
      ref="descriptionRef"
      class="grid-item grid-description font-bevietnam text-[1.2rem] font-normal leading-[1.6] text-description-text max-w-[37.5rem] fixed top-[50vh] md:text-[1.1rem] md:max-w-[90vw] md:relative md:top-auto max-[430px]:text-[1rem] max-[430px]:leading-[1.5] max-[430px]:max-w-[90vw] max-[430px]:relative max-[430px]:top-auto max-[393px]:text-[0.95rem] max-[393px]:max-w-[85vw]"
    >
      <!-- Desktop version (3 lines) -->
      <span class="line-wrapper desktop-desc"><span class="line" ref="descLine1">DotWhat is an independent domain consultancy that helps</span></span>
      <span class="line-wrapper desktop-desc"><span class="line" ref="descLine2">companies acquire, sell and optimise their domain</span></span>
      <span class="line-wrapper desktop-desc"><span class="line" ref="descLine3">portfolios for better returns & higher performance.</span></span>
      
      <!-- Mobile version (5 lines) -->
      <span class="line-wrapper mobile-desc"><span class="line" ref="descLine1Mobile">DotWhat is an independent domain</span></span>
      <span class="line-wrapper mobile-desc"><span class="line" ref="descLine2Mobile">consultancy that helps companies</span></span>
      <span class="line-wrapper mobile-desc"><span class="line" ref="descLine3Mobile">acquire, sell and optimise their domain</span></span>
      <span class="line-wrapper mobile-desc"><span class="line" ref="descLine4Mobile">portfolios for better returns &</span></span>
      <span class="line-wrapper mobile-desc"><span class="line" ref="descLine5Mobile">higher performance.</span></span>
    </section>
    
    <!-- Company Logos Karrusel -->
    <CompanyLogos />
  </template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import CompanyLogos from './CompanyLogos.vue'
  
  const titleRef = ref(null)
  const line1 = ref(null)
  const line2 = ref(null)
  const line3 = ref(null) // Tilføjet ref for den tredje linje
  
  // Description refs (desktop - 3 lines)
  const descriptionRef = ref(null)
  const descLine1 = ref(null)
  const descLine2 = ref(null)
  const descLine3 = ref(null)

  // Description refs (mobile - 5 lines)
  const descLine1Mobile = ref(null)
  const descLine2Mobile = ref(null)
  const descLine3Mobile = ref(null)
  const descLine4Mobile = ref(null)
  const descLine5Mobile = ref(null)
  
  const handleScroll = () => {
    if (titleRef.value) {
      const scrollY = window.scrollY
      const maxBlur = 10 // Maximum blur in pixels
      const blurAmount = Math.min(scrollY / 50, maxBlur) // Increase blur as you scroll
      
      // Move text down as user scrolls
      const translateY = scrollY * 0.13 // Move down 30% of scroll distance
      
      // Fade out opacity as user scrolls
      const maxOpacity = 1
      const fadeStart = 200 // Start fading after 200px scroll
      const fadeDistance = 400 // Fade over 300px
      const opacity = Math.max(0, maxOpacity - (Math.max(0, scrollY - fadeStart) / fadeDistance))
      
      gsap.to(titleRef.value, {
        filter: `blur(${blurAmount}px)`,
        y: translateY,
        opacity: opacity,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    // Same scroll animation for description
    if (descriptionRef.value) {
      const scrollY = window.scrollY
      const maxBlur = 10 // Maximum blur in pixels
      const blurAmount = Math.min(scrollY / 50, maxBlur) // Increase blur as you scroll
      
      // Move text down as user scrolls
      const translateY = scrollY * 0.10 // Move down 30% of scroll distance
      
      // Fade out opacity as user scrolls
      const maxOpacity = 1
      const fadeStart = 100 // Start fading after 200px scroll
      const fadeDistance = 400 // Fade over 300px
      const opacity = Math.max(0, maxOpacity - (Math.max(0, scrollY - fadeStart) / fadeDistance))
      
      gsap.to(descriptionRef.value, {
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
    
    // GSAP entrance animation - title reveal
    if (line1.value && line2.value && line3.value) {
      const titleLines = [line1.value, line2.value, line3.value]
      
      // Set initial state for title
      gsap.set(titleLines, {
        y: '100%',
        opacity: 0
      })
      
      // Animate title lines
      gsap.to(titleLines, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2,
        delay: 0.4
      })
    }

    // GSAP entrance animation - description reveal
    const isMobile = window.innerWidth <= 430
    
    if (isMobile && descLine1Mobile.value && descLine2Mobile.value && descLine3Mobile.value && descLine4Mobile.value && descLine5Mobile.value) {
      // Mobile: 5 lines
      const descLines = [descLine1Mobile.value, descLine2Mobile.value, descLine3Mobile.value, descLine4Mobile.value, descLine5Mobile.value]
      
      gsap.set(descLines, {
        y: '100%',
        opacity: 0
      })
      
      gsap.to(descLines, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.15,
        delay: 1.2
      })
    } else if (!isMobile && descLine1.value && descLine2.value && descLine3.value) {
      // Desktop: 3 lines
      const descLines = [descLine1.value, descLine2.value, descLine3.value]
      
      gsap.set(descLines, {
        y: '100%',
        opacity: 0
      })
      
      gsap.to(descLines, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2,
        delay: 1.2
      })
    }
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  .grid-home {
    grid-column: 1 / 13;
    grid-row: 2;
    padding: 0;
    margin-top: 25vh;
    margin-bottom: 27vh;
  }
  
  /* Wrapper for each line to control the reveal */
  .line-wrapper {
    display: block;
    overflow: hidden;
  }
  
  .line {
    display: block;
  }

  .grid-description {
    grid-column: 1 / 13;
    grid-row: 3;
    padding: 0;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  /* Show desktop version by default, hide mobile */
  .desktop-desc {
    display: block !important;
  }

  .mobile-desc {
    display: none !important;
  }
  
  @media (max-width: 768px) {
    .grid-home {
      grid-column: 1 / 13;
      margin-top: 20vh;
      margin-bottom: 20vh;
    }

    .grid-description {
      grid-column: 1 / 13;
      margin-top: 2rem;
    }
  }

  /* iPhone 15 og lignende devices (390-430px) */
  @media (max-width: 430px) {
    .grid-home {
      grid-column: 1 / 13;
      margin-top: 20vh;
      margin-bottom: 15vh;
      padding: 0 0rem;
    }

    .grid-description {
      grid-column: 1 / 11;
      grid-row: 2;
      margin-top: 20rem;
      margin-bottom: 5.5rem;
      padding: 0 0rem;
    }

    /* Show mobile version, hide desktop */
    .desktop-desc {
      display: none !important;
    }

    .mobile-desc {
      display: block !important;
    }
  }
  </style>