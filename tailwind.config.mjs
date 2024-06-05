/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'text': '#f0f6ff',
			'background': '#142038',
			'primary': '#2470eb',
			'secondary': '#3c83f6',
			'accent': '#0077ff',
		},
		fontFamily: {
			'spaceGrotesk': ["Space Grotesk", 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
