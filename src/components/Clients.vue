<template>
  <div class="clients-header grid-item grid-clients-header" ref="clientsHeaderRef">
    <h1 ref="clientsTitleRef">Our Work Makes a Difference</h1>
  </div>
  <div class="clients-description grid-item grid-clients-description" ref="clientsDescriptionRef">
    <p>
      <span class="line-wrapper"><span class="line" ref="descLine1">Each client we work with has unique requirements from securing new</span></span>
      <span class="line-wrapper"><span class="line" ref="descLine2">domains at competitive rates to streamlining bloated portfolios.</span></span>
      <span class="line-wrapper"><span class="line" ref="descLine3">But the results we achieve improve business performance.</span></span>
    </p>
  </div>
  
  <div class="clients-heading2 grid-item grid-clients-heading2">
    <h2>Each brand is different</h2>
    <p class="clients-subheading">Here's how some of the leading brands we work with describe the value we bring to their business.</p>
  </div>
  
  <!-- Client Cards -->
  <div class="client-card grid-item grid-client-card-1">
    <img src="https://dotwhat.com/wp-content/uploads/2023/11/Welcome-omboard-1-768x768.png" alt="Client 1" class="client-card-image">
    <div class="client-card-content">
      <h3>New client: Philipson Wine</h3>
      <p>Philipson Wine is now a part of Dotwhat. We are thrilled to be managing their domains, and we are committed to providing them with the best possible service. We know…</p>
    </div>
    <div class="read-more">Read more <span class="arrow">→</span></div>
  </div>
  
  <div class="client-card grid-item grid-client-card-2">
    <img src="https://dotwhat.com/wp-content/uploads/2023/10/1697195603309-1024x535.jpeg" alt="Client 2" class="client-card-image">
    <div class="client-card-content">
      <h3>Pedestal.com secured</h3>
      <p>What does your domain name communicate about your brand? Domain Name = Brand = Brand Equity Your domain pre-frames how your customers will view your brand and for Pedestal there was no…</p>
    </div>
    <div class="read-more">Read more <span class="arrow">→</span></div>
  </div>
  
  <div class="client-card grid-item grid-client-card-3">
    <img src="https://dotwhat.com/wp-content/uploads/2015/11/dotwhat_news_ao.jpg" alt="Client 3" class="client-card-image">
    <div class="client-card-content">
      <h3>AO Chooses DotWhat <br> as it's Global Domain <br> Acquisition Partner</h3>
      <p>AO, the UK-based online retail giant is '…on a mission to become a leading European online retailer of electrical products.' To help them achieve their digital ambitions, AO chose DotWhat…</p>
    </div>
    <div class="read-more">Read more <span class="arrow">→</span></div>
  </div>
  
  <div class="client-card grid-item grid-client-card-4">
    <img src="https://dotwhat.com/wp-content/uploads/2015/04/dotwhat_news_alkabello.jpg" alt="Client 4" class="client-card-image">
    <div class="client-card-content">
      <h3>DotWhat helps ALK-Abello slash domain costs by 46%</h3>
      <p>ALK-Abello, a global, research-driven pharmaceutical company, was looking to improve the management of its domain administration across more than 450 domains. For this project, ALK Abello chose to make use…</p>
    </div>
    <div class="read-more">Read more <span class="arrow">→</span></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const clientsHeaderRef = ref(null)
const clientsTitleRef = ref(null)
const clientsDescriptionRef = ref(null)

// Description line refs
const descLine1 = ref(null)
const descLine2 = ref(null)
const descLine3 = ref(null)

