import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import { nextTick } from 'vue'

const router = createRouter({
  // history: createWebHistory("/bs_frontend"),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
      meta: {
        title: "Dashboard"
      }
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/ErrorView.vue'),
      meta: {
        title: 'Error'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About'
      }
    },
    {
      path: '/login',
      name: 'login',
      component:  () => import('/src/views/Auth/LoginView.vue'),
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/register',
      name: 'register',
      component:  () => import('/src/views/Auth/RegisterView.vue'),
      meta: {
        title: 'register'
      }
    },
    {
      path: '/spots',
      name: "spots",
      component: () => import("/src/views/Spot/IndexView.vue"),
      meta: {
        title: 'Spots'
      }
    },
    {
      path: '/profile',
      name: "profile",
      component: () => import("/src/views/ProfileView.vue"),
      meta: {
        title: 'Profile'
      }
    }
  ]
})

router.afterEach((to, from, failure) => {
  if (failure) {
    console.log('failed navigation', failure)
    // router.replace('/error')
  }
  // console.log(router.currentRoute);

  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  nextTick(() => {
    document.title = to.meta.title || import.meta.env.VITE_APP_NAME;
  });
})

export default router
