import axios from "axios";
import { defineStore, mapActions } from "pinia";
import { reactive } from "vue";

export const useSpotsStore = defineStore('spots', ()=>{
    const spots = reactive([]);

    async function getSpots(page, perPage=10) {
        console.log(import.meta.env.VITE_HOST)
        // fetch("http://localhost:85/api/spots", {
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

    return {
        spots,
        getSpots
    }
})