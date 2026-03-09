import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: undefined,
			precompress: true,
			strict: true,
		}),
		paths: {
			base: process.env.BASE_PATH || '',
		},
		alias: {
			$components: 'src/lib/components',
			$data: 'src/lib/data',
		},
	},
};

export default config;
