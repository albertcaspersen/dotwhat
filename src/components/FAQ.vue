<template>
  <div class="faq-heading grid-item grid-faq-heading">
    <h1 class="faq-title">Your questions: <br> Answered</h1>
  </div>
  
  <div class="faq-intro grid-item grid-faq-intro">
    <p class="intro-text">
      We regularly update this page with the information and insights our clients find most relevant, but if can't find the answers you're looking for, contact us. We're here to help!
    </p>
  </div>
  
  <div class="faq-content grid-item grid-faq-content">
    <div 
      v-for="(faq, index) in faqs" 
      :key="index" 
      class="faq-item"
    >
      <div class="faq-content-wrapper grid-item">
        <div 
          class="faq-question-wrapper grid-item"
          @click="toggleFaq(index)"
        >
          <h2 class="faq-question">{{ faq.question }}</h2>
          <span 
            class="faq-icon" 
            :ref="el => setIconRef(index, el)"
            :class="{ 'expanded': openFaqs[index] }"
          ></span>
          <div 
            class="faq-underline-green"
            :ref="el => setUnderlineRef(index, el)"
          ></div>
        </div>
        <div 
          class="faq-answer grid-item" 
          :ref="el => setAnswerRef(index, el)"
          :class="{ 'expanded': openFaqs[index] }"
        >
          <div class="answer-content">
            <p v-for="(paragraph, pIndex) in faq.answer" :key="pIndex">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="faq-cta grid-item grid-faq-cta">
    <div class="cta-card">
      <h2>Got a question we haven't answered?</h2>
      <p>Contact us and we'll get back to you as soon as possible.</p>
      <router-link to="/contact" class="cta-button">Ask Us</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

// FAQ dropdown state
const openFaqs = ref({})

// Refs for icons and answers
const iconRefs = ref({})
const answerRefs = ref({})
const underlineRefs = ref({})

const setIconRef = (index, el) => {
  if (el) {
    iconRefs.value[index] = el
  }
}

const setAnswerRef = (index, el) => {
  if (el) {
    answerRefs.value[index] = el
  }
}

const setUnderlineRef = (index, el) => {
  if (el) {
    underlineRefs.value[index] = el
  }
}

const toggleFaq = (index) => {
  const isOpening = !openFaqs.value[index]
  openFaqs.value[index] = isOpening
  
  const icon = iconRefs.value[index]
  const answer = answerRefs.value[index]
  const underline = underlineRefs.value[index]
  
  if (!icon || !answer) return
  
  // Animate icon rotation - use fromTo to ensure smooth animation from current state
  const currentRotation = gsap.getProperty(icon, 'rotation') || 0
  gsap.fromTo(icon, 
    { rotation: currentRotation },
    { 
      rotation: isOpening ? 45 : 0,
      duration: 0.3,
      ease: 'power2.out'
    }
  )
  
  // Animate green underline
  if (underline) {
    if (isOpening) {
      // Get the width of the question wrapper
      const questionWrapper = underline.parentElement
      const width = questionWrapper.offsetWidth
      
      // Start from left (width: 0, transform: scaleX(0))
      gsap.set(underline, {
        width: 0,
        transformOrigin: 'left center'
      })
      
      // Animate in from left
      gsap.to(underline, {
        width: width,
        duration: 0.8,
        ease: 'power2.out'
      })
    } else {
      // Animate out to left
      gsap.to(underline, {
        width: 0,
        duration: 0.8,
        ease: 'power2.in'
      })
    }
  }
  
  // Animate answer expand/collapse
  if (isOpening) {
    // Get the natural height of the content
    gsap.set(answer, { height: 'auto' })
    const height = answer.offsetHeight
    gsap.set(answer, { height: 0 })
    
    // Opening animation
    gsap.to(answer, {
      height: height,
      opacity: 1,
      marginTop: '2rem',
      marginBottom: '3rem',
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(answer, { height: 'auto' })
      }
    })
    
    // Animate content
    const content = answer.querySelector('.answer-content')
    if (content) {
      gsap.fromTo(content,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, delay: 0.1, ease: 'power2.out' }
      )
    }
  } else {
    // Get current height before closing
    const height = answer.offsetHeight
    gsap.set(answer, { height: height })
    
    // Closing animation
    gsap.to(answer, {
      height: 0,
      opacity: 0,
      marginTop: 0,
      marginBottom: 0,
      duration: 0.3,
      ease: 'power2.in'
    })
  }
}

