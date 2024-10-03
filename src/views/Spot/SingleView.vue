<script setup>
import { getCurrentInstance, nextTick, onActivated, onDeactivated, onMounted, onUnmounted, reactive, ref, VueElement, watch } from "vue";
import { useRoute } from "vue-router";

import { useSpotsStore } from "../../stores/spots";
const { getSpotSingle, toCelsius } = useSpotsStore();

let route = useRoute();
const spotId = ref(route.params.id);
const spot = ref({})


onActivated(async ()=>{
    await nextTick()
    spotId.value = route.params.id
    spot.value = await getSpotSingle(spotId.value);
})

watch(spotId, async (newId) => {
    if(newId != null) {
        // spotId.value = newId
        spot.value = await getSpotSingle(newId);
    }
})

watch(spot, async ()=>{
    // to re-render after deactivatied
    await getSpotSingle(spotId.value)
})

onDeactivated(()=>{
    spot.value = {}
})

</script>

<template>
    <!--  -->
    <!-- <Suspense> -->
        <div class="bg-light-bg_lighter dark:bg-dark-bg_lighter">
        <div class="container py-3">
            <div v-if="spot?.['spot']" class="grid grid-cols-4 gap-4">
                <div class="col-start-1">
                    <h1 сlass="font-kelly m-0">
                        {{ JSON.parse(spot?.["spot"]["names"])?.[0]["name"] || "N/A" }}
                    </h1>
                    <img :src="imageLink" alt="" />
                    <p>{{ JSON.parse(spot?.["weather"][0]["response"])["weather"][0]['main'] }}</p>
                    <p>{{ JSON.parse(spot?.["weather"][0]["response"])["weather"][0]['description'] }}</p>
                    <p class="text-4xl">{{ toCelsius(JSON.parse(spot?.["weather"][0]["response"])["main"]['temp']) }}</p>
                </div>
                <!-- { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" } -->
                <div class="col-span-1">
                    <div class="grid g-3">
                        <div>
                            Чувствуется как
                            {{ toCelsius(JSON.parse(spot?.["weather"][0]["response"])["main"]['feels_like']) }}
                        </div>
                        <div>
                            Давление
                            {{ JSON.parse(spot?.["weather"][0]["response"])["main"]['pressure'] }}
                            HPa
                        </div>
                        <span>
                            Давление на уровне моря
                            {{ JSON.parse(spot?.["weather"][0]["response"])["main"]['sea_level'] }}
                            HPa
                        </span>
                        <span>
                            Давление на уровне земли
                            {{ JSON.parse(spot?.["weather"][0]["response"])["main"]['grnd_level'] }}
                            HPa
                        </span>
                        <span>
                            Влажность
                            {{ JSON.parse(spot?.["weather"][0]["response"])["main"]['humidity'] }}%
                        </span>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="grid g-3">
                        <span>
                        Ветер 
                        {{ JSON.parse(spot?.["weather"][0]["response"])["wind"]['deg'] }}°
                        со скоростью
                        {{ JSON.parse(spot?.["weather"][0]["response"])["wind"]['speed'] }} m/s
                    </span>
                    <span v-if='JSON.parse(spot?.["weather"][0]["response"])["wind"]["gust"]'>
                        С порывами до 
                        {{ JSON.parse(spot?.["weather"][0]["response"])["wind"]['gust'] }} m/s
                    </span>
                    <span>
                        Время рассвета 
                        {{ Date(JSON.parse(spot?.["weather"][0]["response"])["sys"]['sunrise']) }}
                    </span>
                    <span>
                        Время заката
                        {{ Date(JSON.parse(spot?.["weather"][0]["response"])["sys"]['sunset']) }}
                    </span>
                </div>
            </div>
            <div class="col-span-1">
                Информация получена в 
                {{ Date(JSON.parse(spot?.["weather"][0]["response"])['dt']) }}
            </div>

            </div>
        </div>
        </div>
    <!-- </Suspense> -->
</template>



<style></style>
