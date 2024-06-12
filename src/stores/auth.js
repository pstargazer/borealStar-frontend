import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAuthStore = defineStore('auth',()=>{
    const session = reactive([]);

    function isAuth() {
        // check current user auth token
        return false
    }
    
    return {
        session,
        isAuth
    }
})