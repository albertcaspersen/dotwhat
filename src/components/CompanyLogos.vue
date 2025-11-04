<template>
  <div class="company-logos-container">
    <div class="logos-track">
      <div class="logo-item" v-for="(logo, index) in logos" :key="`logo-${index}`">
        <img :src="logo.url" :alt="logo.name" :class="`company-logo logo-${logo.name.toLowerCase().replace(/\s+/g, '-')}`" />
      </div>
      <!-- Duplicate for seamless loop -->
      <div class="logo-item" v-for="(logo, index) in logos" :key="`logo-duplicate-${index}`">
        <img :src="logo.url" :alt="logo.name" :class="`company-logo logo-${logo.name.toLowerCase().replace(/\s+/g, '-')}`" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Firma logoer - placeholder URLs
const logos = ref([
  {
    name: 'ALK',
    url: 'https://www.alk.net/themes/alk_theme/images/alk_logo.svg'
  },
  {
    name: 'Atos',
    url: 'https://1000logos.net/wp-content/uploads/2020/08/Atos-Logo.png'
  },
  {
    name: 'Lumi',
    url: 'https://lumiglobal.com/hubfs/Knowledge%20Base%20Import/logo_Lumi_6-1.png'
  },
  {
    name: 'AO.com',
    url: 'https://procurementforhousing.co.uk/wp-content/uploads/2022/06/AO_Logo_ON_Green_RGB-300x300.png'
  },
  {
    name: 'COWI',
    url: 'https://lind-ravnholt.dk/wp-content/uploads/2017/04/Cowi-logo.png'
  },
  {
    name: 'Just Eat',
    url: 'https://brandlogos.net/wp-content/uploads/2021/12/just_eat-brandlogo.net_-512x512.png'
  },
  {
    name: 'Logo',
    url: '/src/assets/logos/logo.svg'
  },
  {
    name: 'Vestel',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Vestel_logo.svg/2560px-Vestel_logo.svg.png'
  },
  {
    name: 'IDNA Group',
    url: 'https://idnagroup.com/wp-content/uploads/2018/07/logoark-15-04-16-13-1024x513.png'
  },
  {
    name: 'World Gold Council',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/World_Gold_Council_logo.svg/2560px-World_Gold_Council_logo.svg.png'
  }
])
</script>

<style scoped>
.company-logos-container {
  grid-column: 1 / 13;
  grid-row: 3;
  height: 15vh;
  overflow: hidden;
  position: relative;
  margin: 14rem 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.logos-track {
  display: flex;
  align-items: center;
  animation: scroll-logos 30s linear infinite;
  gap: 5rem;
  padding: 0 0rem;
}

.logo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 120px;
  min-width: 120px;
  max-width: 120px;
}

.company-logo {
  height: 6vh;
  width: 120px;
  object-fit: contain;
  filter: brightness(0) invert(1) opacity(0.5); /* Lysere end baggrundsfarven */
  transition: opacity 0.3s ease;
}


/* Individuelle logo klasser */
.logo-alk {
  height: 6vh;
  width: 120px;
}

.logo-atos {
  height: 6vh;
  width: 120px;
}

.logo-lumi {
  height: 6vh;
  width: 120px;
}

.logo-ao.com {
  height: 44vh;
  width: 810px;
}

.logo-cowi {
  height: 6vh;
  width: 120px;
}

.logo-just-eat {
  height: 15vh;
  width: 200px;
}

.logo-logo {
  height: 4vh;
  width: 200px;
}

.logo-vestel {
  height: 6vh;
  width: 120px;
}

.logo-idna-group {
  height: 180vh;
  width: 250px;
}

.logo-world-gold-council {
  height: 6vh;
  width: 120px;
}

/* Animation */
@keyframes scroll-logos {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}


/* Responsive */
@media (max-width: 768px) {
  .company-logos-container {
    height: 12vh;
    margin-top: 3rem;
  }
  
  .logo-item {
    min-width: 80px;
    max-width: 80px;
    width: 80px;
    height: 4vh;
  }
  
  .company-logo {
    height: 4vh;
    width: 80px;
  }
  
  .logos-track {
    gap: 2rem;
    animation: scroll-logos 20s linear infinite;
  }
}

@media (max-width: 430px) {
  .company-logos-container {
    height: 12vh;
    margin-top: 2rem;
    margin-bottom: 15rem;
  }

  .logo-item {
    min-width: 100px;
    max-width: 100px;
    width: 100px;
    height: 5vh;
  }

  .company-logo {
    height: 6vh;
    width: 100px;
  }

  .logos-track {
    gap: 2rem;
    animation: scroll-logos 10s linear infinite;
  }
}
</style>
