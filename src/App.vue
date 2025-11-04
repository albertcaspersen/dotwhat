<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import SplashScreen from './components/SplashScreen.vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import ContactButton from './components/ContactButton.vue'
import Home from './components/Home.vue'
import glass from './components/glass.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import thylanderVideo from './assets/pics/thylander_hero.mp4'
import { gsap } from 'gsap'

const route = useRoute()
const isLoading = ref(false) // Set to false to skip splash screen
const videoRef = ref(null)

const isFaqPage = computed(() => {
  return route.path.startsWith('/faq')
})

const isContactPage = computed(() => {
  return route.path.startsWith('/contact')
})

const isServicesPage = computed(() => {
  return route.path === '/services' || route.path === '/services/'
})

const isDomainAcquisitionsPage = computed(() => {
  return route.path.startsWith('/services/domain-acquisitions')
})

const isClientsPage = computed(() => {
  return route.path.startsWith('/clients')
})

const isTermsPage = computed(() => {
  return route.path.startsWith('/terms-of-use')
})

const isNewsPage = computed(() => {
  return route.path.startsWith('/news')
})

const isPrivacyPage = computed(() => {
  return route.path.startsWith('/privacy-policy')
})

const onAnimationComplete = () => {
  isLoading.value = false
}

const handleScroll = () => {
  // Ignorer scroll på contact og news siden - video skal ikke reagere
  if (isContactPage.value || isNewsPage.value) {
    return
  }
  
  if (videoRef.value) {
    const scrollY = window.scrollY
    const fadeStart = 200 // Start fading after 200px scroll
    const fadeDistance = 400 // Fade over 400px
    const opacity = Math.max(0, 1 - (Math.max(0, scrollY - fadeStart) / fadeDistance))
    
    gsap.to(videoRef.value, {
      opacity: opacity,
      duration: 0.4,
      ease: 'power2.out'
    })
  }
}

// Watch for domain acquisitions page changes
watch([isDomainAcquisitionsPage], ([isDomainAcq]) => {
  if (videoRef.value && isDomainAcq) {
    // På Domain Acquisitions siden, lad scroll håndtere video opacity
    handleScroll()
  }
}, { immediate: true })

// Watch for route changes og sæt video opacity korrekt
watch([isContactPage, isClientsPage, isFaqPage, isNewsPage], ([isContact, isClients, isFaq, isNews]) => {
  if (videoRef.value) {
    if (isContact) {
      // Når man navigerer til contact siden, sæt video til afdæmpet
      gsap.to(videoRef.value, {
        opacity: 0.3,
        duration: 0.4,
        ease: 'power2.out'
      })
    } else if (isNews) {
      // På news siden, sæt video til fuld opacity og behold den
      gsap.to(videoRef.value, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    } else if (isFaq) {
      // På FAQ siden, sæt video tilbage til normal opacity og lad scroll håndtere det
      gsap.to(videoRef.value, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => {
          handleScroll()
        }
      })
    } else if (isClients) {
      // På clients siden, lad scroll håndtere video opacity
      handleScroll()
    } else {
      // Når man navigerer væk fra contact eller clients (til home), genberegn opacity baseret på scroll position
      handleScroll()
    }
  }
}, { immediate: true })

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Sæt initial video opacity baseret på route
  if (videoRef.value) {
    if (isContactPage.value) {
      gsap.set(videoRef.value, { opacity: 0.3 })
    } else if (isNewsPage.value) {
      gsap.set(videoRef.value, { opacity: 1 })
    } else if (isFaqPage.value) {
      gsap.set(videoRef.value, { opacity: 1 })
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <SplashScreen v-if="isLoading" @completed="onAnimationComplete" />
  
  <div id="app" v-else>
    <video 
      v-if="(!isServicesPage && !isTermsPage && !isPrivacyPage) || isDomainAcquisitionsPage"
      class="background-video" 
      :class="{ 'video-dimmed': isContactPage }"
      ref="videoRef" 
      autoplay 
      loop 
      playsinline 
      muted
    >
      <source :src="thylanderVideo" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    
    <!-- Solid background that shows when video fades -->
    <div class="background-color"></div>
    
    <!-- Fixed Header Grid -->
    <div class="header-container">
      <Header />
      <Navbar />
      <ContactButton />
    </div>

    <!-- Fixed Contact Button for Mobile (outside header-container) -->
    <div class="mobile-contact-wrapper">
      <ContactButton />
    </div>
    
    <!-- Main Content Grid -->
    <div class="container">
      <router-view />
      
      <!-- Home page components (only show on home route) -->
      <template v-if="!$route.path.startsWith('/contact') && !$route.path.startsWith('/faq') && !$route.path.startsWith('/services') && !$route.path.startsWith('/clients') && !$route.path.startsWith('/terms-of-use') && !$route.path.startsWith('/news') && !$route.path.startsWith('/privacy-policy')">
        <Home />
        <glass />
        <Content />
      </template>
    </div>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
#app {
  position: relative;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.background-video.video-dimmed {
  opacity: 0.3; /* Afdæmpet video på contact siden */
}

.background-color {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #111527;
  /*background-color: rgb(222, 71, 1);*/
  z-index: -2;
}

/* Fixed Header Grid */
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: 0 60px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 2rem 0;
}

/* Mobile Contact Wrapper - hidden by default */
.mobile-contact-wrapper {
  display: none;
}

</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

/* 12 Column Grid System */
.container {
  margin: 0 60px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  gap: 20px;
}


/* Responsive grid - Keep 12 columns on all screen sizes */
@media (max-width: 768px) {
  .container {
    margin: 0 20px;
    grid-template-columns: repeat(12, 1fr);
    gap: 15px;
  }
  
  .header-container {
    margin: 0 20px;
    gap: 15px;
  }
}

/* iPhone 15 and similar devices */
@media (max-width: 430px) {
  .container {
    margin: 0 15px;
    gap: 10px;
    padding-bottom: 100px; /* Add padding for fixed Contact button at bottom */
  }
  
  .header-container {
    margin: 0 15px;
    gap: 10px;
  }

  /* Hide ContactButton in header, show in mobile wrapper */
  .header-container .contact-button {
    display: none !important;
  }

  .mobile-contact-wrapper {
    display: block !important;
    position: fixed !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 100vw !important;
    z-index: 1400 !important;
  }
}
</style>