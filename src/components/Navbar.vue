<template>
  <nav class="navbar grid-item grid-navbar">
    <!-- Burger Menu Button (Mobile Only) -->
    <button class="burger-btn" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>

    <!-- Desktop Navigation -->
    <ul class="nav-list">
      <li><a href="#" class="nav-link">About</a></li>
      <li class="dropdown-container" ref="dropdownContainer" @mouseenter="handleDropdownEnter" @mouseleave="handleDropdownLeave">
        <router-link to="/services" class="nav-link dropdown-trigger">
          Services
          <svg class="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
        <div class="dropdown-menu">
          <router-link to="/services/domain-acquisitions" class="dropdown-item">Domain Acquisitions</router-link>
          <a href="#" class="dropdown-item">Domain Evaluations</a>
          <a href="#" class="dropdown-item">Portfolio Optimisation</a>
          <a href="#" class="dropdown-item">Domain strategy</a>
          <a href="#" class="dropdown-item">Intellectual Property</a>
         
        </div>
      </li>
      <li><router-link to="/clients" class="nav-link">Clients</router-link></li>
      <li><router-link to="/news" class="nav-link">News</router-link></li>
      <li><router-link to="/faq" class="nav-link">FAQ</router-link></li>
    </ul>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-overlay" :class="{ 'active': isMobileMenuOpen }" @click="closeMobileMenu"></div>

    <!-- Mobile Slide-in Menu -->
    <div class="mobile-menu" :class="{ 'active': isMobileMenuOpen }">
      <ul class="mobile-nav-list">
        <li><a href="#" class="mobile-nav-link" @click="closeMobileMenu">About</a></li>
        <li class="mobile-dropdown">
          <button class="mobile-nav-link mobile-dropdown-trigger" @click="toggleServicesDropdown">
            Services
            <svg class="mobile-dropdown-arrow" :class="{ 'open': isServicesOpen }" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <ul class="mobile-dropdown-menu" :class="{ 'open': isServicesOpen }">
            <li><router-link to="/services/domain-acquisitions" class="mobile-dropdown-item" @click="closeMobileMenu">Domain Acquisitions</router-link></li>
            <li><a href="#" class="mobile-dropdown-item" @click="closeMobileMenu">Domain Evaluations</a></li>
            <li><a href="#" class="mobile-dropdown-item" @click="closeMobileMenu">Portfolio Optimisation</a></li>
            <li><a href="#" class="mobile-dropdown-item" @click="closeMobileMenu">Domain strategy</a></li>
            <li><a href="#" class="mobile-dropdown-item" @click="closeMobileMenu">Intellectual Property</a></li>
          </ul>
        </li>
        <li><router-link to="/clients" class="mobile-nav-link" @click="closeMobileMenu">Clients</router-link></li>
        <li><router-link to="/news" class="mobile-nav-link" @click="closeMobileMenu">News</router-link></li>
        <li><router-link to="/faq" class="mobile-nav-link" @click="closeMobileMenu">FAQ</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const dropdownContainer = ref(null)
let currentAnimation = null

// Mobile menu state
const isMobileMenuOpen = ref(false)
const isServicesOpen = ref(false)

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    isServicesOpen.value = false
  }
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isServicesOpen.value = false
}

// Toggle services dropdown in mobile menu
const toggleServicesDropdown = () => {
  isServicesOpen.value = !isServicesOpen.value
}

onMounted(() => {
  // Set initial state for dropdown items using CSS selectors
  const items = dropdownContainer.value?.querySelectorAll('.dropdown-item')
  if (items && items.length > 0) {
    gsap.set(items, {
      y: '100%',
      opacity: 0
    })
  }
})

const handleDropdownEnter = () => {
  const items = dropdownContainer.value?.querySelectorAll('.dropdown-item')
  if (items && items.length > 0) {
    // Kill any existing animation
    if (currentAnimation) {
      currentAnimation.kill()
    }
    
    // Animate dropdown items in with stagger effect - matching home title
    currentAnimation = gsap.to(items, {
      y: '0%',
      opacity: 1,
      duration: 0.2,
      ease: 'power4.out',
      stagger: 0.1,
      delay: 0.1
    })
  }
}

