<template>
  <div class="terms-heading grid-item grid-terms-heading">
    <h1 class="terms-title">Terms of use</h1>
  </div>
  
  <div class="terms-intro grid-item grid-terms-intro">
    <p class="intro-text">
      Please read these Terms of Use ("Terms", "Terms of Service") carefully before using the www.dotwhat.com website (the "Service") operated by DotWhat ("us", "we", or "our").<br><br>
      Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.<br><br>
      By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
    </p>
  </div>
  
  <div class="terms-content grid-item grid-terms-content">
    <h2 class="content-header">Links To Other Web Sites</h2>
    <div class="content-text">
      <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by DotWhat</p>
      <p>DotWhat has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that DotWhat shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
      <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
    </div>
    
    <h2 class="content-header">Governing Law</h2>
    <div class="content-text">
      <p>These Terms shall be governed and construed in accordance with the laws of United Kingdom, without regard to its conflict of law provisions.</p>
      <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
    </div>
    
    <h2 class="content-header">Changes</h2>
    <div class="content-text">
      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
      <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
    </div>
    
    <h2 class="content-header">Contact Us</h2>
    <div class="content-text">
      <p>If you have any questions about these Terms, please contact us.</p>
    </div>
  </div>
  
  <div class="terms-cta grid-item grid-terms-cta">
  </div>
</template>

<script setup>
// No additional logic needed
</script>

<style scoped>
.grid-terms-heading {
  grid-column: 2 / 8;
  grid-row: 1;
  padding-top: 20vh;
 
}

.terms-title {
  color: rgb(255, 255, 255);
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
}

.grid-terms-intro {
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

.grid-terms-content {
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

.grid-terms-cta {
  grid-column: 2 / 10;
  grid-row: 4;
  margin-top: 0rem;
  margin-bottom: 4rem;
}

.line-wrapper {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}

.terms-section {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 0;
  margin-bottom: 0;
  
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 3rem 60px;
}

.terms-section:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.section-title {
  grid-column: 2 / 6;
  color: white;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 0 1rem 0;
}

.section-content {
  grid-column: 7 / 11;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
}

.section-content p {
  margin-bottom: 1.5rem;
}

.section-content p:last-child {
  margin-bottom: 0;
}

.cta-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
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
  border: 2px solid #10a28e;
  color: white;
  padding: 1rem 2.5rem;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.cta-button:hover {
  background: white;
  color: #0A1122;
}

@media (max-width: 768px) {
  .grid-terms-heading {
    grid-column: 1 / 13;
  }
  
  .grid-terms-intro,
  .grid-terms-content,
  .grid-terms-cta {
    grid-column: 1 / 13;
  }
  
  .terms-title {
    font-size: 2rem;
  }
  
  .grid-terms-content {
    left: 50%;
    right: 50%;
    width: 100vw;
    margin-left: -50vw;
    margin-right: -50vw;
  }
  
  .terms-section {
    padding: 2rem 20px;
  }
  
  .section-title {
    grid-column: 1 / 13;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .section-content {
    grid-column: 1 / 13;
    font-size: 0.9rem;
  }
  
  .cta-card {
    padding: 2rem 1.5rem;
  }
  
  .cta-card h2 {
    font-size: 1.5rem;
  }
}
</style>
