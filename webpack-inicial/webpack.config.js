const HtmlWebPackPlugin = require('html-webpack-plugin');
 
 
module.exports = {
 
    mode: 'development',
    module: {
        rules: [
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
    ]
 
 
}