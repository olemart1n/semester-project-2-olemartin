module.exports = {
    content: ["*.html", "**/*.html", "./js/**/*.{mjs,js}"],
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
                auctionInput: "#B6B7BC",
                logoBg: "#3E3A3A",
                auctionBg: "#E2E9EF",
                almostWhite: "#F3F3F3",
                veryLightGrey: "hsl(0, 0%, 98%)",
                auctionGreen: "#18c6a3",
                auctionYellow: "#edf291c5",
            },
        },
    },
    plugins: [],
};
