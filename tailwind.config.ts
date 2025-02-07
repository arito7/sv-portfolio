import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui'
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
		}
	},
	daisyui: {
		themes: [
			{
				myTheme: {
					"primary": "#ff0070",
					"secondary": "#c8b900",
					"accent": "#009bdf",
					"neutral": "#010b0d",
					"base-100": "#28252a",
					"info": "#0080cc",
					"success": "#22bc00",
					"warning": "#e7a600",
					"error": "#ff5e63",
				}
			}
		]
	},

	plugins: [typography, forms, containerQueries, daisyui]
} satisfies Config;
