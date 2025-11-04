<template>
  <header class="header grid-item grid-logo">
    <router-link to="/" class="logo-link" @click="handleLogoClick">
      <img src="/src/assets/pics/dotwhat_logo.png" alt="DotWhat" class="logo-image" />
    </router-link>
    <div class="small-circle"></div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  })
}

const handleLogoClick = () => {
  // Navigate to home if not already there
  if (router.currentRoute.value.path !== '/') {
    router.push('/')
  }
  // Always scroll to top
  scrollToTop()
}
</script>

<style scoped>
.header {
  color: white;
}

.grid-logo {
    grid-column: 1 / 13;
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
}


.logo-link {
  text-decoration: none;
  color: inherit;
  display: block;
  grid-column: 1 / 3;
  position: fixed;
  left: 60px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  z-index: 1001;
  pointer-events: auto;
}

.logo-link:hover {
  opacity: 0.8;
}

.logo-image {
  height: auto;
  width: auto;
  max-height: 2.5rem;
  margin-top: -1vh;
  display: block;
  pointer-events: auto;
}

.small-circle {
  width: 0.6rem;
  height: 0.6rem;
  background-color: transparent;
  border-radius: 50%;
  transition: opacity 0.3s ease;
  position: fixed;
  left: calc(60px + 7rem);
  top: 5.6vh;
  transform: translateY(-50%);
  z-index: 4000;
}

.small-circle:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .grid-logo {
    grid-column: 1 / 13;
    margin-top: 1rem;
  }

  .logo-link {
    grid-column: 1 / 4;
    left: 20px;
  }

  .logo-image {
    max-height: 2rem;
  }

}

@media (max-width: 430px) {
  .logo-link {
    left: 15px;
  }

  .logo-image {
    max-height: 1.75rem;
  }

}
</style>
