import axios from "axios";
import { defineStore, mapActions } from "pinia";
import { reactive } from "vue";

export const useSpotsStore = defineStore('spots', ()=>{
    const spots = reactive([]);

    function getSpots(page, perPage=10) {
        // alert(import.meta.env.VITE_APP_BACKEND_URL) 
        // axios.get(`bs_backend/api/spots/paginated?page=${page}&perpage=${perPage}`)
        // fetch(`https://localhost:8000/api/spots/paginated?page=${page}&perpage=${perPage}`)
        fetch(`https://bs_backend:8000/api/spots/paginated?page=${page}&perpage=${perPage}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
            
            
            
        })
        .then(response => console.log(response))
    }

    return {
        spots,
        getSpots
    }
})