/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#FBBF24", // Yellow/Gold accent
				"background-light": "#F3F4F6", // Gray-100
				"background-dark": "#0B0C15", // Deep dark blue/charcoal
				"card-dark": "#151621",
				"card-light": "#FFFFFF",
				"accent-blue": "#3B82F6",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				display: ["Inter", "sans-serif"],
				body: ["Inter", "sans-serif"],
			},
			borderRadius: {
				DEFAULT: "0.75rem", // Rounded-xl
				"2xl": "1rem",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
