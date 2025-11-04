<template>
  <div class="content-section grid-item grid-content">
    <p class="eyebrow-text">Our Work Makes a Difference</p>
    <h1 class="external-heading" ref="externalHeadingRef">
      <!-- Desktop version (6 lines) -->
      <span class="line-wrapper desktop-ext"><span class="line" ref="externalLine1">Each client we work with has unique</span></span>
      <span class="line-wrapper desktop-ext"><span class="line" ref="externalLine2">requirements from securing new</span></span>
      <span class="line-wrapper desktop-ext"><span class="line" ref="externalLine3">domains at competitive rates to</span></span>
      <span class="line-wrapper desktop-ext"><span class="line" ref="externalLine4">streamlining bloated portfolios</span></span>
      <span class="line-wrapper desktop-ext"><span class="line" ref="externalLine5">But the results we achieve improve </span></span>
      <span class="line-wrapper desktop-ext"><span class="line" ref="externalLine6">business performance.</span></span>
      
      <!-- Mobile version (8 lines - better breaks) -->
      <span class="line-wrapper mobile-ext"><span class="line" ref="externalLine1Mobile">Each client we work with has</span></span>
      <span class="line-wrapper mobile-ext"><span class="line" ref="externalLine2Mobile">unique requirements from</span></span>
      <span class="line-wrapper mobile-ext"><span class="line" ref="externalLine3Mobile">securing new domains at</span></span>
      <span class="line-wrapper mobile-ext"><span class="line" ref="externalLine4Mobile">competitive rates to</span></span>
      <span class="line-wrapper mobile-ext"><span class="line" ref="externalLine5Mobile">streamlining bloated</span></span>
      <span class="line-wrapper mobile-ext"><span class="line" ref="externalLine6Mobile">portfolios. But the results we</span></span>
      <span class="line-wrapper mobile-ext"><span class="line" ref="externalLine7Mobile">achieve improve business</span></span>
      <span class="line-wrapper mobile-ext"><span class="line" ref="externalLine8Mobile">performance.</span></span>
      
    </h1>
  </div>
  <div class="content-image grid-item grid-image" ref="imageContainer">
    <img src="https://images.unsplash.com/photo-1480944657103-7fed22359e1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3432" alt="Business image" class="business-image" />
  </div>
  <div class="content-section2 grid-item grid-content2">
    <h1 class="heading2" ref="heading2Ref">
      <!-- Desktop version (6 lines) -->
      <span class="line-wrapper desktop-h2"><span class="line" ref="heading2Line1">"Based on what we told DotWhat about our</span></span>
      <span class="line-wrapper desktop-h2"><span class="line" ref="heading2Line2">specific needs and requirements, DotWhat</span></span>
      <span class="line-wrapper desktop-h2"><span class="line" ref="heading2Line3"> was able to recommend two providers that</span></span>
      <span class="line-wrapper desktop-h2"><span class="line" ref="heading2Line4">completely matched what we were looking for.</span></span>
      <span class="line-wrapper desktop-h2"><span class="line" ref="heading2Line5">In the end, we got a better service deal and a</span></span>
      <span class="line-wrapper desktop-h2"><span class="line" ref="heading2Line6">46% annual cost reduction"</span></span>
      
      <!-- Mobile version (8 lines - better breaks) -->
      <span class="line-wrapper mobile-h2"><span class="line" ref="heading2Line1Mobile">"Based on what we told DotWhat about</span></span>
      <span class="line-wrapper mobile-h2"><span class="line" ref="heading2Line2Mobile">our specific needs and requirements,</span></span>
      <span class="line-wrapper mobile-h2"><span class="line" ref="heading2Line3Mobile">DotWhat was able to recommend</span></span>
      <span class="line-wrapper mobile-h2"><span class="line" ref="heading2Line4Mobile">two providers that completely</span></span>
      <span class="line-wrapper mobile-h2"><span class="line" ref="heading2Line5Mobile">matched what we were looking for.</span></span>
      <span class="line-wrapper mobile-h2"><span class="line" ref="heading2Line6Mobile">In the end, we got a better service</span></span>
      <span class="line-wrapper mobile-h2"><span class="line" ref="heading2Line7Mobile">deal and a 46% annual cost reduction"</span></span>
      <span class="line-wrapper mobile-h2"><span class="line" ref="heading2Line8Mobile"></span></span>
    </h1>
    <p class="quote-author" ref="quoteAuthorRef">
      <span class="line-wrapper"><span class="line" ref="quoteAuthorLine1">Tobias Dilling, ALK Abello</span></span>
    </p>
  </div>
  <div class="content-section3 grid-item grid-content3">
    <p class="eyebrow-text-2">Trusted by global innovators</p>
    <h1 class="heading3" ref="heading3Ref">
        <!-- Desktop version (4 lines) -->
        <span class="line-wrapper desktop-h3"><span class="line" ref="heading3Line1">Market leaders invest in digital</span></span>
        <span class="line-wrapper desktop-h3"><span class="line" ref="heading3Line2">certainty. We provide the</span></span>
        <span class="line-wrapper desktop-h3"><span class="line" ref="heading3Line3">foundation to scale, reduce</span></span>
        <span class="line-wrapper desktop-h3"><span class="line" ref="heading3Line3b">risk, and protect brand equity</span></span>

        <!-- Mobile version (5 lines - better breaks) -->
        <span class="line-wrapper mobile-h3"><span class="line" ref="heading3Line1Mobile">Market leaders invest in</span></span>
        <span class="line-wrapper mobile-h3"><span class="line" ref="heading3Line2Mobile">digital certainty. We provide</span></span>
        <span class="line-wrapper mobile-h3"><span class="line" ref="heading3Line3Mobile">the foundation to scale,</span></span>
        <span class="line-wrapper mobile-h3"><span class="line" ref="heading3Line4Mobile">reduce risk, and protect</span></span>
        <span class="line-wrapper mobile-h3"><span class="line" ref="heading3Line5Mobile">brand equity</span></span>

    </h1>
  </div>
  <div class="content-image2 grid-item grid-image2" ref="imageContainer2">
    <img src="https://www.shutterstock.com/image-photo/portrait-confident-businesswoman-leader-her-600nw-2611384659.jpg" alt="Businesswoman in office" class="business-image2" />
  </div>
  
  <!-- News Section -->
  <News />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import News from './News.vue'

