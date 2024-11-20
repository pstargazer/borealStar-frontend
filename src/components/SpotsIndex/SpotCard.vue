<script setup>
const { data } = defineProps(['data'])

const emits = defineEmits(['navigate'])

let nametable = JSON.parse(data.names) ? JSON.parse(data.names)[0] : false
let name = nametable ? nametable['name'] : "N/A"

let createdAtReadable = new Date(data.created_at).toDateString()
</script>

<template>
    <router-link class="list_card flex flex-row" :to="{ name: 'spot_single', params: { id: data.id  }}">
    <!-- <div > -->
        <div class="flex flex-col">
            <h1 сlass="font-kelly m-0">
                {{ name }}
            </h1>
            <span>
                <!-- Отслеживается с {{data.created_at}} -->
                Отслеживается с {{createdAtReadable}}
            </span>

        </div>

        <!-- {{data.updated_at}} -->
        <slot name="default"></slot>
    <!-- </div> -->
    </router-link>
    
</template>

<style>

</style>