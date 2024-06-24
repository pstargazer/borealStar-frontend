<script setup>
/* eslint disable */

import { nextTick, onMounted } from "vue";

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
    initTooltips,
} from "flowbite";

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
});

import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

import { useAuthStore } from "./stores/auth";
const { session } = useAuthStore();

nextTick(()=> {
    
    // defineExpose(session);
    // console.log(session);
})


</script>

<template>
    <AppHeader />
    <Suspense>
        <template #default>
            <RouterView />
        </template>
        <template #fallback>
            <AppHeader />
            <div class="flex flex-col align-center justify-center">
                Loading...
            </div>
        </template>
    </Suspense>
</template>
    <!-- <AppFooter /> -->

<style lang="scss">
body {
    font-size: 15px;
    // color: white;
    @apply text-black 
  bg-light-bg 
  dark:bg-dark-bg 
  dark:text-white;


}

// #app {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// }


.clickable {
    // TODO: make outlines
}
</style>
