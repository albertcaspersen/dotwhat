<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="footer-title">
          <img src="/src/assets/pics/dotwhat_logo.png" alt="DOT•WHAT" class="footer-logo" />
        </div>
        <p class="footer-description">
          Independent domain consultancy helping companies acquire, sell and optimise their domain portfolios for better returns & higher performance.
        </p>
      </div>
      
      <div class="footer-section">
        <h4 class="footer-heading">Our Services</h4>
        <ul class="footer-links">
          <li><a href="#" class="footer-link">Domain Acquisitions</a></li>
          <li><a href="#" class="footer-link">Domain Evaluations</a></li>
          <li><a href="#" class="footer-link">Portfolio Optimisation</a></li>
          <li><a href="#" class="footer-link">Domain Strategy</a></li>
          <li><a href="#" class="footer-link">Intellectual Property</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4 class="footer-heading">Company</h4>
        <ul class="footer-links">
          <li><a href="#" class="footer-link">About</a></li>
          <li><a href="#" class="footer-link">Clients</a></li>
          <li><router-link to="/news" class="footer-link">News</router-link></li>
          <li><a href="#" class="footer-link">FAQ</a></li>
          <li><router-link to="/terms-of-use" class="footer-link">Terms of use</router-link></li>
          <li><router-link to="/privacy-policy" class="footer-link">Privacy Policy</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4 class="footer-heading">Contact</h4>
        <div class="contact-info">
          <p class="contact-item">hello@dotwhat.com</p>
          <p class="contact-item">+45 22 26 19 41</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/company/dotwhat/?originalSubdomain=dk" target="_blank" rel="noopener noreferrer" class="social-link">
              <img src="/src/assets/pics/free-linkedin-icon-112-thumb.png" alt="LinkedIn" class="social-icon" />
            </a>
            <a href="https://x.com/dotwhatcom" target="_blank" rel="noopener noreferrer" class="social-link">
              <img src="/src/assets/pics/X_logo_2023_original.svg" alt="X" class="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="copyright">
        <img src="/src/assets/pics/dotwhat_logo.png" alt="DOT•WHAT" class="footer-logo-small" />
        <span>© 2025. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional logic needed
</script>

<style scoped>
.footer {
  background: #010513;
  color: white;
  padding: 4rem 0 2rem 0;
  margin-top: 8rem;
}

.footer-content {
  max-width: 100%;
  margin: 0 auto;
  margin-left: 60px;
  margin-right: 60px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-section:nth-child(1) {
  grid-column: 1 / 4;
}

.footer-section:nth-child(2) {
  grid-column: 5 / 7;
}

.footer-section:nth-child(3) {
  grid-column: 7 / 9;
}

.footer-section:nth-child(4) {
  grid-column: 9 / 13;
}

.footer-title {
  margin: 0 0 1rem 0;
}

.footer-logo {
  height: 2rem;
  width: auto;
}

.bullet {
  margin: 0 0.2em;
  opacity: 0.7;
  color: #10a28e;
}

.italic {
  font-style: italic;
}

.footer-heading {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 1.5rem 0;
  color: white;
}

.footer-description {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: white;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-item {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: inline-block;
  transition: opacity 0.3s ease;
}

.social-icon {
  width: 1.5rem;
  height: 1.5rem;
  filter: brightness(0) invert(1);
  transition: opacity 0.3s ease;
}

.social-link:hover .social-icon {
  opacity: 0.7;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
  padding-top: 2rem;
  text-align: center;
}

.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.footer-logo-small {
  height: 1rem;
  width: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-left: 20px;
    margin-right: 20px;
  }
  
  .footer-section:nth-child(1),
  .footer-section:nth-child(2),
  .footer-section:nth-child(3),
  .footer-section:nth-child(4) {
    grid-column: 1;
  }
  
  .footer {
    padding: 3rem 0 2rem 0;
  }
}

@media (max-width: 430px) {
  .footer-content {
    margin-left: 15px;
    margin-right: 15px;
    gap: 1.5rem;
  }

  .footer {
    padding: 2rem 0 1.5rem 0;
    margin-top: 6rem;
    padding-bottom: 80px; /* Add padding for fixed Contact button */
  }

  .footer-heading {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .footer-description,
  .footer-link,
  .contact-item {
    font-size: 0.85rem;
  }

  .footer-logo {
    height: 1.75rem;
  }

  .footer-logo-small {
    height: 0.9rem;
  }

  .copyright {
    font-size: 0.75rem;
  }
}
</style>
