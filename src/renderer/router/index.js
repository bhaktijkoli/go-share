import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home/Home').default
    },
    {
      path: '/portal/create',
      name: 'portal-create',
      component: require('@/components/PortalCreate/PortalCreate').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
