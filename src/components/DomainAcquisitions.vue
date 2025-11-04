<template>
  <!-- Hero Section -->
  <div class="hero-section grid-item grid-hero" ref="heroRef">
    <h1 class="hero-title" ref="titleRef">
      <span class="line-wrapper"><span class="line" ref="line1">Time to claim your name</span></span>
      <span class="line-wrapper"><span class="line" ref="line2"></span></span>
    </h1>
    <p class="hero-subtitle" ref="subtitleRef">
      <span class="line-wrapper"><span class="line" ref="subLine1">Do you need to buy a domain name to protect your brand and</span></span>
      <span class="line-wrapper"><span class="line" ref="subLine2">grow your business? Get in touch to find out how we can help.</span></span>
    </p>
  </div>

  <!-- Main Content Section -->
  <div class="content-section grid-item grid-content">
    <div class="content-card">
      <h2>Get the right domain</h2>
      <p>
        Whether you are growing your existing business, or launching a new brand, getting the right domain name is part of the battle.
      </p>
      <p>
        In search, Google rewards brands through its algorithms - and brands are (mostly) built on .coms. The right domain name protects a brand's reputation, and builds credibility.
      </p>
      <p>
        We understand the significance of owning the right domain name and protecting the integrity of your brand. That's why domain acquisition is at the heart of what we do as a company, and why we enjoy one of the highest success rates in the industry.
      </p>
    </div>
  </div>

  <!-- Domain Check Form -->
  <div class="domain-form-section grid-item grid-domain-form">
    <div class="domain-form-card">
      <h2>Is the domain you need available?</h2>
      <p class="form-subtitle">Just enter the name you need, and we'll find out for you</p>
      <form class="domain-form" @submit.prevent="handleDomainCheck">
        <div class="form-group">
          <input 
            type="email" 
            id="domain-email" 
            v-model="domainForm.email" 
            placeholder="Your email"
            required 
            :class="{ 'error': emailError }"
          />
          <span v-if="emailError" class="error-message">Invalid Email</span>
        </div>
        <div class="form-group">
          <input 
            type="text" 
            id="domain-name" 
            v-model="domainForm.domainName" 
            placeholder="Domain name"
            required 
          />
        </div>
        <button type="submit" class="submit-btn" :disabled="submitting">
          {{ submitting ? 'Checking...' : 'Check Availability' }}
        </button>
        <p v-if="submitError" class="error-message">{{ submitError }}</p>
        <div v-if="submitSuccess" class="success-message">
          <h3>Thanks for your enquiry</h3>
          <p>We'll be in touch soon, and let you know if your desired domain name is available.</p>
        </div>
      </form>
    </div>
  </div>

  <!-- Statistics Section -->
  <div class="stats-section grid-item grid-stats" ref="statsSectionRef">
    <div class="stat-card">
      <h3 class="stat-number">{{ animatedStat1.toLocaleString() }}+</h3>
      <p class="stat-description">More than <strong>3,000 successful acquisitions</strong> since 1999</p>
    </div>
    <div class="stat-card">
      <h3 class="stat-number">{{ animatedStat2 }}%</h3>
      <p class="stat-description">One of the <strong>highest closing rates</strong> in the industry</p>
    </div>
    <div class="stat-card">
      <h3 class="stat-number">{{ animatedStat3 }}°</h3>
      <p class="stat-description">Experienced domain brokers <strong>manage all aspects</strong> <br> of the process</p>
    </div>
  </div>

  <!-- Process Flow Section -->
  <div class="process-section grid-item grid-process">
    <h2 class="process-title">A transparent approach</h2>
    <div class="process-flow">
      <div class="process-step">
        <div class="step-icon">
          <h3>01</h3>
        </div>
        <h3 class="step-title">Research</h3>
        <p class="step-description">We analyse the domain name & its current owner to assess value and risk potential (such as previous disputes)</p>
      </div>
      <div class="process-step">
        <div class="step-icon">
          <h3>02</h3>
        </div>
        <h3 class="step-title">Negotiation</h3>
        <p class="step-description">Anonymity is key to success so your identity as the buyer remains hidden from the owner throughout negotiations</p>
      </div>
      <div class="process-step">
        <div class="step-icon">
          <h3>03</h3>
        </div>
        <h3 class="step-title">Transaction</h3>
        <p class="step-description">To protect you and the current owner, funds are held in escrow until ownership of the domain is transferred to you</p>
      </div>
      <div class="process-step">
        <div class="step-icon">
          <h3>04</h3>
        </div>
        <h3 class="step-title">Transfer</h3>
        <p class="step-description">In 90% of cases, domains are transferred to a new owner within 2-4 weeks and with almost no effort from the new owner</p>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="cta-section grid-item grid-cta">
    <div class="cta-card">
      <h2>Let us help you get the name you need</h2>
      <router-link to="/contact" class="cta-button">Get in Touch</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const heroRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const line1 = ref(null)
