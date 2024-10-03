<script setup>
import { storeToRefs } from "pinia";
// import WeatherCard from "@/components/WeatherCard.vue";
const WeatherCard = defineAsyncComponent(() => import("@/components/WeatherCard.vue"))
import {
    computed,
    defineAsyncComponent
} from "vue";

import { useMySpotsStore } from "../stores/myspots";

const { getMySpots } = useMySpotsStore();
const { greeting } = storeToRefs(useMySpotsStore());

let mySpotsGot = computed(async () => {
    return await getMySpots();
});

let mySpots = await getMySpots();

function createSpot(){
    let lat = prompt('Введите широту:')
    let lon = prompt('Введите долготу:')

    fetch(`${import.meta.env.VITE_HOST}/api/spots/create`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: {
                lat: lat,
                lon: lon
            }
        })
}

let a = 0;
</script>

<template>
    <!-- <main class="bg-dark-bg_lighter dark:bg-dark-bg_lighter"> -->
    <main class="pt-2 bg-light-bg_lighter dark:bg-dark-bg_lighter">
        <div class="container">
            <h1 class="font-kelly m-0">{{ greeting }}</h1>
            <div class="weatherlist py-5">
                <WeatherCard
                    v-for="city in mySpots"
                    :newCard="false"
                    :key="city.spot.id"
                    :id="city.id"
                    :city_data="city"
                />
                <WeatherCard :newCard="true" @click="createSpot" />
            </div>
        </div>
        <div class="gcse-search"></div>
    </main>
</template>

<style lang="scss">
.weather-card {
    // --time-factor-skyLum: !important;
}

.weatherlist {
    display: flex;
    justify-content: flex-start;
    gap: 1.5em;
    overflow-x: scroll;
}

.weatherlist ::-webkit-scrollbar {
    // @apply bg-current-bg;
}
</style>
