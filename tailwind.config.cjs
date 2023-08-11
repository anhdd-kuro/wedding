/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			green: {
				DEFAULT: "#98A083",
				light: "#E5E8DD",
			},
			black: {
				DEFAULT: "#333",
				light: "#505050",
			},
			white: {
				DEFAULT: "#fff",
			}
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
			lexend: ["Lexend", "sans-serif"],
		},
		extend: {},
		plugins: [],
	}
}