const imageContainer = ref(null)
const imageContainer2 = ref(null)

// Content heading refs (desktop - 6 lines)
const externalHeadingRef = ref(null)
const externalLine1 = ref(null)
const externalLine2 = ref(null)
const externalLine3 = ref(null)
const externalLine4 = ref(null)
const externalLine5 = ref(null)
const externalLine6 = ref(null)

// Content heading refs (mobile - 8 lines)
const externalLine1Mobile = ref(null)
const externalLine2Mobile = ref(null)
const externalLine3Mobile = ref(null)
const externalLine4Mobile = ref(null)
const externalLine5Mobile = ref(null)
const externalLine6Mobile = ref(null)
const externalLine7Mobile = ref(null)
const externalLine8Mobile = ref(null)

// Heading2 refs (desktop - 6 lines)
const heading2Ref = ref(null)
const heading2Line1 = ref(null)
const heading2Line2 = ref(null)
const heading2Line3 = ref(null)
const heading2Line4 = ref(null)
const heading2Line5 = ref(null)
const heading2Line6 = ref(null)

// Heading2 refs (mobile - 8 lines)
const heading2Line1Mobile = ref(null)
const heading2Line2Mobile = ref(null)
const heading2Line3Mobile = ref(null)
const heading2Line4Mobile = ref(null)
const heading2Line5Mobile = ref(null)
const heading2Line6Mobile = ref(null)
const heading2Line7Mobile = ref(null)
const heading2Line8Mobile = ref(null)

