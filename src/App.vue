<script setup>
/* eslint disable */

import { onBeforeMount, onMounted } from "vue";

import { useThemeStore } from './stores/theme.js';
const { getMode, setDark } = useThemeStore()


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

import { FwbSpinner } from 'flowbite-vue'
import { useAuthStore } from "./stores/auth";
const { session } = useAuthStore();


onBeforeMount(() => {
    setDark(getMode())
})



</script>

<template>
    <AppHeader />
    <RouterView v-slot="{ Component }">
        <template v-if="Component">
            <Transition mode="out-in">
            <!-- caching the views-->
            <KeepAlive>
                <Suspense> <!-- letting view being async-->
                <component :is="Component"></component>
                <template #fallback>
                    <!-- Loading indicator -->
                    <div class="flex flex-row justify-center items-center text-2xl gap-3 p-4">
                        <fwb-spinner size="8" />
                        Загрузка...
                    </div>
                </template>
                </Suspense>
            </KeepAlive>
            </Transition>
        </template>
        </RouterView>
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
