<template>
  <h1 ref="glassHeading" class="grid-item grid-glass-heading">
      <span class="line-wrapper"><span class="line" ref="glassLine1"></span></span>
      <span class="line-wrapper"><span class="line" ref="glassLine2"></span></span>
      <span class="line-wrapper"><span class="line" ref="glassLine3"></span></span>
      <span class="line-wrapper"><span class="line" ref="glassLine4">Clear, proactive guidance to</span></span>
      <span class="line-wrapper"><span class="line" ref="glassLine5">secure your digital identity.</span></span>
      <p class="additional-text" ref="additionalTextRef">
        <span class="line-wrapper"><span class="line" ref="additionalTextLine1">At DotWhat, we help you turn domain</span></span>
        <span class="line-wrapper"><span class="line" ref="additionalTextLine2">management into a strategic advantage.</span></span>
        <span class="line-wrapper"><span class="line" ref="additionalTextLine3">From acquisitions and optimisation to</span></span>
        <span class="line-wrapper"><span class="line" ref="additionalTextLine4">brand protection, our expertise ensures</span></span>
        <span class="line-wrapper"><span class="line" ref="additionalTextLine5">every domain supports and strengthens</span></span>
        <span class="line-wrapper"><span class="line" ref="additionalTextLine6">your business goals.</span></span>
      </p>
    </h1>


    <!-- Cards (uændret) -->
    <div class="card1 grid-item grid-card1" ref="card1">
      <img src="/src/assets/pics/istockphoto-1454530399-612x612.jpg" alt="Domain Acquisitions" class="card-bg-image">
      <div class="card-content">
        <p class="card-title">Domain Acquisitions</p>
        <p class="card-description">Industry's highest success rates in acquiring domains.</p>
      </div>
    </div>
    <div class="card2 grid-item grid-card2" ref="card2">
      <img src="/src/assets/pics/aef551aa87aa5db6fee4c541c441e6b3894a557f-1999x1333.jpg" alt="Domain Evaluations" class="card-bg-image">
      <div class="card-content">
        <p class="card-title">Domain Evaluations</p>
        <p class="card-description">Accurate evaluation for successful domain sales.</p>
      </div>
    </div>
    <div class="card3 grid-item grid-card3" ref="card3">
      <img src="https://images.prismic.io/w1m-production/aElMxLNJEFaPX29s_aC2Y8CdWJ-7kSY1J_Article-1-.avif?auto=format,compress" alt="Portfolio Optimisation" class="card-bg-image">
      <div class="card-content">
        <p class="card-title">Portfolio Optimisation</p>
        <p class="card-description">Reduce annual domain fees through rigorous negotiations.</p>
      </div>
    </div>
    <div class="card4 grid-item grid-card4" ref="card4">
      <img src="https://st2.depositphotos.com/1594308/6843/i/450/depositphotos_68437599-stock-photo-two-businessmen-networking.jpg" alt="Domain Strategy" class="card-bg-image">
      <div class="card-content">
        <p class="card-title">Domain Strategy</p>
        <p class="card-description">Domain strategies aligned with your business objectives.</p>
      </div>
    </div>
    <div class="card5 grid-item grid-card5" ref="card5">
      <img src="https://img.freepik.com/free-photo/stressed-businessman-working-with-contract-documents_1098-15392.jpg?semt=ais_hybrid&w=740&q=80" alt="Intellectual Property" class="card-bg-image">
      <div class="card-content">
        <p class="card-title">Intellectual Property</p>
        <p class="card-description">Protect digital assets with IP services and trademark monitoring.</p>
      </div>
    </div>
    <div class="card6 grid-item grid-card6" ref="card6">
      <div class="card-content">
        <p class="card-title">Take a closer look</p>
        <p class="card-description"></p>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { useRouter } from 'vue-router';

const router = useRouter();

const glassHeading = ref(null);
const headingWidth = ref(0); // <-- NYT: Ref til at gemme den korrekte bredde

// ... andre refs (uændret)
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);
const card5 = ref(null);
const card6 = ref(null);
const glassLine1 = ref(null);
const glassLine2 = ref(null);
const glassLine3 = ref(null);
const glassLine4 = ref(null);
const glassLine5 = ref(null);
const additionalTextRef = ref(null);
const additionalTextLine1 = ref(null);
const additionalTextLine2 = ref(null);
const additionalTextLine3 = ref(null);
const additionalTextLine4 = ref(null);
const additionalTextLine5 = ref(null);
const additionalTextLine6 = ref(null);
const cards = [card1, card2, card3, card4, card5, card6];
const intensity = 25;
const scale = 1.2;

