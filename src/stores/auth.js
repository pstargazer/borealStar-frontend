import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useAuthStore = defineStore('auth',()=>{

    let session = computed({
        get() {
            if (!localStorage.getItem("auth")) return false
            // else if (sessionStorage.getItem("auth")) return 
            else return true
        },
        set() {

        }
    })


    function isAuth() {
        // check current user auth token
        return false
    }
    
    return {
        session,
        isAuth
    }
})