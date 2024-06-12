<script setup>

import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})

import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import WeatherCard from './components/WeatherCard.vue'
import AppHeader from './components/AppHeader.vue'

/* eslint disable */




</script>



<template>
  <AppHeader />
  <Suspense>
        <!-- component with nested async dependencies -->
        <template #default>
          <RouterView />
        </template>
        <template #fallback>
          <div class="flex flex-col align-center">
          Loading...
          </div>
        </template>
        <!-- loading state via #fallback slot -->
        
  </Suspense>
</template>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

body {
  font-size: 15px;
  // color: white;
  @apply 
  text-black 
  bg-light-bg 
  dark:bg-dark-bg 
  dark:text-white;
}

.clickable {
  // TODO: make outlines
}

h1 {
  font-size: 3em;
}
</style>
