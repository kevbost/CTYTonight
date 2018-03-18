module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "rules": {
    "no-console": [
      "error",
      {
        "allow": [
          "warn",
          "error"
        ]
      }
    ],
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "default-case": "error",
    "dot-notation": [
      "error",
      {
        "allowKeywords": true
      },
    ],
    "no-alert": "error",
    "no-empty-function": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-lone-blocks": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-multi-spaces": "error",
    "no-script-url": "error",
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "varsIgnorePattern": "^([A-Z\\$]|e$|i$)",
        "argsIgnorePattern": "^(props)$"
      }
    ],
    "no-useless-concat": "error",
    "prefer-destructuring": [
      "error",
      {
        "array": false,
        "object": false
      }, {
        "enforceForRenamedProperties": false,
        "enforceForComputedProperties": false
      }
    ],
    "yoda": "error",
    "array-bracket-spacing": [
      "error",
      "always",
      {
        "objectsInArrays": false
      }
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "comma-dangle": [
      "error",
      "always"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "newline-before-return": "error",
    "newline-per-chained-call": [
      "error",
      {
        "ignoreChainWithDepth": 2
      }
    ],
    "no-unneeded-ternary": "error",
    "object-curly-newline": [
      "warn",
      {
        "ObjectExpression": {"multiline": true, "minProperties": 1},
        "ObjectPattern": "never"
      }
    ],
    "object-property-newline": "error",
    "one-var": [
      "error",
      {
        var: "never",
        let: "never",
        const: "never",
      }
    ],
    "prefer-destructuring": [
      "warn",
      {
        "array": true,
        "object": true
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never"
      }
    ],
    "space-in-parens": [
      "error",
      "always",
      {
        "exceptions": [
          "{}"
        ]
      }
    ],
    "spaced-comment": [
      "error",
      "always"
    ],
    "wrap-regex": "error",
    "arrow-body-style": [
      "error",
      "always"
    ],
    "arrow-spacing": "error",
    "no-duplicate-imports": "error",
    "no-var": "error"
  }
};
