<template>
  <div class="services-page grid-item grid-services-heading">
    <h1 class="services-heading">
      <span class="line-wrapper"><span class="line">Our Services</span></span>
    </h1>
  </div>
  
  <div class="services-content grid-item grid-services-content">
    <div class="services-grid">
      <div class="service-card">
        <h2>Domain Acquisitions</h2>
        <p>Industry's highest success rates in acquiring domains.</p>
      </div>
      
      <div class="service-card">
        <h2>Domain Evaluations</h2>
        <p>Accurate evaluation for successful domain sales.</p>
      </div>
      
      <div class="service-card">
        <h2>Portfolio Optimisation</h2>
        <p>Reduce annual domain fees through rigorous negotiations.</p>
      </div>
      
      <div class="service-card">
        <h2>Domain Strategy</h2>
        <p>Domain strategies aligned with your business objectives.</p>
      </div>
      
      <div class="service-card">
        <h2>Intellectual Property</h2>
        <p>Protect digital assets with IP services and trademark monitoring.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Services page component
</script>

<style scoped>
.services-page {
  grid-column: 1 / 13;
  grid-row: 1;
  margin-top: 15vh;
  margin-bottom: 5vh;
}

.services-heading {
  color: rgb(255, 255, 255);
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  text-align: center;
}

.line-wrapper {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}

.services-content {
  grid-column: 1 / 13;
  grid-row: 2;
  margin-bottom: 10vh;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  padding: 2rem 0;
}

.service-card {
  grid-column: span 4;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 2rem;
  color: white;
}

.service-card h2 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: white;
}

.service-card p {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .service-card {
    grid-column: span 4;
  }
  
  .services-heading {
    font-size: 2rem;
  }
}
</style>

