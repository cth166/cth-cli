const { defineConfig } = require('rollup')
const typescript = require('@rollup/plugin-typescript')
const terser = require('@rollup/plugin-terser')

module.exports = defineConfig({
    input: './src/index.ts',
    output: {
        file: './dist/index.js',
        format: "cjs",
    },
    plugins: [typescript(), terser()],
    external: ['commander', 'ejs', /^node/],
})