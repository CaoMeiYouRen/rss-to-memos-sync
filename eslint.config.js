import { defineConfig } from 'eslint/config'
import cmyr from 'eslint-config-cmyr'

export default defineConfig([
    {
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
    },
    ...cmyr,
    {
        rules: {
            'no-console': 0,
            'import/order': 0, // 暂时禁用该规则，直到 eslint-plugin-import 正式支持 ESLint v10
        },
    },
])