const handleScroll = () => {
  if (glassHeading.value) {
    // <-- NYT: Sæt den fastlåste bredde ved hver scroll for at forhindre "squashing"
    glassHeading.value.style.width = `${headingWidth.value}px`;

    const scrollY = window.scrollY;
    const stopSticky = 1632;

    if (scrollY >= stopSticky) {
      if (!glassHeading.value.classList.contains('sticky-stopped')) {
        const headingRect = glassHeading.value.getBoundingClientRect();
        const parentRect = glassHeading.value.offsetParent.getBoundingClientRect();
        const newTop = headingRect.top - parentRect.top;
        const newLeft = headingRect.left - parentRect.left;

        glassHeading.value.style.top = `${newTop}px`;
        glassHeading.value.style.left = `${newLeft}px`;
        glassHeading.value.classList.add('sticky-stopped');
      }
    } else {
      if (glassHeading.value.classList.contains('sticky-stopped')) {
        glassHeading.value.classList.remove('sticky-stopped');
        glassHeading.value.style.top = '';
        glassHeading.value.style.left = '';
      }
    }
  }


  // ... Resten af handleScroll (parallax, GSAP) er uændret ...
  const viewportCenterY = window.innerHeight / 2;
  cards.forEach(cardRef => {
    if (cardRef.value) {
      const img = cardRef.value.querySelector('.card-bg-image');
      if (!img) return;
      const rect = cardRef.value.getBoundingClientRect();
      const cardCenterY = rect.top + rect.height / 2;
      const diff = viewportCenterY - cardCenterY;
      const move = diff / intensity;
      img.style.transform = `scale(${scale}) translateY(${move}px)`;
    }
  });

  if (glassHeading.value && glassLine1.value) {
    const rect = glassHeading.value.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1 && rect.top + rect.height > 0) {
      gsap.to([glassLine1.value, glassLine2.value, glassLine3.value], { y: '0%', opacity: 1, duration: 1.2, ease: 'power4.out', stagger: 0.2 });
      gsap.to([glassLine4.value, glassLine5.value], { y: '0%', opacity: 1, duration: 1.2, ease: 'power4.out', stagger: 0.2, delay: 0.6 });
      gsap.to([additionalTextLine1.value, additionalTextLine2.value, additionalTextLine3.value, additionalTextLine4.value, additionalTextLine5.value, additionalTextLine6.value], { y: '0%', opacity: 1, duration: 1.2, ease: 'power4.out', stagger: 0.15, delay: 1.2 });
    }
  }

};

