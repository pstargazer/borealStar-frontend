<script setup>
// import "./inputs/SearchInput.vue";
import { useAuthStore } from "/src/stores/auth.js";
const { isAuth } = useAuthStore;



import ThemeSelector from "/src/components/inputs/ThemeSelector.vue";
import SearchInput from "/src/components/inputs/SearchInput.vue";
import { defineAsyncComponent, onMounted, ref } from 'vue'

// const {ThemeSelectorA} = defineAsyncComponent({
//   loader: ()=> import("/src/components/inputs/ThemeSelector.vue"),
//   loadingComponent: ThemeSelector
// })

import { useThemeStore } from '../stores/theme';
import { storeToRefs } from 'pinia';

const { toggleMode } = useThemeStore()
const { getMode, isDark } = storeToRefs(useThemeStore())

</script>

<template>
  <header class="dark:bg-dark-bg">
    <div class="container header-inner">
      <router-link to="/" class="logo">
        <img src="/src/assets/svg/logo_dark.svg" v-if="!useThemeStore().isDark" alt="" />
        <img src="/src/assets/svg/logo_light.svg" v-else alt="" />
      </router-link>
      <SearchInput />
      <nav>
        <router-link to="/spots">Точки</router-link>
        <!-- TODO: vif velse -->
        <router-link v-if="session" to="/profile" class="profile">
          профиль
        </router-link>
        <router-link v-if="!session" to="/login" class="profile">
          Войти
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


