<script setup>
const { data } = defineProps(['data'])

const emits = defineEmits(['navigate'])

let nametable = JSON.parse(data.names) ? JSON.parse(data.names)[0] : false
let name = nametable ? nametable['name'] : "N/A"
</script>

<template>
    <div class="list_card">
        {{ name }}
        <slot name="">

        </slot>
        <div @click="$emit('navigate')" class="">
        </div>
        {{data.created_at}}
        {{data.updated_at}}
        <slot name="default"></slot>
    </div>
    
</template>

<style>

</style>