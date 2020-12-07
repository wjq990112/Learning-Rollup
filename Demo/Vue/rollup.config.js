import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const production = process.env.NODE_ENV === 'production';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'App',
    sourcemap: true
  },
  plugins: [
    vue({
      css: false
    }),
    css({ output: 'bundle.css' }),
    resolve(),
    commonjs(),
    babel(),
    production && terser()
  ]
};