const handleScroll = () => {
  // Header scroll animation
  if (clientsHeaderRef.value) {
    const scrollY = window.scrollY
    const maxBlur = 10
    const blurAmount = Math.min(scrollY / 50, maxBlur)
    
    const translateY = scrollY * 0.13
    const maxOpacity = 1
    const fadeStart = 200
    const fadeDistance = 400
    const opacity = Math.max(0, maxOpacity - (Math.max(0, scrollY - fadeStart) / fadeDistance))
    
    gsap.to(clientsHeaderRef.value, {
      filter: `blur(${blurAmount}px)`,
      y: translateY,
      opacity: opacity,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  // Description scroll animation
  if (clientsDescriptionRef.value) {
    const scrollY = window.scrollY
    const maxBlur = 10
    const blurAmount = Math.min(scrollY / 50, maxBlur)
    
    const translateY = scrollY * 0.10
    const maxOpacity = 1
    const fadeStart = 100
    const fadeDistance = 400
    const opacity = Math.max(0, maxOpacity - (Math.max(0, scrollY - fadeStart) / fadeDistance))
    
    gsap.to(clientsDescriptionRef.value, {
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
  if (clientsTitleRef.value) {
    gsap.set(clientsTitleRef.value, {
      y: '100%',
      opacity: 0
    })
    
    gsap.to(clientsTitleRef.value, {
      y: '0%',
      opacity: 1,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.4
    })
  }

  // GSAP entrance animation - description reveal
  if (descLine1.value && descLine2.value && descLine3.value) {
    const descLines = [descLine1.value, descLine2.value, descLine3.value]
    
    // Set initial state for description lines
    gsap.set(descLines, {
      y: '100%',
      opacity: 0
    })
    
    // Animate description lines after title
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
.grid-clients-header {
  grid-column: 1 / 8;
  grid-row: 2;
  margin-top: 39vh;
  margin-bottom: 27vh;
}

.grid-clients-header h1 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 4rem;
  font-weight: 400;
  color: white;
  margin: 0;
  overflow: hidden;
}

.grid-clients-description {
  grid-column: 1 / 6;
  grid-row: 2;
  margin-top: 30rem;
  margin-bottom: 0rem;
}

.grid-clients-description p {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0;
  margin-bottom: 30vh;
}

/* Wrapper for each line to control the reveal */
.line-wrapper {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}

.grid-clients-heading2 {
  grid-column: 1 / 5;
  grid-row: 3;
 
}

.grid-clients-heading2 h2 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: white;
  margin: 0 0 1rem 0;
  margin-top: 19vh;
}

.clients-subheading {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
 
}

/* Client Cards */
.client-card {
  background: rgb(255, 255, 255);
  padding: 0;
  margin-top: 0rem;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  display: flex;
  flex-direction: column;
}

.client-card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  padding: 1.5rem;
}

.client-card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.client-card-content h3 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(0, 0, 0);
  margin: 0 0 1rem 0;
}

.client-card-content p {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 0.95rem;
  color: rgb(0, 0, 0);
  line-height: 1.5;
  margin: 0;
  margin-bottom: 8vh;
}

.read-more {
  position: absolute;
  padding: 1.5rem;
  bottom: 0rem;
  color: rgb(0, 0, 0);
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.arrow {
  display: inline-block;
  margin-left: 0.3rem;
  transform: translateX(-10px);
  opacity: 0;
  transition: all 0.3s ease;
}

.client-card:hover .arrow {
  transform: translateX(0);
  opacity: 1;
}

.grid-client-card-1 {
  grid-column: 9 / 12;
  grid-row: 3;
  margin-top: 20vh;
}

.grid-client-card-2 {
  grid-column: 6 / 9;
  grid-row: 3;
  margin-top: 20vh;
}

.grid-client-card-3 {
    grid-column: 9 / 12;
  grid-row: 4;
}

.grid-client-card-4 {
  grid-column: 6 / 9;
  grid-row: 4;
}

@media (max-width: 768px) {
  .grid-clients-header {
    grid-column: 1 / 5;
    margin-top: 6rem;
  }
  
  .grid-clients-description {
    grid-column: 1 / 5;
  }
  
  .grid-clients-header h1 {
    font-size: 2.5rem;
  }
  
  .grid-client-card-1,
  .grid-client-card-2,
  .grid-client-card-3,
  .grid-client-card-4 {
    grid-column: 1 / 5;
    grid-row: auto;
  }
}
</style>
