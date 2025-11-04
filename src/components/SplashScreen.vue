<template>
    <div class="splash-screen" ref="splashScreen">
      <h1 class="logo">DOT<span class="bullet">•</span><span class="italic" ref="textElement">{{ displayText }}</span></h1>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  const splashScreen = ref(null);
  const textElement = ref(null);
  const displayText = ref('WHAT');
  const words = ['GROW', 'INNOVATE', 'DELIVER', 'LEAD', 'SCALE', 'WHAT'];
  
  const emit = defineEmits(['completed']);
  
  onMounted(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Skjul splash-skærmen efter animationen
        gsap.to(splashScreen.value, {
          opacity: 0,
          duration: 0.8,
          onComplete: () => {
            emit('completed');
          }
        });
      }
    });
  
    words.forEach((word, index) => {
      tl.to(textElement.value, {
        y: -20,
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          displayText.value = word;
        }
      });
      tl.to(textElement.value, {
        y: 0,
        opacity: 1,
        duration: 0.3
      });
      if (index < words.length - 1) {
        tl.to({}, { duration: 0.1 }); // Pause mellem ordene
      }
    });
  });
  </script>
  
  <style scoped>
  .splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0d1335; /* Eller en anden baggrundsfarve */
    display: flex;
    align-items: center;
    z-index: 9999;
    color: white;
  }
  
  .logo {
    font-family: 'BeVietnamPro-Bold', sans-serif;
    font-size: 4rem; /* Lidt større for effekt */
    font-weight: 400;
    letter-spacing: 0.1em;

    left: 35%;
    position: absolute;
  }
  
  .bullet {
    margin: 0 0.4em;
    opacity: 0.7;
    color: #10a28e;
  }
  
  .italic {
    font-style: italic;
    display: inline-block; /* Vigtigt for GSAP transformationer */
  }
  
  @media (max-width: 768px) {
    .logo {
      font-size: 2.5rem;
    }
  }
  </style>