// Scroll handler removed - no effects on header/intro

onMounted(() => {
  // Initialize green underlines - start with width 0 (wait for refs to be available)
  nextTick(() => {
    // Initialize underlines
    Object.values(underlineRefs.value).forEach(underline => {
      if (underline) {
        gsap.set(underline, {
          width: 0
        })
      }
    })
    
    // Initialize icons - set rotation to 0
    Object.values(iconRefs.value).forEach(icon => {
      if (icon) {
        gsap.set(icon, {
          rotation: 0
        })
      }
    })
  })
})

// No scroll listeners to clean up

const faqs = [
  {
    question: "How important is the right domain?",
    answer: [
      "Impressions last. And in the online world your domain name is the first impression you make. Usually the .com name is a pre-requisite for any global business while local businesses can thrive with a country code extension like .co.uk or .dk.",
      "International expansion however can prove very challenging if the .com belongs to a competitor or to another company. This is especially critical when customers expect to see your brand, product or service when entering the .com domain of your brand but end up on a page owned by another player on the web."
    ]
  },
  {
    question: "How certain am I to acquire the desired domain name?",
    answer: [
      "All negotiations are done confidentially. This means that our clients' identity is never disclosed to the domain owner. We never guarantee that we will get you the domain name you need, but our success rate is one of the highest in the industry.",
      "We boast an extensive skills set and international network in the primary and secondary domain markets, and can offer insider insights into domain acquisition trends, WIPO and domain disputes - a combination which our clients find beneficial."
    ]
  },
  {
    question: "What is the difference between a domain acquisition and a legal domain dispute?",
    answer: [
      "A legal domain dispute is the formal way of retrieving a domain name that rightfully belongs to the customer. For most TLDs this includes a UDRP (Uniform Dispute Resolution Policy) proceeding at WIPO (World Intellectual Property Organisation). The decision on the rightful owner of the domain name is then awarded by WIPO."
    ]
  },
  {
    question: "In connection with acquisitions - how do I proceed with payment?",
    answer: [
      "We handle transactions through escrow.com, which is the largest and most established escrow company in the world. Your funds are delivered to a trustee account and only upon transferring ownership of the domain name are funds released to seller."
    ]
  },
  {
    question: "What is your fee?",
    answer: [
      "DotWhat has a very transparent pricing model. Prior to the start of an acquisition, we always sign a contract for the agreed fee with our client."
    ]
  },
  {
    question: "What is domain backordering?",
    answer: [
      "A service that attempts to register an expired domain name on behalf of an entity before someone else can obtain it as soon as it becomes available."
    ]
  }
];
</script>

<style scoped>
.grid-faq-heading {
  grid-column: 1 / 8;
  grid-row: 1;
  padding-top: 0vh;
  margin-top: 41vh;
}

.grid-faq-intro {
  grid-column: 1 / 6;
  grid-row: 2;
  margin-top: 0rem;
  margin-bottom: 16rem;
}

.grid-faq-content {
  grid-column: 1 / 13;
  grid-row: 3;
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 0;
}

.grid-faq-cta {
  grid-column: 2 / 12;
  grid-row: 4;
  margin-top: 6rem;
  
}

.faq-title {
  color: rgb(255, 255, 255);
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 4rem;
  font-weight: 400;
}

.intro-text {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgb(183, 184, 184);
}

.faq-item {
  border-radius: 0;
  margin-bottom: 0;
  
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 0.0rem 60px; /* Matcher container margin så grid kolonner stemmer overens */
}

/* ═══════════════════════════════════════════════════════════════ */
/* HER KAN DU ÆNDRE HVILKEN KOLONNE INDHOLDET SKAL SIDDE I */
/* LINJE 157: Ændr grid-column værdien (fx: grid-column: 2 / 10; ) */
/* ═══════════════════════════════════════════════════════════════ */

