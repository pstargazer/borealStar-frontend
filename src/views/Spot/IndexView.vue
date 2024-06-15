<template>
          <ThemeSelector/>

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
                    <fwb-pagination v-model="currentPage" :total-items="100" large></fwb-pagination>
        </div>

    </div>
</template>

<script setup>

import { FwbPagination } from 'flowbite-vue'
import { ref, computed, onMounted, reactive } from "vue";
import { useSpotsStore } from "@/stores/spots.js";
import { storeToRefs } from "pinia";
// console.log(import.meta.env.VITE_APP_NAME)
import ThemeSelector from "/src/components/inputs/ThemeSelector.vue";

const { getSpots, getSpotNames } = useSpotsStore()

let spots = reactive(await getSpots(10))
// let spotsName = reactive(await getSpotNames(10))

// let 
// localStorage.setItem('theme', 'dark')

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


</script>