import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useCitiesStore = defineStore('theme', ()=>{
    const darkMode = ref();

    
    return {
        darkMode
    }
})