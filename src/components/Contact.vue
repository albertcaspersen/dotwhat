<template>
    
  <div class="contact-info grid-item grid-contact-info">
    <div class="contact-card">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Reach out to discuss your domain needs.</p>
      
      <div class="contact-details">
        <div class="contact-item">
          <span class="label">Email:</span>
          <a href="mailto:info@dotwhat.com">info@dotwhat.com</a>
        </div>
        <div class="contact-item">
          <span class="label">Phone:</span>
          <a href="tel:+45123456789">+45 12 34 56 789</a>
        </div>
        <div class="contact-item">
          <span class="label">Address:</span>
          <span>Ewaldsgade 7-9, 2200 Copenhagen N</span>
        </div>
      </div>
      
      <div class="social-links">
        <h3>Connect with us</h3>
        <div class="social-icons">
          <a href="https://x.com/dotwhatcom" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/pics/X_logo_2023_original.svg" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/company/dotwhat/?originalSubdomain=dk" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/pics/free-linkedin-icon-112-thumb.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="contact-form-container grid-item grid-contact-form">
    <form class="contact-form" @submit.prevent="handleSubmit">
      <h2>Send us a Message</h2>
      
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" rows="6" required></textarea>
      </div>
      
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>
  
  <div class="maps-container grid-item grid-contact-maps">
    <div class="maps-card">
      <h2>Find Us</h2>
      <p>Ewaldsgade 7-9, 2200 Copenhagen N</p>
      <div class="google-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.8505!2d12.5627!3d55.6894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253b7b7e3cbcb%3A0x3f01a944e8c49f8f!2sEwaldsgade%207-9%2C%202200%20K%C3%B8benhavn%20N!5e0!3m2!1sda!2sdk!4v1234567890123!5m2!1sda!2sdk"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Maps - Ewaldsgade 7-9, 2200 Copenhagen N">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value);
  alert('Thank you for your message! We will get back to you soon.');
  form.value = { name: '', email: '', message: '' };
};
</script>

<style scoped>


.grid-contact-info {
  grid-column: 2 / 7;
  grid-row: 2;
  margin-top: 8rem;
}

.grid-contact-form {
  grid-column: 7 / 12;
  grid-row: 2;
  margin-top: 8rem;
}

.grid-contact-maps {
  grid-column: 2 / 12;
  grid-row: 3;
  margin-top: 0rem;
  margin-bottom: 4rem;
}

.contact-heading {
  color: rgb(255, 255, 255);
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 3rem;
  font-weight: 400;

}

.line-wrapper {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}

.contact-card {
  backdrop-filter: blur(20px);
  border-radius: 2px;
  padding: 2rem;
  color: white;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}

.contact-card h2 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.contact-card p {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  margin-bottom: 8rem;
  opacity: 0.8;
}

.contact-details {
  margin-bottom: 2rem;
}

.contact-item {
  margin-bottom: 1rem;
}

.contact-item .label {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-weight: 600;
  margin-right: 0.5rem;
}

.contact-item a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: white;
}

.contact-item span {
  color: #ffffff;
}

.social-links h3 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 8.3rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icons a {
  display: inline-block;
  transition: transform 0.3s ease;
}

.social-icons a:hover {
  transform: scale(1.1);
}

.social-icons img {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
}

.contact-form-container {
  display: flex;
  align-items: flex-start;
}

.contact-form {
  border-radius: 2px;
  padding: 2rem;
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}

.contact-form h2 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: white;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  color: white;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  color: white;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.submit-btn {
  background: #10a28e;
  border: none;
  color: white;
  padding: 1rem 2rem;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px;
  width: 100%;
}

.submit-btn:hover {
  background: rgb(26, 139, 122);
  color: #ffffff;
}

.maps-card {
  backdrop-filter: blur(20px);
  border-radius: 2px;
  padding: 2rem;
  color: white;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}

.maps-card h2 {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.maps-card p {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.google-maps {
  width: 100%;
  height: 400px;
  border-radius: 2px;
  overflow: hidden;
}

.google-maps iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 768px) {
  .grid-contact-heading {
    grid-column: 1 / 13;
  }
  
  .grid-contact-info,
  .grid-contact-form {
    grid-column: 1 / 13;
    grid-row: auto;
  }
  
  .grid-contact-maps {
    grid-column: 1 / 13;
  }
  
  .contact-heading {
    font-size: 2rem;
  }
  
  .google-maps {
    height: 300px;
  }
}

</style>

