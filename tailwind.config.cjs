import { join } from 'path';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	plugins: [forms, typography, ...skeleton()],

	theme: {
		extend: {},
		screens: {
			xs: '360px',
			// => @media (min-width: 360px) { ... }

			'news-sm': '480px',

			sm: '550px',
			// => @media (min-width: 665px) { ... }

			tc: '600px',

			article: '710px',

			md: '768px',
			// => @media (min-width: 768px) { ... }

			ml: '900px',

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			news: '1352px',

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

			'3xl': '2000px'
		}
	}
};
