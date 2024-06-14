/** @type {import('tailwindcss').Config} */


const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    // purge: [],
    darkMode: ['selector'],
    // darkMode: ['variant', '&:not(.light *)'],


    content:[ 
        "./src/**/*.{js,jsx,ts,tsx,vue}",
        "./node_modules/flowbite/**/*.js",
        "./**/input.css",
    ],

    theme: {
        fontFamily: {
            kelly: "Kelly Slab",
            lato: "Lato",
        },
        container: {
            center: true,
            margin: "auto",
            screens: {
                sm: "480px",
                md: "768px",
                lg: "976px",
                xl: "1440px",
            },
        },

        colors: {
            // bg: "#000",
            
            light: {
                bg: "#bdd",
                // bg: '#3E3951',
                bg_lighter: "#ddd",
                text_common: "#222",
            },
            dark: {
                // bg: '#3E3951',
                // bg: '#000',
                bg: "#262333",
                bg_lighter: "#364150",
                // bg_lighter: "#443F5A",
            },

        },
        extend: {
        },
    },
    variants: {
        backgroundColor: ["light", "dark"],
    },

    plugins: [
        require("flowbite/plugin"),
    ],
};
