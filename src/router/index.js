import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '@/components/AboutUs'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/ContactUs'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/contactus',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      name: 'contact',
      component: PageNotFound
    }
    
  ]
})
