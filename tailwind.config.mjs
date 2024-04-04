/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		fontFamily: {
			'mono': ['Anonymous Pro', 'monospace'],
			'sans': ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			colors: {
				bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
				textColor: "hsl(var(--theme-text) / <alpha-value>)",
				link: "hsl(var(--theme-link) / <alpha-value>)",
				accent: "hsl(var(--theme-accent) / <alpha-value>)",
				"accent-2": "hsl(var(--theme-accent-2) / <alpha-value>)",
				surface: "hsl(var(--theme-surface) / <alpha-value>)",
				quote: "hsl(var(--theme-quote) / <alpha-value>)",
			},
		}
	},
	daisyui: {
		themes: false,
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui')
	],
}
