import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import DocumentsView from '../views/DocumentsView.vue'
import QuestionnaireView from '../views/QuestionnaireView.vue'
import PaymentView from '../views/PaymentView.vue'

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
    path: '/questionnaire',
    name: 'questionnaire',
    component: QuestionnaireView
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
