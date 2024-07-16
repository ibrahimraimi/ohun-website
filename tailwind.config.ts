import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['excon'],
				bold: ['excon-bold'],
				black: ['excon-black']
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
