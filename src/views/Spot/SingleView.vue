<script setup>
import { getCurrentInstance, onMounted, onUpdated, reactive, ref } from "vue";
import { useRoute } from "vue-router";

import { useSpotsStore } from "../../stores/spots";
import { computedAsync } from "@vueuse/core/index.cjs";

const { getSpotSingle, toCelsius } = useSpotsStore();

const route = useRoute();
const id = route.params.id;

// https://openweathermap.org/img/wn/{{}}@2x.png
let imageLink = "https://openweathermap.org/img/wn/";

let spot = computedAsync(
    async () => {
        return await getSpotSingle(route.params.id);
        // .then(resp => {
        // console.log(resp)
        // resp['spot']
        // })
    },
    // not working without dat
    [{ error: "failed to fetch data" }],
);

onMounted(() => {
    // console.log(JSON.parse(spot['spot']['names']));
    setTimeout(() => {
        // console.log(JSON.parse(spot.value['weather'][0]['response'])['weather'][0]['icon']);
        imageLink =
            imageLink +
            JSON.parse(spot.value["weather"][0]["response"])["weather"][0][
                "icon"
            ] +
            "@2x.png";

        // redraw
        const instance = getCurrentInstance();
        instance?.proxy?.$forceUpdate();
    }, 10);
});
</script>

<template>
    <!--  -->
    <div class="bg-light-bg_lighter dark:bg-dark-bg_lighter">
        <div class="container py-3">
            <div class="grid grid-cols-4 gap-4">
                <div class="col-start-1">
                    <h1 сlass="font-kelly m-0">
                        {{ JSON.parse(spot["spot"]["names"])[0]["name"] }}
                    </h1>
                    <img :src="imageLink" alt="" />
                    <p>{{ JSON.parse(spot["weather"][0]["response"])["weather"][0]['main'] }}</p>
                    <p>{{ JSON.parse(spot["weather"][0]["response"])["weather"][0]['description'] }}</p>
                    <p>{{ toCelsius(JSON.parse(spot["weather"][0]["response"])["main"]['temp']) }}</p>
                </div>
                <!-- { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" } -->
                <div class="col-span-2">
                    <div class="flex flex-row gap-3">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
