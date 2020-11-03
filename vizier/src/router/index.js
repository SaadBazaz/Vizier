import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SettingsDialog from '../components/SettingsDialog.vue'
import EmptyRouterView from '../views/EmptyRouterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: EmptyRouterView,
    children: [{
      name: 'nested',
      path: '',
      component: Home
    }, {
      name: 'nested.dialog',
      path: 'dialog',
      components: {
          default: Home,
          dialog: SettingsDialog
      }
  }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsDialog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
