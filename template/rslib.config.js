const {defineConfig} = require('@rslib/core')

module.exports = defineConfig({
    lib: [
        {
            format: 'cjs',
            syntax: 'es2019',
            output: {
                target: 'node',
            },
        },
    ],
});
