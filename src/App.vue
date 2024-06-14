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

</style>
