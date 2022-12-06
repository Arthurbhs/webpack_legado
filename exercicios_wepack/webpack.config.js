
const webpack = require('webpack')
const ExtractTextPluginds = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },

   devServer: {
    port: 8080,
    contentBase: './public'
   }, plugins: [
 new ExtractTextPluginds('app.css')

   ],
   module: {
    loaders: [{
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react'],
              plugins: ['transform-object-rest-spread']
        }

    }, {
        test:/\.css$/,
        loader: ExtractTextPluginds.extract("style-loader", "css-loader")
    }]
   }

}