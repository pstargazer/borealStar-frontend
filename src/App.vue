<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import WeatherCard from './components/WeatherCard.vue'
import Header from './components/Header.vue'

/* eslint disable */
// localStorage.theme = 'dark'
// localStorage.theme = 'light'
localStorage.setItem('color-theme', 'dark')
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
</script>



<template>
  <Header />
  <RouterView />
</template>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

body {
  font-size: 15px;
  color: white;
}

h1 {
  font-size: 3em;
}
</style>
