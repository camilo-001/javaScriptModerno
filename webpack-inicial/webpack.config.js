const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');



module.exports = {

    mode: 'development', // production hace ciertas modificaciones a nuestros archivos como minimizarlos y eliminar comentarios.
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/i, // configuración para el css 
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/i, // configuración para el css 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html', // en donde se encuentra el archivo 
            filename: './index.html', // a donde lo moveremos y con el nombre 
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', // el nombre del archivo css cuando lo pase dentro de la carpeta dist
            ignoreOrder: false
        })
    ]
}