<template>
    <section class="home grid-item grid-home">
      <h1 class="home-title" ref="titleRef">
        <span class="line-wrapper"><span class="line" ref="line1">Smarter domain</span></span>
        <span class="line-wrapper"><span class="line" ref="line2">strategies that strengthen</span></span>
        <span class="line-wrapper"><span class="line" ref="line3">your digital presence.</span></span>
      </h1>
    </section>
    
    <!-- Description som separat grid item -->
    <section class="home-description grid-item grid-description" ref="descriptionRef">
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
  
  .home-title {
    font-family: 'BeVietnamPro-Bold', sans-serif;
    font-size: 4rem;
    font-weight: 500;
    color: white;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    max-width: 43vw;
    position: fixed;
    overflow: hidden; 
    padding-bottom: 2vh;
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

  .home-description {
    font-family: 'BeVietnamPro-Regular', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.6;
    color: rgb(183, 184, 184);
    max-width: 600px;
    position: fixed;
    top: 50vh;
  }

  .home-description .line-wrapper {
    display: block;
    overflow: hidden;
  }

  .home-description .line {
    display: block;
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

    .home-title {
      font-size: 2.5rem;
      max-width: 90vw;
      position: relative;
    }

    .grid-description {
      grid-column: 1 / 13;
      margin-top: 2rem;
    }

    .home-description {
      font-size: 1.1rem;
      max-width: 90vw;
      position: relative;
      top: auto;
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

    .home-title {
      font-size: 1.75rem;
      max-width: 90vw;
      line-height: 1.3;
      padding-bottom: 1vh;
      position: relative;
    }

    .grid-description {
      grid-column: 1 / 11;
      grid-row: 2;
      margin-top: 20rem;
      margin-bottom: 5.5rem;
      padding: 0 0rem;
    }

    .home-description {
      font-size: 1rem;
      line-height: 1.5;
      max-width: 90vw;
      position: relative;
      top: auto;
    }

    /* Show mobile version, hide desktop */
    .desktop-desc {
      display: none !important;
    }

    .mobile-desc {
      display: block !important;
    }
  }

  /* Specifik til iPhone 15 (393px) */
  @media (max-width: 393px) {
    .home-title {
      font-size: 1.65rem;
      max-width: 85vw;
    }

    .home-description {
      font-size: 0.95rem;
      max-width: 85vw;
    }
  }
  </style>