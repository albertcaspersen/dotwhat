<template>
  <div class="contact-button grid-item grid-contact">
    <router-link to="/contact" class="contact-btn" @click="scrollToTop">Contact</router-link>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToTop = () => {
  // Scroll to top when navigating to contact page
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  })
}
</script>

<style scoped>
.contact-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-contact {
  grid-column: 12 / 13;
  grid-row: 1;
  position: relative;
  z-index: 10;
}

.contact-btn {
  background: #10a28e;
  
  color: white;
  padding: 0.8rem 1.5rem;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px;
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  /*box-shadow: 0 0 8px rgba(2,159,159,0.8);*/
  

}

.contact-btn:hover {
  background: rgb(26, 139, 122);
  color: #ffffff;
}

@media (max-width: 768px) {
  .grid-contact {
    grid-column: 10 / 13;
    grid-row: 1;
  }

  .contact-btn {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 430px) {
  .contact-button {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .grid-contact {
    width: 100%;
    position: static;
  }

  .contact-btn {
    width: calc(100% - 30px);
    margin: 0 15px 15px 15px;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 4px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(16, 162, 142, 0.3);
  }

  .contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.4), 0 6px 25px rgba(16, 162, 142, 0.4);
  }
}
</style>