const quoteAuthorRef = ref(null)
const quoteAuthorLine1 = ref(null)

// Heading3 refs (desktop - 4 lines)
const heading3Ref = ref(null)
const heading3Line1 = ref(null)
const heading3Line2 = ref(null)
const heading3Line3 = ref(null)
const heading3Line3b = ref(null)
const heading3Line4 = ref(null)
const heading3Line5 = ref(null)

// Heading3 refs (mobile - 5 lines)
const heading3Line1Mobile = ref(null)
const heading3Line2Mobile = ref(null)
const heading3Line3Mobile = ref(null)
const heading3Line4Mobile = ref(null)
const heading3Line5Mobile = ref(null)

// Samme effekt som dine 5 kort
const intensity = 25; // Lavere tal = mere bevægelse
const scale = 1.2;  // Lidt mere zoom for at undgå kanter

const handleScroll = () => {
  const viewportCenterY = window.innerHeight / 2;

  if (imageContainer.value) {
    const img = imageContainer.value.querySelector('.business-image');
    if (!img) return;

    const rect = imageContainer.value.getBoundingClientRect();
    const imageCenterY = rect.top + rect.height / 2;
    const diff = viewportCenterY - imageCenterY;
    
    const move = diff / intensity;
    
    img.style.transform = `scale(${scale}) translateY(${move}px)`;
  }

  // Second image parallax effect
  if (imageContainer2.value) {
    const img = imageContainer2.value.querySelector('.business-image2');
    if (!img) return;

    const rect = imageContainer2.value.getBoundingClientRect();
    const imageCenterY = rect.top + rect.height / 2;
    const diff = viewportCenterY - imageCenterY;
    
    const move = diff / intensity;
    
    img.style.transform = `scale(${scale}) translateY(${move}px)`;
  }

  // External heading scroll animation
  const isMobile = window.innerWidth <= 430
  
  if (isMobile && externalHeadingRef.value && externalLine1Mobile.value && externalLine2Mobile.value && externalLine3Mobile.value && externalLine4Mobile.value && externalLine5Mobile.value && externalLine6Mobile.value && externalLine7Mobile.value && externalLine8Mobile.value) {
    // Mobile: 8 lines
    const rect = externalHeadingRef.value.getBoundingClientRect();
    const elementTop = rect.top;
    const elementHeight = rect.height;
    const triggerPoint = window.innerHeight * 0.8;
    
    if (elementTop < triggerPoint && elementTop + elementHeight > 0) {
      const externalLines = [externalLine1Mobile.value, externalLine2Mobile.value, externalLine3Mobile.value, externalLine4Mobile.value, externalLine5Mobile.value, externalLine6Mobile.value, externalLine7Mobile.value, externalLine8Mobile.value]
      
      gsap.to(externalLines, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.12
      })
    }
  } else if (!isMobile && externalHeadingRef.value && externalLine1.value && externalLine2.value && externalLine3.value && externalLine4.value && externalLine5.value && externalLine6.value) {
    // Desktop: 6 lines
    const rect = externalHeadingRef.value.getBoundingClientRect();
    const elementTop = rect.top;
    const elementHeight = rect.height;
    const triggerPoint = window.innerHeight * 0.8;
    
    if (elementTop < triggerPoint && elementTop + elementHeight > 0) {
      const externalLines = [externalLine1.value, externalLine2.value, externalLine3.value, externalLine4.value, externalLine5.value, externalLine6.value]
      
      gsap.to(externalLines, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      })
    }
  }

  // Heading2 scroll animation
  if (isMobile && heading2Ref.value && heading2Line1Mobile.value && heading2Line2Mobile.value && heading2Line3Mobile.value && heading2Line4Mobile.value && heading2Line5Mobile.value && heading2Line6Mobile.value && heading2Line7Mobile.value && heading2Line8Mobile.value) {
    // Mobile: 8 lines
    const rect = heading2Ref.value.getBoundingClientRect();
    const elementTop = rect.top;
    const elementHeight = rect.height;
    const triggerPoint = window.innerHeight * 0.8;
    
    if (elementTop < triggerPoint && elementTop + elementHeight > 0) {
      const heading2Lines = [heading2Line1Mobile.value, heading2Line2Mobile.value, heading2Line3Mobile.value, heading2Line4Mobile.value, heading2Line5Mobile.value, heading2Line6Mobile.value, heading2Line7Mobile.value, heading2Line8Mobile.value]
      
      gsap.to(heading2Lines, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.12
      })
    }
  } else if (!isMobile && heading2Ref.value && heading2Line1.value && heading2Line2.value && heading2Line3.value && heading2Line4.value && heading2Line5.value && heading2Line6.value) {
    // Desktop: 6 lines
    const rect = heading2Ref.value.getBoundingClientRect();
    const elementTop = rect.top;
    const elementHeight = rect.height;
    const triggerPoint = window.innerHeight * 0.8;
    
    if (elementTop < triggerPoint && elementTop + elementHeight > 0) {
      const heading2Lines = [heading2Line1.value, heading2Line2.value, heading2Line3.value, heading2Line4.value, heading2Line5.value, heading2Line6.value]
      
      gsap.to(heading2Lines, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      })
    }
  }

  // Quote author scroll animation
  if (quoteAuthorRef.value && quoteAuthorLine1.value) {
    const rect = quoteAuthorRef.value.getBoundingClientRect();
    const elementTop = rect.top;
    const elementHeight = rect.height;
    const triggerPoint = window.innerHeight * 0.8; // Trigger when 80% visible
    
    if (elementTop < triggerPoint && elementTop + elementHeight > 0) {
      const quoteAuthorLines = [quoteAuthorLine1.value]
      
      gsap.to(quoteAuthorLines, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      })
    }
  }

  // Heading3 scroll animation
  if (isMobile && heading3Ref.value && heading3Line1Mobile.value && heading3Line2Mobile.value && heading3Line3Mobile.value && heading3Line4Mobile.value && heading3Line5Mobile.value) {
    // Mobile: 5 lines
    const rect = heading3Ref.value.getBoundingClientRect();
    const elementTop = rect.top;
    const elementHeight = rect.height;
    const triggerPoint = window.innerHeight * 0.8;
    
    if (elementTop < triggerPoint && elementTop + elementHeight > 0) {
      const heading3Lines = [heading3Line1Mobile.value, heading3Line2Mobile.value, heading3Line3Mobile.value, heading3Line4Mobile.value, heading3Line5Mobile.value]
      
      gsap.to(heading3Lines, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.15
      })
    }
  } else if (!isMobile && heading3Ref.value && heading3Line1.value && heading3Line2.value && heading3Line3.value && heading3Line3b.value) {
    // Desktop: 4 lines
    const rect = heading3Ref.value.getBoundingClientRect();
    const elementTop = rect.top;
    const elementHeight = rect.height;
    const triggerPoint = window.innerHeight * 0.8;
    
    if (elementTop < triggerPoint && elementTop + elementHeight > 0) {
      const heading3Lines = [heading3Line1.value, heading3Line2.value, heading3Line3.value, heading3Line3b.value]
      
      gsap.to(heading3Lines, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      })
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); 
  
  // Set initial state for external heading (desktop)
  if (externalLine1.value && externalLine2.value && externalLine3.value && externalLine4.value && externalLine5.value && externalLine6.value) {
    const externalLines = [externalLine1.value, externalLine2.value, externalLine3.value, externalLine4.value, externalLine5.value, externalLine6.value]
    
    gsap.set(externalLines, {
      y: '100%',
      opacity: 0
    })
  }

  // Set initial state for external heading (mobile)
  if (externalLine1Mobile.value && externalLine2Mobile.value && externalLine3Mobile.value && externalLine4Mobile.value && externalLine5Mobile.value && externalLine6Mobile.value && externalLine7Mobile.value && externalLine8Mobile.value) {
    const externalLinesMobile = [externalLine1Mobile.value, externalLine2Mobile.value, externalLine3Mobile.value, externalLine4Mobile.value, externalLine5Mobile.value, externalLine6Mobile.value, externalLine7Mobile.value, externalLine8Mobile.value]
    
    gsap.set(externalLinesMobile, {
      y: '100%',
      opacity: 0
    })
  }
  
  // Set initial state for heading2 (desktop)
  if (heading2Line1.value && heading2Line2.value && heading2Line3.value && heading2Line4.value && heading2Line5.value && heading2Line6.value) {
    const heading2Lines = [heading2Line1.value, heading2Line2.value, heading2Line3.value, heading2Line4.value, heading2Line5.value, heading2Line6.value]
    
    gsap.set(heading2Lines, {
      y: '100%',
      opacity: 0
    })
  }

  // Set initial state for heading2 (mobile)
  if (heading2Line1Mobile.value && heading2Line2Mobile.value && heading2Line3Mobile.value && heading2Line4Mobile.value && heading2Line5Mobile.value && heading2Line6Mobile.value && heading2Line7Mobile.value && heading2Line8Mobile.value) {
    const heading2LinesMobile = [heading2Line1Mobile.value, heading2Line2Mobile.value, heading2Line3Mobile.value, heading2Line4Mobile.value, heading2Line5Mobile.value, heading2Line6Mobile.value, heading2Line7Mobile.value, heading2Line8Mobile.value]
    
    gsap.set(heading2LinesMobile, {
      y: '100%',
      opacity: 0
    })
  }
  
  // Set initial state for quote author
  if (quoteAuthorLine1.value) {
    const quoteAuthorLines = [quoteAuthorLine1.value]
    
    gsap.set(quoteAuthorLines, {
      y: '100%',
      opacity: 0
    })
  }
  
  // Set initial state for heading3 (desktop)
  if (heading3Line1.value && heading3Line2.value && heading3Line3.value && heading3Line3b.value) {
    const heading3Lines = [heading3Line1.value, heading3Line2.value, heading3Line3.value, heading3Line3b.value]
    
    gsap.set(heading3Lines, {
      y: '100%',
      opacity: 0
    })
  }

  // Set initial state for heading3 (mobile)
  if (heading3Line1Mobile.value && heading3Line2Mobile.value && heading3Line3Mobile.value && heading3Line4Mobile.value && heading3Line5Mobile.value) {
    const heading3LinesMobile = [heading3Line1Mobile.value, heading3Line2Mobile.value, heading3Line3Mobile.value, heading3Line4Mobile.value, heading3Line5Mobile.value]
    
    gsap.set(heading3LinesMobile, {
      y: '100%',
      opacity: 0
    })
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>

.grid-content {
  grid-column: 1 / 7;
  grid-row: 4;
  padding: 0;
  margin-top: 25vh;
  margin-bottom: 20vh;
}

.grid-image {
  grid-column: 8 / 12;
  grid-row: 4;
  padding: 0;
  margin-top: 25.3vh;
  margin-bottom: 20vh;
  display: flex;
  height: 55vh;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
}

.grid-content2 {
  grid-column: 3 / 8;
  grid-row: 5;
  padding: 0;
  margin-top: 2vh;
  margin-bottom: 20vh;
}

.grid-content3 {
  grid-column: 2 / 8;
  grid-row: 6;
  padding: 0;
  margin-top: 2.2vh;
 
}

.grid-image2 {
  grid-column: 8 / 12;
  grid-row: 6;
  padding: 0;
  margin-top: 2.4vh;
  margin-bottom: 20vh;
  display: flex;
  height: 40vh;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
}

.business-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2);
  transition: transform 0.2s linear;
}

