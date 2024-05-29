<template>
    <div class="container">
        <h1>Spots</h1>
        
    </div>
</template>

<script setup>

import { ref, computed, onMounted } from "vue";
import { useSpotsStore } from "@/stores/spots.js";
import { storeToRefs } from "pinia";
// console.log(import.meta.env.VITE_APP_NAME)

const { getSpots } = useSpotsStore()

onMounted(()=>{
    getSpots(10)
})
</script>