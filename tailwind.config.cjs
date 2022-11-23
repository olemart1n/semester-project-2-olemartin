/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{mjs, js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "788px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            colors: {
                auctionBlue: "#5097D8",
                auctionBrown: "#471313",
                auctionRed: "#F26161",
                auctionGrey: "#272727",
                logoBg: "#3E3A3A",
                auctionBg: "#D9D9D9",
                almostWhite: "#F3F3F3",
                veryLightGrey: "hsl(0, 0%, 98%)",
            },
        },
    },
    plugins: [],
};
