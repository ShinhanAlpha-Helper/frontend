import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginErrorView from '../views/LoginErrorView.vue'
import LoginView from '../views/LoginView.vue'
import VocaMainView from '../views/VocaMainView.vue'
import SettingView from '../views/SettingView.vue'
import DailyRankView from '../views/DailyRankView.vue'
import VocaAllView from '../views/VocaAllView.vue'
import SettingDetailView from '../views/SettingDetailView.vue'
import VocaMeaningView from '../views/VocaMeaningView.vue'
import SigninView from '../views/SignupView.vue'
import VocaLangView from '../views/VocaLangView.vue'
import BookmarkView from '../views/BookmarkView.vue'

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: SigninView

  },

  {
    path: '/dailyrank',
    name: 'dailyrank',
    component: DailyRankView

  },

  {
    path: '/vocamain',
    name: 'vocamain',
    component: VocaMainView

  },
  {
    path: '/vocaall',
    name: 'vocaall',
    component: VocaAllView
  },
  {
    path: '/bookmark',
    name: 'bookmark',
    component: BookmarkView
  },
  {
    path: '/vocameaning',
    name: 'vocameaning',
    component: VocaMeaningView
  },
  {
    path: '/vocalang',
    name: 'vocalang',
    component: VocaLangView
  },

  {
    path: '/loginerror',
    name: 'loginerror',
    component: LoginErrorView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
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
