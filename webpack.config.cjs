const path = require('path');
let address = './src/react/react.js';
let output = './public/js';

module.exports = {
    mode: 'development',
    entry: address,
    output: {
        path: path.resolve(__dirname, output),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js|jsx/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }
        }]
    }
}