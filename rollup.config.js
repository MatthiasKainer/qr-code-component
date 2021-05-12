import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

const input = 'src/qr-code.ts'
const plugins = [
  typescript(),
  replace({'Reflect.decorate': 'undefined'}),
  resolve(),
  commonjs(),
  terser({
    module: true,
    warnings: true,
    mangle: {
      properties: {
        regex: /^__/,
      },
    },
  }),
  filesize({
    showBrotliSize: true,
  }),
]
const onwarn = (warning) => {
  if (warning.code !== 'THIS_IS_UNDEFINED') {
    console.error(`(!) ${warning.message}`);
  }
};

const minBundle = {
  input,
  output: {
    file: 'dist/qr-code.min.js',
    format: 'esm'
  },
  onwarn,
  external: ['lit-element'],
  plugins : [
    ...plugins
  ],
};
const fullBundle = {
  input,
  output: {
    file: 'dist/qr-code.dist.js',
    format: 'esm',
  },
  onwarn,
  plugins,
};


export default [minBundle, fullBundle]