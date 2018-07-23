const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry:'./src/index.js', //入口文件
	output: {
        path: path.resolve(__dirname,'dist'),
		filename: 'main.js',
		// path: path.resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.styl/,
                use: [
                    
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.js/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].css',
            chunkFilename: 'static/css/[id].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./public/index.html')
            // file: 'index.html',
            // template: 'public/index.html'
        }),

    ],
    devServer: {
        contentBase: './dist',
        port: 3000,
        open: true, //自动打开浏览器
    },
    devtool: 'inline-source-map', //调试bug


}
