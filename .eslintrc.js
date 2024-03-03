module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "xo",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            "extends": [
                "xo-typescript"
            ],
            "files": [
                "*.ts",
                "*.tsx"
            ]
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react-hooks/exhaustive-deps": "error",
        "quotes": ["error", "single"],
        "no-duplicate-imports": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "padding-line-between-statements": [
            "warn",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}
        ],
        "complexity": ['error', { max: 20 }],
        "no-unsafe-optional-chaining": "error",
        "camelcase": ["warn", { properties: "always" }],
        "prefer-destructuring": [
            "error",
            {
                array: false,
                object: true,
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
    }
}
