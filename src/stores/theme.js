import { defineStore } from "pinia";
import { ref } from "vue";
import { useDark } from "@vueuse/core";

export const useThemeStore = defineStore("theme", () => {
    // check if dark mode
    const isDark = ref(getMode());

    const iconLightRef = ref(null);
    const iconDarkRef = ref(null);

    function toggleMode() {
        // toggle icons
        // iconLightRef.toggleAttribute("hidden");

        // if set via local storage previously
        if (localStorage.getItem("theme")) {
            if (localStorage.getItem("theme") === "light") {
                setDark(true);
            } else {
                setDark(false);
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains("dark")) {
                setDark(false);
            } else {
                setDark(true);
            }
        }
    }

    /**
     * 
     * @param {*} dark theme mode: true if dark, false if light
     */
    function setDark(dark) {
        // true if dark else light
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            isDark.value = true
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            isDark.value = false
        }
    }

    /**
     * 
     * @returns mode of the colortheme, false if light, true if dark
     */
    function getMode() {
        if (localStorage.getItem("theme") === "light") return false;
        else if (localStorage.getItem("theme") === "dark") return true;
        else {
            // setDark(false);
            return useDark().value;
        }
    }

    // function set

    return {
        isDark,
        setDark,
        toggleMode,
        getMode
    };
});