.business-image2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2);
  transition: transform 0.2s linear;
}

.eyebrow-text {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  color: white;
  font-weight: 100;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  text-transform: uppercase;
  /*letter-spacing: 0.1em;*/
  opacity: 0.8;
  margin-bottom: 4vh;
}

.eyebrow-text-2 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  color: white;
  font-weight: 100;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 2vh;
}

.external-heading {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: 400;
  margin: 0;
  font-size: 3rem;
}

.heading2 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  color: rgb(213, 213, 213);
  font-weight: 400;
  margin: 0;
  font-size: 2rem;
  line-height: 1.3;
  font-style: italic;
}

.quote-author {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: 100;
  margin: 1.5rem 0 0 0;
  font-size: 0.9rem;
  text-align: left;
  opacity: 0.8;
}

/* Quote author line wrapper styling for animations */
.quote-author .line-wrapper {
  display: block;
  overflow: hidden;
}

.quote-author .line {
  display: block;
}

.heading3 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  color: white;
  font-weight: 400;
  margin: 0;
  font-size: 3rem;
  line-height: 1.3;
  margin-top: 3vh;
}

/* Line wrapper styling for animations */
.line-wrapper {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}

/* Show desktop version by default, hide mobile */
.desktop-ext {
  display: block !important;
}