onMounted(() => {
  // <-- NYT: Mål og gem den oprindelige bredde, når komponenten er loaded
  if (glassHeading.value) {
    headingWidth.value = glassHeading.value.offsetWidth;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ... GSAP initialisering (uændret) ...
  gsap.set([glassLine1.value, glassLine2.value, glassLine3.value, glassLine4.value, glassLine5.value, additionalTextLine1.value, additionalTextLine2.value, additionalTextLine3.value, additionalTextLine4.value, additionalTextLine5.value, additionalTextLine6.value], { y: '100%', opacity: 0 });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* --- GENEREL STYLING & RETTELSER --- */
.grid-glass-heading {
    grid-column: 1 / 6;
    grid-row: 3;
    margin-top: 30rem;
    position: sticky;
    top: 40vh;
    z-index: 100;
    height: fit-content;
    /* <-- NYT: Fjern width herfra, da JS nu styrer den for at undgå konflikter */
}

/* Når sticky-effekten skal stoppe */
.grid-glass-heading.sticky-stopped {
    position: absolute;
    grid-column: unset;
    grid-row: unset;
    margin: 0;
}

/* --- Resten af din CSS er uændret --- */
.card1, .card2, .card3, .card4, .card5, .card6 {
    height: 40vh; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); width: 100%; display: flex; position: relative; margin: 0; cursor: pointer; overflow: hidden; border-radius: 2px;
}
.card-bg-image {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transform: scale(1.2); z-index: 0;
    /* GSAP will handle transitions */
}
.card1::before, .card2::before, .card3::before, .card4::before, .card5::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); z-index: 1; 
}
.card6 {
    background-color: #10a28e; cursor: pointer; transition: background-color 0.3s ease;
}
.card6:hover {
    background-color: #0a7a82;
}
.grid-glass-heading {
    color: rgb(255, 255, 255); font-family: 'BeVietnamPro-Regular', sans-serif; font-size: 3rem; font-weight: 400;
}
.additional-text {
    color: rgba(255, 255, 255, 0.9); font-family: 'BeVietnamPro-Regular', sans-serif; font-size: 1.1rem; font-weight: 300; line-height: 1.6; max-width: 500px; margin: 2rem 0 0 0;
}
.additional-text .line-wrapper, .grid-glass-heading .line-wrapper {
    display: block; overflow: hidden;
}
.additional-text .line, .grid-glass-heading .line {
    display: block;
}
.grid-card2 { grid-column: 9 / 12; grid-row: 3; margin-top: 50vh; }
.grid-card6 { grid-column: 9 / 12; grid-row: 3; margin-top: calc(80vh + 40px + 50vh); }
.grid-card3 { grid-column: 6 / 9; grid-row: 3; margin-top: calc(40vh + 20px + 50vh); }
.grid-card4 { grid-column: 9 / 12; grid-row: 3; margin-top: calc(40vh + 20px + 50vh); }
.grid-card1 { grid-column: 6 / 9; grid-row: 3; margin-top: 50vh; }
.grid-card5 { grid-column: 6 / 9; grid-row: 3; margin-top: calc(80vh + 40px + 50vh); }
.grid-card1, .grid-card3, .grid-card5 {
  margin-right: 20px;
}
.card-content {
    position: relative; z-index: 2; 
}
.card-content p {
    color: rgb(255, 255, 255); font-family: 'BeVietnamPro-Regular', sans-serif; font-weight: 500; padding: 1rem; pointer-events: none;
}
.card-content .card-title {
    max-width: 25vw; font-size: 1.5rem; font-weight: 400;
}
.card-content .card-description {
    font-size: 1.1rem; margin-top: 26vh; max-width: 18vw; font-weight: 100; line-height: 1.5rem;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .grid-glass-heading {
    grid-column: 1 / 13;
    grid-row: 4;
    margin-top: 5rem;
    position: relative;
    top: 0;
    font-size: 2rem;
  }

  .grid-glass-heading.sticky-stopped {
    position: relative;
    grid-column: 1 / 13;
  }

  .additional-text {
    font-size: 1rem;
    line-height: 1.7;
    max-width: 100%;
    margin: 1.5rem 0 2rem 0;
  }

  /* Stack all cards vertically */
  .grid-card1,
  .grid-card2,
  .grid-card3,
  .grid-card4,
  .grid-card5,
  .grid-card6 {
    grid-column: 1 / 13;
    grid-row: auto;
    margin-top: 0;
    margin-bottom: 1rem;
    margin-right: 0;
    height: 50vh;
  }

  .grid-card1 { grid-row: 5; }
  .grid-card2 { grid-row: 6; }
  .grid-card3 { grid-row: 7; }
  .grid-card4 { grid-row: 8; }
  .grid-card5 { grid-row: 9; }
  .grid-card6 { grid-row: 10; }

  .card-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }

  .card-content .card-title {
    max-width: 80vw;
    font-size: 1.3rem;
    padding: 0;
  }

  .card-content .card-description {
    max-width: 60vw;
    font-size: 1rem;
    margin-top: 0;
    padding: 0;
  }

  .card-content p {
    padding: 0;
  }

  /* Disable parallax on mobile */
  .card-bg-image {
    transform: scale(1.1) !important;
  }
}

/* iPhone 15 and similar devices */
@media (max-width: 430px) {
  .grid-glass-heading {
    font-size: 1.75rem;
  }



  .additional-text {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }

  .card1, .card2, .card3, .card4, .card5, .card6 {
    height: 45vh;
  }

  .card-content .card-title {
    font-size: 1.2rem;
  }

  .card-content .card-description {
    font-size: 0.9rem;
  }
  .card-description {
    max-width: 60vw;
  }
}

</style>