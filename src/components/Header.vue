<script>
import "./inputs/SearchInput.vue";
</script>

<template>
  <header class="dark:bg-dark-bg">
    <div class="container header-inner">
      <router-link to="/" class="logo">
        <img src="/src/assets/svg/logo_light.svg" alt="" />
      </router-link>
      <nav>
        <SearchInput/>
        <router-link to="/spots">Точки</router-link>
        <router-link to="/profile" class="profile">
          werwe
          <img src="" class="avatar" alt="profile">
          <!-- <p></p> -->
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
header {
  box-shadow: 1px 5px 15px 5px rgb(55, 14, 131) inset;
//   -webkit-box-shadow: 1px -10px 24px 11px rgba(0, 0, 0, 0.21) inset;
//   -moz-box-shadow: 1px -10px 24px 11px rgba(0, 0, 0, 0.21) inset;
    border-end-end-radius: 1em;
    border-end-start-radius: 1em;
  @apply p-5 bg-light-bg dark:bg-dark-bg;
}
//bg-light-bg
.header-inner{
  /* font-family: "Kelly Slab"; */
  /* font-size:  */
  @apply text-3xl flex justify-between font-kelly;
}

nav {
  @apply flex gap-7;
}

nav .profile {
  /* align-items: center; */
  @apply 
  flex
  gap-3
  items-center;
  
}

nav .avatar {
  $av-side: 1em;
  width: $av-side;
  height: $av-side;
  @apply bg-gray-400 rounded;
}

nav .avatar::alt{
  @apply bg-red-500;
}
</style>