.mobile-ext {
  display: none !important;
}

.desktop-h2 {
  display: block !important;
}

.mobile-h2 {
  display: none !important;
}

.desktop-h3 {
  display: block !important;
}

.mobile-h3 {
  display: none !important;
}

/* Responsive */
@media (max-width: 768px) {
  .grid-content {
    grid-column: 1 / 13;
    grid-row: 11;
    margin-top: 5rem;
    margin-bottom: 3rem;
  }

  .grid-image {
    grid-column: 1 / 13;
    grid-row: 12;
    margin-top: 2rem;
    margin-bottom: 3rem;
    height: 40vh;
  }

  .grid-content2 {
    grid-column: 1 / 13;
    grid-row: 13;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .grid-content3 {
    grid-column: 1 / 13;
    grid-row: 14;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .grid-image2 {
    grid-column: 1 / 13;
    grid-row: 15;
    margin-top: 2rem;
    margin-bottom: 5rem;
    height: 35vh;
  }

  .eyebrow-text {
    font-size: 0.9rem;
    margin-bottom: 2vh;
  }

  .eyebrow-text-2 {
    font-size: 0.9rem;
    margin-bottom: 1.5vh;
  }

  .external-heading {
    font-size: 2rem;
    line-height: 1.4;
  }

  .heading2 {
    font-size: 1.5rem;
  }

  .heading3 {
    font-size: 2rem;
    margin-top: 2vh;
  }

  .quote-author {
    font-size: 1rem;
    margin-top: 1rem;
  }

  /* Disable parallax on mobile */
  .business-image,
  .business-image2 {
    transform: scale(1.1) !important;
  }
}

/* iPhone 15 and similar devices */
@media (max-width: 430px) {
  .grid-content {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  .grid-image {
    height: 35vh;
    margin-bottom: 2rem;
  }

  .grid-image2 {
    height: 30vh;
    margin-bottom: 3rem;
  }

  .external-heading {
    font-size: 1.75rem;
    line-height: 1.4;
  }

  .heading2 {
    font-size: 1.3rem;
  }

  .heading3 {
    font-size: 1.75rem;
  }

  .eyebrow-text,
  .eyebrow-text-2 {
    font-size: 0.85rem;
  }

  .quote-author {
    font-size: 0.95rem;
  }

  /* Show mobile version, hide desktop */
  .desktop-ext {
    display: none !important;
  }

  .mobile-ext {
    display: block !important;
  }

  .desktop-h2 {
    display: none !important;
  }

  .mobile-h2 {
    display: block !important;
  }

  .desktop-h3 {
    display: none !important;
  }

  .mobile-h3 {
    display: block !important;
  }
}
</style>
