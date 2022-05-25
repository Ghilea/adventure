const path = require('path');
let clientAddress = './src/client/react/index.js';
let clientOutput = './public/js';
let editorAddress = './src/devTool/react/index.js';
let editorOutput = './editor/js';

module.exports = [
    {
        name: 'client',
        mode: 'development',
        entry: clientAddress,
        output: {
            path: path.resolve(__dirname, clientOutput),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.json', '.mjs'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@comp': path.resolve(__dirname, 'src/client/react/components'),
                '@hooks': path.resolve(__dirname, 'src/client/react/hooks'),
                '@shared': path.resolve(__dirname, 'src/shared')
            }
        },
        module: {
            rules: [
                {
                    test: /\.js|jsx/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                                "@babel/preset-env",
                                "@babel/preset-react"
                            ],
                            "plugins": ["@babel/plugin-transform-runtime"]
                        }
                    }

                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                    exclude: /node_modules/
                }
            ]
        }   
    },
    {
        name: 'editor',
        mode: 'development',
        entry: editorAddress,
        output: {
            path: path.resolve(__dirname, editorOutput),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.json', '.mjs'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@comp': path.resolve(__dirname, 'src/devTool/react/components'),
                '@shared': path.resolve(__dirname, 'src/shared')
            }
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
                            ],
                            "plugins": ["@babel/plugin-transform-runtime"]
                        }
                    }

                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                    exclude: /node_modules/
                }
            ]
        }
    }
]