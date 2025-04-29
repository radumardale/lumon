const path = require('path');
const alias = require('@rollup/plugin-alias');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    alias({
      entries: [
        {
          find: '@components',
          replacement: path.resolve(__dirname, 'src/components'),
        },
        { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      ],
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({ extract: true }),
  ],
};
