import { defineConfig } from 'eslint/config'
import cmyr from 'eslint-config-cmyr'

export default defineConfig([{
    ignores: [
        '**/dist/',
        '**/node_modules/',
        '**/*.min.*',
        '**/src/public/',
        '**/public/',
        'pnpm-lock.yaml',
        '**/.git/',
        '**/.github/',
        '**/.husky/',
        '**/.vscode/',
        '**/.wrangler/',
    ],
}, cmyr,
{
    rules: {
        'no-console': 0,
    },
},
])
