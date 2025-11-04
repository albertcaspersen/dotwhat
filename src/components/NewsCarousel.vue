<template>
  <div class="news-carousel">
    <div class="carousel-container">
      <div class="carousel-track" ref="carouselTrack">
        <div 
          v-for="(article, index) in articles" 
          :key="index" 
          class="carousel-item"
        >
          <h3 class="article-title">{{ article.title }}</h3>
        </div>
        <!-- Duplicate items for seamless loop -->
        <div 
          v-for="(article, index) in articles" 
          :key="`duplicate-${index}`" 
          class="carousel-item"
        >
          <h3 class="article-title">{{ article.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const carouselTrack = ref(null)
let animationId = null

const articles = [
  {
    title: "Ny teknologi revolutionerer webudvikling i 2024"
  },
  {
    title: "AI-integration bliver standard for moderne apps"
  },
  {
    title: "Cybersikkerhed: Nye trusler og beskyttelsesmetoder"
  },
  {
    title: "Blockchain teknologi finder nye anvendelser i dagligdagen"
  },
  {
    title: "Kvantecomputing nærmer sig kommerciel anvendelse"
  },
  {
    title: "Metaverse udvikling accelererer med nye VR-teknologier"
  }
]

const animateCarousel = () => {
  if (carouselTrack.value) {
    const track = carouselTrack.value
    const itemWidth = track.children[0].offsetWidth
    const totalWidth = itemWidth * articles.length
    
    // Reset position when we've scrolled through all original items
    if (track.style.transform) {
      const currentTransform = parseFloat(track.style.transform.replace('translateX(', '').replace('px)', ''))
      if (Math.abs(currentTransform) >= totalWidth) {
        track.style.transform = 'translateX(0px)'
      }
    }
    
    // Move the carousel
    const currentTransform = parseFloat(track.style.transform?.replace('translateX(', '').replace('px)', '') || 0)
    track.style.transform = `translateX(${currentTransform - 0.5}px)`
  }
  
  animationId = requestAnimationFrame(animateCarousel)
}

onMounted(() => {
  if (carouselTrack.value) {
    carouselTrack.value.style.transform = 'translateX(0px)'
    animateCarousel()
  }
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.news-carousel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  height: 80px;
  overflow: hidden;
}

.carousel-container {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.carousel-track {
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  will-change: transform;
}

.carousel-item {
  flex-shrink: 0;
  padding: 0 40px;
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  transition: background-color 0.3s ease;
}

.carousel-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.article-title {
  font-family: 'BeVietnamPro-Bold', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  margin: 0;
  white-space: nowrap;
  opacity: 0.9;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.carousel-item:hover .article-title {
  opacity: 1;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .news-carousel {
    height: 60px;
  }
  
  .article-title {
    font-size: 0.9rem;
  }
  
  .carousel-item {
    padding: 0 20px;
  }
}
</style>
