import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import { uglify } from 'rollup-plugin-uglify';

const production = process.env.NODE_ENV === 'production';

export default {
  input: './src/main.js',
  output: {
    file: './dist/bundle.js',
    format: 'umd',
    sourcemap: !production
  },
  plugins: [
    babel({
      presets: ['@babel/preset-env']
    }),
    !production &&
      serve({
        port: '3000',
        contentBase: ['./dist']
      }),
    production && uglify()
  ]
};
