/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                mintMist: "#EEEFE0",
                oliveWhisper: "#D1D8BE",
                sageGlow: "#A7C1A8",
                mossyFog: "#819A91",
                softSunrise: "#F5EEDC",
                dustyClay: "#C9A78F",
                calmSky: "#7AA7C7",
                warmStone: "#B2A38B",
                deepForest: "#4B5D47",
                earthyBrown: "#6E5C4F",
                darkMossyFog: "#4E6B63",
                darkSageGlow: "#5C7B68",
            },
        },
    },
    plugins: [],
};
