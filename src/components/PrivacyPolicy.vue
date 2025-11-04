<template>
  <div class="terms-heading grid-item grid-terms-heading">
    <h1 class="terms-title">Privacy Policy</h1>
  </div>
  
  <div class="terms-intro grid-item grid-terms-intro">
    <p class="intro-text">
      DotWhat is fully committed to protecting your privacy using technology that gives you a safe online experience.<br><br>
      This Privacy Policy applies to DotWhat website (the 'Website') and governs data collection and usage. By using the Website, you consent to the data practices described in this statement.
    </p>
  </div>
  
  <div class="terms-content grid-item grid-terms-content">
    <h2 class="content-header">Data Collection</h2>
    <div class="content-text">
      <p>DotWhat collects personally identifiable information when users submit comments, register and are logged into the Website. We also collect anonymous demographic information, which is not unique to you.</p>
      <p>There is also information about your computer hardware and software that is automatically collected by the Website. This information can include your IP address, browser type, domain names, access times and referring website addresses. This information is used by DotWhat for the operation of the Website, to maintain quality of the service, and to provide general statistics regarding use of the Website. DotWhat tracks the pages that users of the Website visit within the Website.</p>
    </div>
    
    <h2 class="content-header">Use of cookies</h2>
    <div class="content-text">
      <p>We use cookies when you visit our site. There are four main types of cookies – here's how and why we use them:</p>
      <p><strong>Site functionality cookies</strong> – these cookies allow you to navigate the site and use our features, such as "Add to Bag" and "Save for Later".</p>
      <p><strong>Site analytics cookies</strong> – these cookies allow us to measure and analyse how our customers use the site, to improve both its functionality and your shopping experience.</p>
      <p><strong>Customer preference cookies</strong> – when you are browsing on DotWhat.com, these cookies will remember your preferences (like your language or location), so we can make your shopping experience as seamless as possible, and more personal to you.</p>
      <p><strong>Targeting or advertising cookies</strong> – these cookies are used to deliver ads relevant to you. They also limit the number of times that you see an ad and help us measure the effectiveness of our marketing campaigns.</p>
      <p>By using our site, you agree to us placing these sorts of cookies on your device and accessing them when you visit the site in the future. If you want to delete any cookies that are already on your computer, the "help" section in your browser should provide instructions on how to locate the file or directory that stores cookies. Please note that by deleting or disabling future cookies, your user experience may be affected and you might not be able to take advantage of certain functions of our site, and the complete DotWhat user experience that we pride ourselves on providing our customers.</p>
    </div>
    
    <h2 class="content-header">Use of your personal information</h2>
    <div class="content-text">
      <p>DotWhat does not sell, rent or lease its customer or user lists to third parties. We may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information is not transferred to the third party. In addition, we may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services, and they are required to maintain the confidentiality of your information.</p>
    </div>
    
    <h2 class="content-header">Security of your personal information</h2>
    <div class="content-text">
      <p>Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through the Website, this information may be collected and used by others although DotWhat does make endeavours to ensure your personally identifiable data is not intercepted.</p>
      <p>The Website secures your personal information from unauthorised access, use or disclosure. The Website secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorised access, use or disclosure. If your personal information is transmitted across the internet from the Website, it is protected through the use the Secure Socket Layer (SSL) protocol.</p>
      <p>DotWhat will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on DotWhat; (b) protect and defend the rights or property of DotWhat; and, (c) act under exigent circumstances to protect the personal safety of users of the Website, or the public.</p>
    </div>
    
    <h2 class="content-header">Third party websites</h2>
    <div class="content-text">
      <p>We encourage you to review the privacy statements of websites you choose to link to from the Website so that you can understand how those websites collect, use and share your information. DotWhat is not responsible for the privacy policies or other content on third party websites.</p>
    </div>
    
    <h2 class="content-header">Changes to this Privacy Policy</h2>
    <div class="content-text">
      <p>DotWhat may occasionally update this Privacy Policy. We encourage you to periodically review this Privacy Policy to be informed of how DotWhat is protecting your information. If you believe that we have not adhered to this Privacy Policy, please contact us. We will use commercially reasonable efforts to promptly determine and remedy the problem.</p>
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

