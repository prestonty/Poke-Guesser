/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            sky: "#A6F1FF",
            cyan: "#88BDBC",
            teal: "#254E58",
            midnight: "#112D32",
            wood: "#4F4A41",
            board: "#6E6658",
            white: "#FAF9F6",
            lightGreen: "#006920",
            brightGreen: "#6ad872",
            darkGreen: "#00903a",
            healthGreen: "#6ad872",
            blueda: "#1e98a0",
            bluemid: "#36afb7",
            blueLi: "#98f0f2",
            pokeBlueli: "#6fc8c9",
            pokeBlueda: "#87d7d8",
        },
        extend: {
            animation: {
                fadeRight1: "delay-100",
            },
            spacing: {
                '22':'5.1rem',
            },
        },
    },
    plugins: [],
};
