const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const UgliFyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugins= require('optimize-css-assets-webpack-plugin')


module.exports = {
    mode: modoDev ? 'development':'production',
    entry: './src/principal.js',
    output:{
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization:{
        minimizer:[
            new UgliFyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugins({})
        ]
    },
    plugins:[
        new miniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module:{
        rules:[{
            test: /\.s?[ac]ss$/,
            use:[
                miniCssExtractPlugin.loader,
                //'style-loader', // adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader'
            ]
        }]
    }
}