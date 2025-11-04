<template>
  <div class="news-container grid-item grid-news">
    <h1 ref="newsHeading">
      <span class="line-wrapper"><span class="line" ref="newsLine1">Latest News & Industry Insights</span></span>
    </h1>
    
    <!-- Fading line -->
    <div class="fading-line" ref="fadingLineRef"></div>

    <!-- News Card 1 -->
    <div class="news-card1 grid-item grid-news-card1" ref="newsCard1">
      <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000" alt="Domain Trends" class="news-bg-image">
      <div class="news-content">
        <p class="news-date">Dec 15, 2024</p>
        <p class="news-title">Market Trends</p>
        <p class="news-description">
          <span class="line-wrapper"><span class="line">Latest insights into</span></span>
          <span class="line-wrapper"><span class="line">domain market trends</span></span>
          <span class="line-wrapper"><span class="line">and valuations.</span></span>
        </p>
      </div>
      <div class="read-more">Read more <span class="arrow">→</span></div>
    </div>

    <!-- News Card 2 -->
    <div class="news-card2 grid-item grid-news-card2" ref="newsCard2">
      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000" alt="Tech Innovation" class="news-bg-image">
      <div class="news-content">
        <p class="news-date">Dec 12, 2024</p>
        <p class="news-title">Tech Innovation</p>
        <p class="news-description">
          <span class="line-wrapper"><span class="line">How technology is</span></span>
          <span class="line-wrapper"><span class="line">reshaping domain</span></span>
          <span class="line-wrapper"><span class="line">management strategies.</span></span>
        </p>
      </div>
      <div class="read-more">Read more <span class="arrow">→</span></div>
    </div>

    <!-- News Card 3 -->
    <div class="news-card3 grid-item grid-news-card3" ref="newsCard3">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000" alt="Business Strategy" class="news-bg-image">
      <div class="news-content">
        <p class="news-date">Dec 10, 2024</p>
        <p class="news-title">Business Strategy</p>
        <p class="news-description">
          <span class="line-wrapper"><span class="line">Strategic approaches</span></span>
          <span class="line-wrapper"><span class="line">to domain portfolio</span></span>
          <span class="line-wrapper"><span class="line">optimization.</span></span>
        </p>
      </div>
      <div class="read-more">Read more <span class="arrow">→</span></div>
    </div>

    <!-- News Card 4 -->
    <div class="news-card4 grid-item grid-news-card4" ref="newsCard4">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000" alt="Industry Analysis" class="news-bg-image">
      <div class="news-content">
        <p class="news-date">Dec 8, 2024</p>
        <p class="news-title">Industry Analysis</p>
        <p class="news-description">
          <span class="line-wrapper"><span class="line">Deep dive into</span></span>
          <span class="line-wrapper"><span class="line">current industry</span></span>
          <span class="line-wrapper"><span class="line">challenges and opportunities.</span></span>
        </p>
      </div>
      <div class="read-more">Read more <span class="arrow">→</span></div>
    </div>

    <!-- News Card 5 -->
    <div class="news-card5 grid-item grid-news-card5" ref="newsCard5">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000" alt="Client Success" class="news-bg-image">
      <div class="news-content">
        <p class="news-date">Dec 5, 2024</p>
        <p class="news-title">Client Success</p>
        <p class="news-description">
          <span class="line-wrapper"><span class="line">Success stories from</span></span>
          <span class="line-wrapper"><span class="line">our recent domain</span></span>
          <span class="line-wrapper"><span class="line">acquisition projects.</span></span>
        </p>
      </div>
      <div class="read-more">Read more <span class="arrow">→</span></div>
    </div>

    <!-- News Card 6 -->
    <div class="news-card6 grid-item grid-news-card6" ref="newsCard6">
      <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000" alt="Future Outlook" class="news-bg-image">
      <div class="news-content">
        <p class="news-date">Dec 3, 2024</p>
        <p class="news-title">Future Outlook</p>
        <p class="news-description">
          <span class="line-wrapper"><span class="line">Predictions for the</span></span>
          <span class="line-wrapper"><span class="line">future of domain</span></span>
          <span class="line-wrapper"><span class="line">management and investment.</span></span>
        </p>
      </div>
      <div class="read-more">Read more <span class="arrow">→</span></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const newsCard1 = ref(null);
