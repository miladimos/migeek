import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from "mdsvex";
import shiki from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({
				theme: 'poimandres'
			});
			const html = scapeSvelte(highlighter.codeToHtml(code, { lang }));
			return `{@html \`${html}\`}`;
		},
	},
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexOptions),
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
