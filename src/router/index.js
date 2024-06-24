import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

import routes from "./routes";

// Vue.config.productionTip = false

const router = createRouter({
  // history: createWebHistory("/bs_frontend"),
  history: createWebHistory(),
  routes: routes
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
