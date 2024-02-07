/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '424px',
			...defaultTheme.screens,
		  },
		extend: {
			colors: {
				background: ['#00FFCE'],
				primary: ['#00E7C0'],
				secondary: ['#007EE7'],
				accent: ['#50B6BF'],
			},
			fontFamily: {
				sans: [("Kanit", "sans-serif"), ("Montserrat", "sans-serif")],
			  },
			}
		},
	plugins: [ require('autoprefixer'), require('cssnano'), ('@tailwindcss/typography')],
}