const handleDropdownLeave = () => {
  const items = dropdownContainer.value?.querySelectorAll('.dropdown-item')
  if (items && items.length > 0) {
    // Kill any existing animation
    if (currentAnimation) {
      currentAnimation.kill()
    }
    
    // Animate dropdown items out - faster exit
    currentAnimation = gsap.to(items, {
      y: '100%',
      opacity: 0,
      duration: 0.1,
      ease: 'power2.in',
      stagger: 0.02
    })
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-navbar {
  grid-column: 5 / 9;
  grid-row: 1;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 4.5rem;
  height: 10%;
  width: 100%;
  position: fixed;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  transition: color 0.3s ease, opacity 0.3s ease;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-list:hover .nav-link:not(:hover) {
  opacity: 0.3;
}

/* Dropdown styles */
.dropdown-container {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  color: inherit;
}

.dropdown-container:hover .dropdown-arrow {
  transform: rotate(540deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 2px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  overflow: hidden;
}

.dropdown-container:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1.5rem;
  color: white;
  text-decoration: none;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  overflow: hidden;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #10a28e;
  border-left-color: #10a28e;
  padding-left: 1.75rem;
}

@media (max-width: 768px) {
  .grid-navbar {
    grid-column: 1 / 13;
  }
  
  .nav-list {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 1rem;
  }
  
  .nav-link {
    font-size: 0.85rem;
  }
  
  .dropdown-menu {
    min-width: 180px;
    left: 0;
    transform: translateX(0) translateY(-10px);
  }
  
  .dropdown-container:hover .dropdown-menu {
    transform: translateX(0) translateY(0);
  }
  
  .dropdown-item {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
}

/* Burger Menu Button - Hidden by default, shown on mobile */
.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2000;
  position: fixed;
  right: 20px;
  top: 2rem;
}

.burger-line {
  width: 2rem;
  height: 2px;
  background: white;
  border-radius: 10px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.burger-btn.active .burger-line:nth-child(1) {
  transform: rotate(45deg) translateY(9px);
}

.burger-btn.active .burger-line:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}

.burger-btn.active .burger-line:nth-child(3) {
  transform: rotate(-45deg) translateY(-9px);
}

/* Mobile Overlay */
.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1500;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.mobile-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

/* Mobile Slide-in Menu */
.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  right: -100%;
  width: 75%;
  max-width: 300px;
  height: 100vh;
  background: rgba(17, 21, 39, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  z-index: 2000;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
}

.mobile-menu.active {
  right: 0;
}

.mobile-nav-list {
  list-style: none;
  padding: 5rem 0 2rem 0;
  margin: 0;
}

.mobile-nav-list > li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.2rem 1.5rem;
  color: white;
  text-decoration: none;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #10a28e;
  padding-left: 2rem;
}

.mobile-dropdown {
  position: relative;
}

.mobile-dropdown-trigger {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mobile-dropdown-arrow {
  transition: transform 0.3s ease;
}

.mobile-dropdown-arrow.open {
  transform: rotate(180deg);
}

.mobile-dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  transition: max-height 0.3s ease;
}

.mobile-dropdown-menu.open {
  max-height: 500px;
}

.mobile-dropdown-item {
  display: block;
  padding: 1rem 1.5rem 1rem 2.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.mobile-dropdown-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #10a28e;
  border-left-color: #10a28e;
  padding-left: 2.75rem;
}

@media (max-width: 430px) {
  /* Hide desktop navigation */
  .nav-list {
    display: none;
  }

  /* Show burger button and mobile menu */
  .burger-btn {
    display: flex;
    right: 15px;
  }

  .mobile-overlay,
  .mobile-menu {
    display: block;
  }

  .grid-navbar {
    grid-column: 1 / 13;
  }
}

/* Tablet and larger mobile (431px - 768px) */
@media (min-width: 431px) and (max-width: 768px) {
  .nav-list {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 1rem;
  }
  
  .nav-link {
    font-size: 0.85rem;
  }
  
  .dropdown-menu {
    min-width: 180px;
    left: 0;
    transform: translateX(0) translateY(-10px);
  }
  
  .dropdown-container:hover .dropdown-menu {
    transform: translateX(0) translateY(0);
  }
  
  .dropdown-item {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
}
</style>
