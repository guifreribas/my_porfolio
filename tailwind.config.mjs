/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"gf-yellow": "#e6c339",
				"gf-brown": "#a69553",
				"gf-blue": "#0b0d3f",
				"gf-purple": "#545791",
				"gf-gray": "#66614d",
			},
			fontFamily: {
				body: ["NunitoSans", "sans-serif"],
				headers: ["Onest", "sans-serif"],
			},
			keyframes: {
				"slide-in": {
					"0%": { transform: "translateY(20%)", opacity: 0 },
					"100%": { transform: "translateY(0)", opacity: 1 },
				},
			},
			animation: {
				"slide-in": "slide-in 0.6s ease-in-out forwards",
			},
		},
	},
	plugins: [],
};