const newsCard2 = ref(null);
const newsCard3 = ref(null);
const newsCard4 = ref(null);
const newsCard5 = ref(null);
const newsCard6 = ref(null);

// News heading refs
const newsHeading = ref(null);
const newsLine1 = ref(null);
const newsLine2 = ref(null);
const fadingLineRef = ref(null);

const newsCards = [newsCard1, newsCard2, newsCard3, newsCard4, newsCard5, newsCard6];

// Same parallax effect as your 5 cards
const intensity = 25; // Lower number = more movement
const scale = 1.2;  // Slightly more zoom to avoid edges

const handleScroll = () => {
  const viewportCenterY = window.innerHeight / 2;

  newsCards.forEach(cardRef => {
    if (cardRef.value) {
      const img = cardRef.value.querySelector('.news-bg-image');
      if (!img) return;

      const rect = cardRef.value.getBoundingClientRect();
      const cardCenterY = rect.top + rect.height / 2;
      const diff = viewportCenterY - cardCenterY;
      
      const move = diff / intensity;
      
      img.style.transform = `scale(${scale}) translateY(${move}px)`;
    }
  });

  // News heading scroll animation
  if (newsHeading.value && newsLine1.value && newsLine2.value) {
    const rect = newsHeading.value.getBoundingClientRect();
    const elementTop = rect.top;
    const elementHeight = rect.height;
    const triggerPoint = window.innerHeight * 0.8; // Trigger when 80% visible
    
    if (elementTop < triggerPoint && elementTop + elementHeight > 0) {
      const newsLines = [newsLine1.value, newsLine2.value]
      
      gsap.to(newsLines, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      })
    }
  }

  // Fading line animation - animerer fra midten ud
  if (fadingLineRef.value) {
    const rect = fadingLineRef.value.getBoundingClientRect();
    const elementTop = rect.top;
    const elementHeight = rect.height;
    const triggerPoint = window.innerHeight * 0.8; // Trigger when 80% visible
    
    if (elementTop < triggerPoint && elementTop + elementHeight > 0) {
      gsap.to(fadingLineRef.value, {
        scaleX: 1,
        opacity: 1,
        duration: 5.5,
        ease: 'power4.out'
      })
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); 
  
  // Set initial state for news heading
  if (newsLine1.value && newsLine2.value) {
    const newsLines = [newsLine1.value, newsLine2.value]
    
    gsap.set(newsLines, {
      y: '100%',
      opacity: 0
    })
  }

  // Set initial state for fading line - starter fra midten (scaleX: 0)
  if (fadingLineRef.value) {
    gsap.set(fadingLineRef.value, {
      scaleX: 0,
      opacity: 0,
      transformOrigin: 'center center'
    })
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* General styling */
.news-container {
  background: transparent;
  border-radius: 8px;
  height: 60vh;
  margin-top: 2vh;
  position: relative;
  z-index: 2;
  grid-column: 1 / 13;
  grid-row: 7;
}

.grid-news {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto 1fr;
  gap: 20px;
  align-items: start;
  box-sizing: border-box;
  position: relative;
}

/* News heading */
.news-container h1 {
  grid-column: 3 / 11;
  grid-row: 1;
  color: rgb(255, 255, 255);
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin: 0rem 0 0rem 0;
  z-index: 10;
  align-self: center;
  text-align: center;
}

/* Fading line */
.fading-line {
  grid-column: 1 / 13;
  grid-row: 2;
  height: 1px;
  background: linear-gradient(to right, 
    transparent 0%, 
    rgba(255, 255, 255, 0.3) 20%, 
    rgba(255, 255, 255, 0.6) 50%, 
    rgba(255, 255, 255, 0.3) 80%, 
    transparent 100%
  );
  margin: 1rem 0 2rem 0;
  z-index: 10;
  transform-origin: center center;
}

/* News cards styling */
.news-card1, .news-card2, .news-card3, .news-card4, .news-card5, .news-card6 {
  height: 45vh;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  width: 100%;
  display: flex;
  transition: all 0.3s ease;
  position: relative;
  margin-bottom: 0vh;
  cursor: pointer;
  overflow: hidden; 
  border-radius: 2px;
}

/* Styling for images inside news cards */
.news-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2);
  z-index: 0;
  transition: transform 0.2s linear;
}

