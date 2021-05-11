import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import typescript from 'rollup-plugin-typescript2';

const input = 'src/qr-code.ts'
const plugins = [
  typescript(),
  replace({'Reflect.decorate': 'undefined'}),
  resolve(),
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
  external: ['https://unpkg.com/lit-element?module'],
  plugins : [
    ...plugins,
    alias({
      entries: {
        "lit-element": 'https://unpkg.com/lit-element?module'
      }
    }),
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