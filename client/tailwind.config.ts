import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                prime: {
                    gold: "#D4AF37", // Classic Gold
                    cream: "#F5F5DC", // Beige/Cream
                    dark: "#1A1A1A", // Soft Black
                    gray: "#4A4A4A", // Dark Gray text
                    light: "#FAFAFA", // Off white background
                    accent: "#C5A028", // Slightly darker gold for hover
                },
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-lato)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
