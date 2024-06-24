import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useMySpotsStore = defineStore('myspots', ()=>{ 
    const mySpots = reactive([])

    async function getMySpots() {
        console.log("fetching profile spots...");
        let result = await fetch(`${import.meta.env.VITE_HOST}/api/spots/my`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
        // .then(response => response.json())
        let json = await result.json()
        return json
    }


    let greeting = computed(() => {
        const currentDate = new Date()
        const currentHour = currentDate.getHours()
        // alert(currentHour)
        // let name = ', пользователь'
        let name = ''
      
        if (currentHour < 5) return `Доброй ночи${name}`
        else if (currentHour < 12) return `Доброе утро, ${name}`
        else if (currentHour < 17) return `Добрый день, ${name}`
        else return `Добрый вечер, ${name}`
      })

    return {
        mySpots,
        getMySpots,
        greeting
    }
});