import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            sourcemap: true,
            format: 'es',
            name: 'window',
            extend: true
        },
        {
            file: 'dist/index.iife.js',
            sourcemap: true,
            format: 'iife',
            name: 'window',
            extend: true
        }
    ],
    plugins: [
        svelte({
            // css: css => {
            //     css.write('docs/dist/svelteGantt.css');
            // },
            emitCss: true,
            preprocess: sveltePreprocess()
        }),
        postcss(),
        resolve({
            browser: true
            // exportConditions: ['svelte']
        }),
        commonjs(),
        typescript(),
        production && uglify()
    ]
};