.faq-content-wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  grid-column: 1 / 13; /* Spænder over alle kolonner for at give plads til børn */
  padding: 0;
  
}


/* LINJE 173: Ændr dette for at ændre kolonne for SPØRGSMÅL */
.faq-question-wrapper {
  grid-column: 6 / 12; /* Spænder over mere plads for at inkludere ikon */
  color: white;
  font-family: 'BeVietnamPro-Variable', sans-serif;
  font-size: 1.5rem;
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.3s ease;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.faq-underline-green {
  position: absolute;
  bottom: -0.1vh;
  left: 0;
  height: 1px;
  width: 0;
  background-color: #10a28e;
  z-index: 1;
}

.faq-question-wrapper:hover {
  opacity: 0.8;
}

.faq-question {
  flex: 1;
  margin: 0;
  font-family: 'BeVietnamPro-Variable', sans-serif;
  font-weight: 400 !important;
  font-variation-settings: 'wght' 400;
}

/* Hvis du vil ændre font-weight, ændr både font-weight og font-variation-settings værdien */

.faq-icon {
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 3rem;
  margin-right: -0.5rem;
  position: relative;
  display: inline-block;
  transform-origin: center center;
  flex-shrink: 0;
}

.faq-icon::before,
.faq-icon::after {
  content: '';
  position: absolute;
  background-color: #ffffff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.faq-icon::before {
  width: 2px;
  height: 1.5rem;
}

.faq-icon::after {
  width: 1.5rem;
  height: 2px;
}

/* GSAP håndterer rotation, så vi behøver ikke CSS rotation */

/* LINJE 184: Ændr dette for at ændre kolonne for SVAR */
.faq-answer {
  grid-column: 6 / 12; /* Spænder over samme kolonner som spørgsmål */
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
  height: 0;
  overflow: hidden;
  opacity: 0;
}

.answer-content {
  padding: 0;
}

.answer-content p {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
}

.answer-content p:last-child {
  margin-bottom: 0;
}

.cta-card {
  background: rgba(255, 255, 255, 0);

  border-radius: 2px;
  padding: 3rem;
  text-align: center;
  color: white;
}

.cta-card h2 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.cta-card p {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.cta-button {
  display: inline-block;
  background: #10a28e;
  border: none;
  color: white;
  padding: 0.8rem 1.5rem;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.cta-button:hover {
  background: rgb(26, 139, 122);
  color: #ffffff;
}

@media (max-width: 768px) {
  .grid-faq-heading {
    grid-column: 1 / 13;
  }
  
  .grid-faq-intro,
  .grid-faq-content,
  .grid-faq-cta {
    grid-column: 1 / 13;
  }
  
  .faq-title {
    font-size: 2rem;
  }
  
  .grid-faq-content {
    left: 50%;
    right: 50%;
    width: 100vw;
    margin-left: -50vw;
    margin-right: -50vw;
  }
  
  .faq-item {
    padding: 2rem 20px; /* Matcher container margin på mobile */
    margin-bottom: 0;
  }
  
  /* På mobile: indholdet kan fylde mere eller mindre */
  .faq-content-wrapper {
    max-width: calc(100vw - 40px); /* Fylder næsten hele bredden minus 20px på hver side */
    padding: 0 20px;
  }
  
  .faq-question-wrapper {
    font-size: 1.2rem;
    margin-top: 4rem;
    padding-bottom: 1rem;
    grid-column: 1 / 13;
  }
  
  .faq-question {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
  
  .faq-icon {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
  }
  
  .faq-icon::before {
    width: 2px;
    height: 1.2rem;
  }
  
  .faq-icon::after {
    width: 1.2rem;
    height: 2px;
  }
  
  .faq-answer {
    grid-column: 1 / 13;
  }
  
  .faq-answer.expanded {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  
  .cta-card {
    padding: 2rem 1.5rem;
  }
  
  .cta-card h2 {
    font-size: 1.5rem;
  }
}

</style>

