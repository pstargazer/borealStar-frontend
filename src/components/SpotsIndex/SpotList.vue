<script setup>

import { FwbPagination } from 'flowbite-vue'
import { ref, computed, onMounted, reactive, getCurrentInstance, onBeforeMount } from "vue";
import { useSpotsStore } from "@/stores/spots.js";
import { storeToRefs } from "pinia";
import SpotCard from './SpotCard.vue';
import { computedAsync } from '@vueuse/core/index.cjs';
// console.log(import.meta.env.VITE_APP_NAME)

const { getSpots, getSpotNames } = useSpotsStore()

const page = ref(1)
// const page = ref(0)
// page.value = ++page.value
const perPage = 5
// let spots = reactive([1])


let spots =  computedAsync(
    async () => {
        return await getSpots(page.value, perPage)
    },
    // not working without dat
    [{"data": "piece of crap"}]
)

// onMounted(async ()=>{
//     getSpots(page.value, perPage)
//     .then(r => spots)
// })


// let spots = reactive(await getSpots(page.value, perPage))

// conat curr_page = ref()
async function changePage(newPage) {
    // alert(page)
    page.value = newPage
    console.log(`changed page to ${page.value}`);
    // spots = reactive(await getSpots(page.value, perPage))
}

function navigateToSingle(id) {
    alert(id)
}

</script>

<template>
    <div class="cards">
        <SpotCard :data="spot" v-for="(spot) in spots.data" 
        :key="spot.id" />
        <!-- pagination -->
        <div class="flex justify-center">
            <!-- v-model="spots.current_page"  -->
            <fwb-pagination 
            :per-page="spots.per_page"
            v-model="page" 
            :total-items="spots.total"
            :slice-length="3"
            large 
            previous-label="<<<" next-label=">>>"
            >

 
            </fwb-pagination>
        </div>
        <!-- pagination end-->
    </div>

</template>


<style lang="scss">
.list_card {
    border-radius: 1em;
    // @apply p-5  bg-light-bg_lighter dark:bg-dark-bg_lighter;
    // color: var(bg_lighter);
    @apply p-5 bg-light-bg_lighter dark:bg-dark-bg_lighter;
}

.cards {
    @apply flex flex-col gap-3 w-2/3;
}
</style>