import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Imjoy from '@/components/Imjoy'
import About from '@/components/About'
import FAQ from '@/components/FAQ'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: window.location.pathName,
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/:)',
      name: ':)',
      component: Imjoy
    },
    {
      path: '/imjoy',
      name: 'Imjoy',
      component: Imjoy
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
