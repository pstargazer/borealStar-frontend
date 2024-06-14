
<template>
  <header class="dark:bg-dark-bg">
    <div class="container header-inner">
      <router-link to="/" class="logo">
        <img src="/src/assets/svg/logo_light.svg" v-if="true" alt="" />
        <img src="/src/assets/svg/logo_dark.svg" v-else="true" alt="" />
      </router-link>
      <nav>
        <!-- <SearchInput/> -->
        <!-- <search-input/> -->
        <router-link to="/spots">Точки</router-link>
        <router-link v-if="isAuth" to="/profile" class="profile">
          профиль
          <img src="" class="avatar" alt="">
        </router-link>
        <router-link v-else="isAuth" to="/login" class="profile">
          Войти
          <svg  class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
        </router-link>


          <!-- <p></p> -->
        <!-- theme selector -->
        <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <div id="theme-toggle-light-icon">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
            </svg>
            </div>
            <div id="theme-toggle-dark-icon">
              <svg  class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
              </svg>

            </div>
        </button>
        <!-- theme selector end -->

      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">


header {
  @apply p-5 
  bshadow-light
  dark:bshadow-dark;
}


.header-inner{
  /* font-family: "Kelly Slab"; */
  /* font-size:  */
  @apply text-3xl flex justify-between font-kelly;
}

nav {
  @apply flex gap-7;
}

nav > * {
  @apply 
  flex
  items-center;

  @apply focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700;
}

nav .profile {
  /* align-items: center; */
  @apply 
  flex
  gap-3
  items-center;
  $av-side: 1em;
  // height: $av-side;
  // width: $av-side;
}

nav .avatar {
  /* align-items: center; */
  @apply 
  flex
  gap-3
  items-center;
  $av-side: 1em;
  height: $av-side;
  width: $av-side;
  @apply bg-gray-400 rounded;
}
</style>

<script>
import "./inputs/SearchInput.vue";
import { useAuthStore } from "/src/stores/auth.js";
const { isAuth } = useAuthStore;
</script>
