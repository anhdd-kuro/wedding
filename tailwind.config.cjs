/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			green: {
				DEFAULT: "#98A083",
				100: "#E5E8DD",
				200: "#F3F5EF",
				300: "#E1EDC6",
				400: "#B5CCAA",
				500: "#98A083",
				600: "#618053"
			},
			blue: {
				DEFAULT: "#B0CCD8",
				dark: "#1A4456"
			},
			black: {
				DEFAULT: "#414141",
				light: "#505050",
				dark: "#373835"
			},
			white: {
				DEFAULT: "#fff",
			},
			transparent: {
				DEFAULT: "transparent",
			}
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
			lexend: ["Lexend", "sans-serif"],
			cormorant: ["Cormorant Upright", "sans-serif"],
			ja: ["Lexend", 'Zen Kaku Gothic New', "sans-serif"]
		},
		screens: {
			"tablet": "769px",
			"pc": "1024px",
			"pc-lg": "1440px"
		},
		extend: {},
		plugins: [],
	}
}