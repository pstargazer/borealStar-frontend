import axios from "axios";
import { defineStore, mapActions } from "pinia";
import { reactive } from "vue";

export const useSpotsStore = defineStore('spots', ()=>{
    const spots = reactive([]);

    async function getSpots(page=1, perPage=10) {
        console.log("fetching spots...");
        let result = await fetch(`${import.meta.env.VITE_HOST}/api/spots?per_page=${perPage}&page=${page}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => response.json())
        return result
    }

    async function getSpotNames(cities){
        let result = await fetch(`${import.meta.env.VITE_HOST}/api/spots`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => response.json())
        return result
    }

    async function getSpotSingle(id){
        console.log(id);
        let result = await fetch(`${import.meta.env.VITE_HOST}/api/spots/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => response.json())
        return result 
    }

    function toCelsius(value){
        return Math.trunc(value - 273) + "°"
    }

    return {
        spots,
        getSpots,
        getSpotSingle,
        toCelsius
    }
})