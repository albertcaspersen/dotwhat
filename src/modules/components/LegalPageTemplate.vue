<template>
  <div class="legal-heading grid-item grid-legal-heading">
    <h1 class="legal-title">{{ title }}</h1>
  </div>
  
  <div class="legal-intro grid-item grid-legal-intro">
    <p class="intro-text" v-html="introText"></p>
  </div>
  
  <div class="legal-content grid-item grid-legal-content">
    <template v-for="(section, index) in sections" :key="index">
      <h2 class="content-header">{{ section.title }}</h2>
      <div class="content-text">
        <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex" v-html="paragraph"></p>
      </div>
    </template>
  </div>
  
  <div class="legal-cta grid-item grid-legal-cta">
    <slot name="cta"></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  introText: {
    type: String,
    required: true
  },
  sections: {
    type: Array,
    required: true,
    // Array of { title: string, paragraphs: string[] }
  }
})
</script>

<style scoped>
.grid-legal-heading {
  grid-column: 2 / 8;
  grid-row: 1;
  padding-top: 20vh;
}

.legal-title {
  color: rgb(255, 255, 255);
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
}

.grid-legal-intro {
  grid-column: 1 / 13;
  grid-row: 2;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.intro-text {
  grid-column: 2 / 7;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgb(183, 184, 184);
  margin: 0;
}

.grid-legal-content {
  grid-column: 1 / 13;
  grid-row: 3;
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
  margin-left: -50vw;
  margin-right: -50vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 0 60px;
}

.content-header {
  grid-column: 2 / 6;
  color: white;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 4rem;
}

.content-header:first-of-type {
  margin-top: 4rem;
}

.content-header:not(:first-of-type) {
  margin-top: 6rem;
}

.content-text {
  grid-column: 2 / 8;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
}

.content-text p {
  margin-bottom: 1.5rem;
}

.content-text p:last-child {
  margin-bottom: 0;
}

.grid-legal-cta {
  grid-column: 2 / 10;
  grid-row: 4;
  margin-top: 0rem;
  margin-bottom: 4rem;
}

@media (max-width: 768px) {
  .grid-legal-heading {
    grid-column: 1 / 13;
  }
  
  .grid-legal-intro,
  .grid-legal-content,
  .grid-legal-cta {
    grid-column: 1 / 13;
  }
  
  .legal-title {
    font-size: 2rem;
  }
  
  .grid-legal-content {
    left: 50%;
    right: 50%;
    width: 100vw;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: 0 20px;
  }
  
  .intro-text {
    grid-column: 1 / 13;
  }
  
  .content-header {
    grid-column: 1 / 13;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .content-text {
    grid-column: 1 / 13;
    font-size: 0.9rem;
  }
}
</style>

