import {ref,reactive, watch} from 'vue'
import { defineStore } from 'pinia'

import axios from 'axios'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useWeatherStore = defineStore('weather', () => {
    // other options...
    const cities = reactive([])
    const weather = reactive([])
    const APP_ID = "894dbd1df920520cb8a520e09f6fb708"
   
    watch(weather, ()=>{
        console.log(weather)
    })

    
    return {
        cities,
        weather,
        APP_ID
    }
})