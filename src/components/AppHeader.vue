<script setup>
// import "./inputs/SearchInput.vue";
import { useAuthStore } from "/src/stores/auth.js";
const { isAuth } = useAuthStore;
import ThemeSelector from "/src/components/inputs/ThemeSelector.vue";
import SearchInput from "/src/components/inputs/SearchInput.vue";
import { defineAsyncComponent, onMounted } from 'vue'

const {ThemeSelectorA} = defineAsyncComponent({
  loader: ()=> import("/src/components/inputs/ThemeSelector.vue"),
  loadingComponent: ThemeSelector
})



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

onMounted(()=> {
  checktheme()
})

</script>

<template>
  <header class="dark:bg-dark-bg">
    <div class="container header-inner">
      <router-link to="/" class="logo">
        <img src="/src/assets/svg/logo_dark.svg" v-if="true" alt="" />
        <img src="/src/assets/svg/logo_light.svg" v-else alt="" />
      </router-link>
      <SearchInput/>
      <nav>
        <router-link to="/spots">Точки</router-link>
        <!-- TODO: vif velse -->
        <router-link to="/profile" class="profile">
          профиль
          <img src="" class="avatar" alt="">
        </router-link>
        <router-link to="/login" class="profile">
          Войти
          <svg  class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
        </router-link>
        <ThemeSelector/>
      </nav>
    </div>
  </header>

</template>

<style lang="scss">


.logo {
  @apply flex items-center;
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


