<script setup>

function checktheme() {
// check theme 


    // themes
    let themeToggleDarkIcon = document.querySelector('#theme-toggle-dark-icon');
    let themeToggleLightIcon = document.querySelector('#theme-toggle-light-icon');
    console.log(themeToggleLightIcon);

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        // if day
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');

    } else {
        // if night
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    }

    let themeToggleBtn = document.getElementById('theme-toggle');
    console.log(themeToggleBtn);

    themeToggleBtn.addEventListener('click', function() {

        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }

        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }
        
    });
    // theme settings end
}

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

    // checktheme();
    
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
