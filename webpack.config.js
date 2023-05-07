const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components' : path.resolve(__dirname, 'src/components/'),
            '@containers' : path.resolve(__dirname, 'src/containers/'),
            '@pages' : path.resolve(__dirname, 'src/pages/'),
            '@styles' : path.resolve(__dirname, 'src/styles/'),
            '@assets' : path.resolve(__dirname, 'src/assets/'),
            '@imagesConstruction' : path.resolve(__dirname, 'src/assets/imagesConstruction/'),
        }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                },
                {
                    test: /\.(css|scss)$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset'
                  },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                filename: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
        ],
        devServer: {
           historyApiFallback: true,
        }
}
