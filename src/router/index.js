import { createRouter, createWebHistory } from 'vue-router'
import Contact from '../components/Contact.vue'
import FAQ from '../components/FAQ.vue'
import Services from '../components/Services.vue'
import Clients from '../components/Clients.vue'
import TermsOfUse from '../components/TermsOfUse.vue'
import NewsPage from '../components/NewsPage.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import DomainAcquisitions from '../components/DomainAcquisitions.vue'

// V2 Components (using new modules)
import HomeV2 from '../components/HomeV2.vue'
import ClientsV2 from '../components/ClientsV2.vue'
import FAQV2 from '../components/FAQV2.vue'
import NewsPageV2 from '../components/NewsPageV2.vue'
import ContactV2 from '../components/ContactV2.vue'
import TermsOfUseV2 from '../components/TermsOfUseV2.vue'
import PrivacyPolicyV2 from '../components/PrivacyPolicyV2.vue'
import DomainAcquisitionsV2 from '../components/DomainAcquisitionsV2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: TermsOfUse
    },
    {
      path: '/news',
      name: 'news',
      component: NewsPage
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/services/domain-acquisitions',
      name: 'domain-acquisitions',
      component: DomainAcquisitions
    },
    // V2 Routes (using new modules)
    {
      path: '/home-v2',
      name: 'home-v2',
      component: HomeV2
    },
    {
      path: '/clients-v2',
      name: 'clients-v2',
      component: ClientsV2
    },
    {
      path: '/faq-v2',
      name: 'faq-v2',
      component: FAQV2
    },
    {
      path: '/news-v2',
      name: 'news-v2',
      component: NewsPageV2
    },
    {
      path: '/contact-v2',
      name: 'contact-v2',
      component: ContactV2
    },
    {
      path: '/terms-of-use-v2',
      name: 'terms-of-use-v2',
      component: TermsOfUseV2
    },
    {
      path: '/privacy-policy-v2',
      name: 'privacy-policy-v2',
      component: PrivacyPolicyV2
    },
    {
      path: '/services/domain-acquisitions-v2',
      name: 'domain-acquisitions-v2',
      component: DomainAcquisitionsV2
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0, behavior: 'instant' }
  }
})

export default router
