import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useDark, usePreferredDark, useToggle } from "@vueuse/core";

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
                // document.documentElement.classList.add('dark');
                // localStorage.setItem('theme', 'dark');
                setDark(true);
            } else {
                // document.documentElement.classList.remove('dark');
                // localStorage.setItem('theme', 'light');
                setDark(false);
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains("dark")) {
                setDark(false);
                // document.documentElement.classList.remove('dark');
                // localStorage.setItem('theme', 'light');
            } else {
                setDark(true);
                // document.documentElement.classList.add('dark');
                // localStorage.setItem('theme', 'dark');
            }
        }
    }

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

    function getMode() {
        if (localStorage.getItem("theme") === "light") return false;
        else if (localStorage.getItem("theme") === "dark") return true;
        else {
            // setDark(false);
            return useDark();
        }
    }

    // function set

    return {
        isDark,
        iconLightRef,
        iconDarkRef,
        toggleMode,
        getMode
    };
});
