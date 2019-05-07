const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const APP_DIR = path.resolve(__dirname, "./src/");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: '[name].css'
});

module.exports = {
    mode: 'development',
    entry: APP_DIR + '/app.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        }),
        extractLess
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    }
            },
            {
                test: /\.css/,
                use: extractLess.extract({
                    use: [
                        {
                            loader: 'css-loader?url=false' // translates CSS into CommonJS
                        }
                    ]
                })
            }
        ]
    }
}
