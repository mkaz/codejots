module.exports = {
    'extends': 'react-app',
    'rules': {
        'comma-dangle': [ 'error', 'always-multiline'],
        'indent': [ 'error', 4 ],
        'linebreak-style': ['error', 'unix'],
        'quotes': [ 'warn', 'single', { 'allowTemplateLiterals': true } ],
        'semi': [ 'error', 'always' ],
        'no-console': 'warn',

        // disable
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': ['warn', { 'aspects': ['invalidHref'] }]
    }
}

