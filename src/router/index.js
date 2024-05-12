import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import { watch } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
      title: "Dashboard"
    },
    {
      path: '/error',
      name: 'error',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ErrorView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component:  () => import('/src/views/TestCards.vue')
    }
  ]
})

router.afterEach((to, from, failure) => {
  if (failure) {
    console.log('failed navigation', failure)
    router.replace('/error')
  }
  console.log(router.currentRoute);
  // document.title =+ router.currentRoute.name.title 
  // document.title = router.currentRoute.value.title
  // document.title = router.title
  // document.title = router.getRoutes[0].title
  

})
// watch(router.title, val => {
  // document.title = 'lorem'//val
// })

export default router
