// rollup.config.js
import babel from 'rollup-plugin-babel';

export default {
  // 核心选项
  input: './main.js', // 必须

  output: {
    // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项
    file: './bundle.js', // 必须
    format: 'esm' // 必须
  },
  plugin: [
    babel({
      exclude: './node_modules/**'
    })
  ]
};
