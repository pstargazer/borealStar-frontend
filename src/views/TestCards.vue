<script setup>
import { computed, ref } from "vue";
import WeatherCard from '/src/components/WeatherCard.vue'

// let factor = ref(document.querySelector('#time_factor').value)
computed(()=>{
    alert(range)
})


let data = {code: 'sdf'};
</script>


<template>
    sdf
    <WeatherCard :city_data="data" :time_factor="factor" />    
    <input type="range"  v-bind="time_factor">
</template>