const line2 = ref(null)
const subLine1 = ref(null)
const subLine2 = ref(null)
const statsSectionRef = ref(null)

const animatedStat1 = ref(0)
const animatedStat2 = ref(0)
const animatedStat3 = ref(0)
const statsAnimated = ref(false)

const domainForm = ref({
  email: '',
  domainName: ''
})

const emailError = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)
const submitting = ref(false)

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleDomainCheck = () => {
  emailError.value = false
  submitError.value = ''
  submitSuccess.value = false

  if (!validateEmail(domainForm.value.email)) {
    emailError.value = true
    submitError.value = 'Invalid Email'
    return
  }

  if (!domainForm.value.domainName.trim()) {
    submitError.value = 'Please enter a domain name'
    return
  }

  submitting.value = true

  // Simulate API call
  setTimeout(() => {
    submitting.value = false
    submitSuccess.value = true
    domainForm.value = { email: '', domainName: '' }
  }, 1500)
}

const handleScroll = () => {
  if (heroRef.value) {
    const scrollY = window.scrollY
    const maxBlur = 10
    const blurAmount = Math.min(scrollY / 50, maxBlur)
    const translateY = scrollY * 0.13
    const maxOpacity = 1
    const fadeStart = 200
    const fadeDistance = 400
    const opacity = Math.max(0, maxOpacity - (Math.max(0, scrollY - fadeStart) / fadeDistance))
    
    gsap.to(heroRef.value, {
      filter: `blur(${blurAmount}px)`,
      y: translateY,
      opacity: opacity,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  // Check if stats section is in viewport
  if (statsSectionRef.value && !statsAnimated.value) {
    const rect = statsSectionRef.value.getBoundingClientRect()
    // Trigger when stats section is 200px from top of viewport or already visible
    const isInView = rect.top < (window.innerHeight - 200) && rect.bottom > 0
    
    if (isInView) {
      animateStats()
    }
  }
}

const animateStats = () => {
  if (statsAnimated.value) return
  statsAnimated.value = true

  // Animate stat 1: 3000
  const obj1 = { value: 0 }
  gsap.to(obj1, {
    value: 3000,
    duration: 2,
    ease: 'power2.out',
    onUpdate: function() {
      animatedStat1.value = Math.floor(obj1.value)
    }
  })

  // Animate stat 2: 47
  const obj2 = { value: 0 }
  gsap.to(obj2, {
    value: 47,
    duration: 2,
    ease: 'power2.out',
    onUpdate: function() {
      animatedStat2.value = Math.floor(obj2.value)
    }
  })

  // Animate stat 3: 360
  const obj3 = { value: 0 }
  gsap.to(obj3, {
    value: 360,
    duration: 2,
    ease: 'power2.out',
    onUpdate: function() {
      animatedStat3.value = Math.floor(obj3.value)
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // GSAP entrance animation - title reveal
  if (line1.value && line2.value) {
    const titleLines = [line1.value, line2.value]
    
    gsap.set(titleLines, {
      y: '100%',
      opacity: 0
    })
    
    gsap.to(titleLines, {
      y: '0%',
      opacity: 1,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.2,
      delay: 0.4
    })
  }

  // GSAP entrance animation - subtitle reveal
  if (subLine1.value && subLine2.value) {
    const subLines = [subLine1.value, subLine2.value]
    
    gsap.set(subLines, {
      y: '100%',
      opacity: 0
    })
    
    gsap.to(subLines, {
      y: '0%',
      opacity: 1,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.2,
      delay: 1.2
    })
  }

  // Initial check for stats section visibility
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.grid-hero {
  grid-column: 1 / 9;
  grid-row: 2;
  margin-top: 37.5vh;
  margin-bottom: 5vh;
}

.hero-title {
  font-family: 'BeVietnamPro-Bold', sans-serif;
  font-size: 5rem;
  font-weight: 500;
  color: white;
  line-height: 1.2;
  margin: 0 0 0.7rem 0;
  overflow: hidden;
}

.line-wrapper {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}

.hero-subtitle {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  margin-bottom: 40vh;
}

.hero-subtitle .line-wrapper {
  display: block;
  overflow: hidden;
}

.hero-subtitle .line {
  display: block;
}

.grid-content {
  grid-column: 1 / 7;
  grid-row: 3;
  margin-top: 5vh;
  margin-bottom: 20vh;
}


.content-card h2 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: white;
}

.content-card p {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
}

.grid-domain-form {
  grid-column: 4 / 10;
  grid-row: 7;
  margin-top: 0vh;
  margin-bottom: 5vh;
}

.domain-form-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 2px;
  padding: 3rem;
  color: white;
  margin-bottom: 15vh;
}

.domain-form-card h2 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: white;
}

.form-subtitle {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.domain-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  position: relative;
}

.form-group input {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  color: white;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #10a28e;
}

.form-group input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-group input.error {
  border-color: #ff4444;
}

.error-message {
  color: #ff4444;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  display: block;
}

.submit-btn {
  background: #10a28e;
  border: none;
  color: white;
  padding: 1rem 2rem;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px;
  width: 100%;
}

.submit-btn:hover:not(:disabled) {
  background: rgb(26, 139, 122);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  background: rgba(7, 90, 95, 0.2);
  border: 1px solid #10a28e;
  border-radius: 2px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.success-message h3 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: white;
}

.success-message p {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.grid-stats {
  grid-column: 1 / 13;
  grid-row: 5;
  margin-top: 15vh;
  margin-bottom: 15vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.stat-card {
  grid-column: span 4;
  background-color: transparent;
  border-radius: 2px;
  padding: 2rem;
  text-align: center;
  color: white;
}

.stat-number {
  font-family: 'BeVietnamPro-Bold', sans-serif;
  font-size: 4rem;
  font-weight: 500;
  color: #10a28e;
  margin-bottom: 1rem;
}

.stat-description {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255);
  margin: 0;

}

.stat-description strong {
  color: white;
  font-weight: 500;
}

.grid-process {
  grid-column: 1 / 13;
  grid-row: 6;
  margin-top: 5vh;
  margin-bottom: 20vh;
}

.process-title {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
}

.process-flow {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.process-step {
  grid-column: span 3;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 2px;
  padding: 2rem;
  color: white;
}

.step-icon {
  margin-bottom: 1.5rem;
}

.step-icon h3 {
  font-family: 'BeVietnamPro-Bold', sans-serif;
  font-size: 3rem;
  font-weight: 500;
  color: #10a28e;
  margin: 0;
}

.step-title {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: white;
}

.step-description {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.grid-cta {
  grid-column: 2 / 12;
  grid-row: 8;
  margin-bottom: 10vh;
}

.cta-card {

  border-radius: 2px;
  padding: 4rem;
  text-align: center;
  color: white;
}

.cta-card h2 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: white;
}

.cta-button {
  display: inline-block;
  background: #10a28e;
  color: white;
  padding: 1rem 3rem;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: rgb(26, 139, 122);
}

@media (max-width: 768px) {
  .grid-hero {
    grid-column: 1 / 5;
    margin-top: 15vh;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .grid-content,
  .grid-domain-form {
    grid-column: 1 / 5;
  }

  .grid-stats {
    grid-template-columns: repeat(4, 1fr);
  }

  .stat-card {
    grid-column: span 4;
  }

  .process-flow {
    grid-template-columns: repeat(4, 1fr);
  }

  .process-step {
    grid-column: span 4;
  }

  .grid-cta {
    grid-column: 1 / 5;
  }

  .process-title {
    font-size: 2rem;
  }
}
</style>

