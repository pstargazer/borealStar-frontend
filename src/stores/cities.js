import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCitiesStore = defineStore('cities',()=>{
    const cities = reactive([]);
    return {
        cities
    }
})