import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginErrorView from '../views/LoginErrorView.vue'
import LoginView from '../views/LoginView.vue'
import VocaMainView from '../views/VocaMainView.vue'
import SettingView from '../views/SettingView.vue'
import DailyRankView from '../views/DailyRankView.vue'
import VocaAllView from '../views/VocaAllView.vue'
import SettingDetailView from '../views/SettingDetailView'
import VocaMeaningView from '../views/VocaMeaningView'
import SplashView from '../views/SplashView'

const routes = [
  {
    path: '/vocamain',
    name: 'vocamain',
    component: VocaMainView

  },

  {
    path: '/dailyrankview',
    name: 'dailyrankview',
    component: DailyRankView

  },

  {
    path: '/vocaall',
    name: 'vocaall',
    component: VocaAllView
  },
  {
    path: '/loginerror',
    name: 'loginerror',
    component: LoginErrorView
  },
  {
    path: '/vocameaning',
    name: 'vocameaning',
    component: VocaMeaningView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/splash',
    name: 'splash',
    component: SplashView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/setting',
    name: 'setting',
    component: SettingView
  },
  {
    path: '/setting/detail',
    name: 'settingdetail',
    component: SettingDetailView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
