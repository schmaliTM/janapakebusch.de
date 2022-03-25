module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            serif: ["Haar", "Georgia", "Times"],
            trajan: ["Trajan", "Georgia", "Times"],
        },
        extend: {
            screens: {
                xs: { min: "450px", max: "767px" },
            },
            colors: {
                primary: "hsl(356, 86.1%, 33.9%)",
                "gradient-blue": "#395f9b",
                grau: "hsl(0, 6%, 95%)",
            },
            backgroundPosition: {
                "top-4": "center top",
            },
            dropShadow: {
                white: "0 0 3px hsl(0, 0%, 100%)",
            },
            gridTemplateColumns: {
                preisliste: "3fr 1fr 1fr",
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
