import { defineMDSveXConfig } from "mdsvex";
import * as path from 'path';

const dirname = path.resolve();

const config = defineMDSveXConfig({
    extensions: ['.md', '.svx'],
    layout: {
        blog: path.join(dirname, './src,routes')
    },
    highlight: {
        highlighter: async (code, lang = 'text') => {
            const highlighter = await shiki.getHighlighter({
                theme: 'poimandres'
            });
            const html = scapeSvelte(highlighter.codeToHtml(code, { lang }));
            return `{@html \`${html}\`}`;
        },
    },
});

export default config;