/* Overlay for each news card */
.news-card1::before, .news-card2::before, .news-card3::before, 
.news-card4::before, .news-card5::before, .news-card6::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1; 
}

/* Grid placement for each news card - all 6 cards in one row */
.grid-news-card1 { grid-column: 1 / 3; grid-row: 3; }
.grid-news-card2 { grid-column: 3 / 5; grid-row: 3; }
.grid-news-card3 { grid-column: 5 / 7; grid-row: 3; }
.grid-news-card4 { grid-column: 7 / 9; grid-row: 3; }
.grid-news-card5 { grid-column: 9 / 11; grid-row: 3; }
.grid-news-card6 { grid-column: 11 / 13; grid-row: 3; }

/* Text in news cards */
.news-content, .read-more {
  position: relative;
  z-index: 2;
}

.news-card1 p, .news-card2 p, .news-card3 p, 
.news-card4 p, .news-card5 p, .news-card6 p {
  color: rgb(255, 255, 255);
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-weight: 500;
  padding: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  pointer-events: none;
}

.news-date {
  font-size: 0.8rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
}

.news-title {
  max-width: 18vw;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.news-description {
  max-width: 15vw;
  box-sizing: border-box;
  font-size: 0.9rem;
  margin-top: 19vh;
}

.line-wrapper {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}

/* News heading line wrappers */
.news-container h1 .line-wrapper {
  display: block;
  overflow: hidden;
}

.news-container h1 .line {
  display: block;
}

.read-more {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
}

.arrow {
  display: inline-block;
  margin-left: 0.3rem;
  transform: translateX(-10px);
  opacity: 0;
  transition: all 0.3s ease;
}

.news-card1:hover .arrow,
.news-card2:hover .arrow,
.news-card3:hover .arrow,
.news-card4:hover .arrow,
.news-card5:hover .arrow,
.news-card6:hover .arrow {
  transform: translateX(0);
  opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .news-container {
    height: auto;
    grid-column: 1 / 13;
    grid-row: 16;
    margin-top: 3rem;
  }

  .news-container h1 {
    grid-column: 1 / 13;
    font-size: 2rem;
    text-align: left;
    margin-bottom: 1rem;
  }

  .fading-line {
    grid-column: 1 / 13;
    margin: 1rem 0 1.5rem 0;
  }
  
  .grid-news {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto repeat(6, auto);
    gap: 15px;
  }
  
  .news-card1, .news-card2, .news-card3, 
  .news-card4, .news-card5, .news-card6 {
    height: 45vh;
    margin-bottom: 1rem;
  }
  
  /* Stack all cards vertically on mobile */
  .grid-news-card1 { grid-column: 1 / 13; grid-row: 3; }
  .grid-news-card2 { grid-column: 1 / 13; grid-row: 4; }
  .grid-news-card3 { grid-column: 1 / 13; grid-row: 5; }
  .grid-news-card4 { grid-column: 1 / 13; grid-row: 6; }
  .grid-news-card5 { grid-column: 1 / 13; grid-row: 7; }
  .grid-news-card6 { grid-column: 1 / 13; grid-row: 8; }

  .news-title {
    max-width: 80vw;
    font-size: 1.2rem;
  }

  .news-description {
    max-width: 80vw;
    font-size: 0.9rem;
    margin-top: 16vh;
  }

  .news-date {
    font-size: 0.75rem;
  }

  /* Disable parallax on mobile */
  .news-bg-image {
    transform: scale(1.1) !important;
  }
}

/* iPhone 15 and similar devices */
@media (max-width: 430px) {
  .news-container h1 {
    font-size: 1.75rem;
  }

  .news-card1, .news-card2, .news-card3, 
  .news-card4, .news-card5, .news-card6 {
    height: 40vh;
  }

  .news-title {
    font-size: 1.1rem;
  }

  .news-description {
    font-size: 0.85rem;
    margin-top: 14vh;
  }
}
</style>
