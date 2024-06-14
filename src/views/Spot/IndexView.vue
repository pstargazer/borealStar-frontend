<template>
    <div class="container">
        <h1 class="text-2xl">Spots</h1>
        <div class="cards">
                <!-- <slot name="fallback"> -->
                    <div class="list_card bg-light-bg_lighter dark:bg-dark-bg_lighter" 
                    @click="alert"
                    v-for="(spot, idx) in spots.data" :key="idx">
                        {{spot.id}}
                        {{spot.created_at}}
                        {{spot.updated_at}}

                    </div> 
        </div>

    </div>
</template>

<script setup>

import { ref, computed, onMounted, reactive } from "vue";
import { useSpotsStore } from "@/stores/spots.js";
import { storeToRefs } from "pinia";
// console.log(import.meta.env.VITE_APP_NAME)

const { getSpots, getSpotNames } = useSpotsStore()

let spots = reactive(await getSpots(10))
// let spotsName = reactive(await getSpotNames(10))

// let 
// localStorage.setItem('color-theme', 'dark')

</script>

<style lang="scss">

.list_card {
    border-radius: 1em;
    // @apply p-5  bg-light-bg_lighter dark:bg-dark-bg_lighter;
    // color: var(bg_lighter);
    @apply p-5 ;
}

.cards {
    @apply flex flex-col gap-3;
}

</style>


<script>

// themes
let themeToggleDarkIcon = document.querySelector('#theme-toggle-dark-icon');
let themeToggleLightIcon = document.querySelector('#theme-toggle-light-icon');
console.log(themeToggleLightIcon);

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
// theme settings end

</script>