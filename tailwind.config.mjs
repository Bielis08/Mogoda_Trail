/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'primary': '#FFF',
			'secondary': '#61CE70',
			'gray-pers': '#666666'
		},
		height: {
			'175': '43.75rem'
		},
		fontFamily: {
			'roboto': ['Roboto Variable', 'sans-serif'],
			'verdana': ['Verdana', 'sans-serif'],
			'open-sans': ['Open Sans Variable', 'sans-serif']
		},
	},
	plugins: [],
}
