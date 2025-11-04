import { createRouter, createWebHistory } from 'vue-router'
import Contact from '../components/Contact.vue'
import FAQ from '../components/FAQ.vue'
import Services from '../components/Services.vue'
import Clients from '../components/Clients.vue'
import TermsOfUse from '../components/TermsOfUse.vue'
import NewsPage from '../components/NewsPage.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import DomainAcquisitions from '../components/DomainAcquisitions.vue'

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
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0, behavior: 'instant' }
  }
})

export default router
