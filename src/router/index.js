import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import DocumentsView from '../views/DocumentsView.vue'
import PaymentView from '../views/PaymentView.vue'
import OnlineApplication from '../views/OnlineApplication.vue'
import ApplyDocuments from '../views/ApplyDocuments.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/documents',
    name: 'documents',
    component: DocumentsView
  },
  {
    path: '/apply-doc',
    name: 'apply-doc',
    component: ApplyDocuments
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentView
  },
  {
    path: '/online-application',
    name: 'online-application',
    component: OnlineApplication
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
