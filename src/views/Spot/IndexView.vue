<template>
    <div class="container">
        <h1 class="text-2xl">Отслеживаемые точки</h1>
        <SpotList />
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const SpotList = defineAsyncComponent(() =>
    import('../../components/SpotsIndex/SpotList.vue')
)
// await SpotList
</script>