'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: {
        app: ['./source/interface.jsx']
    },
    output: {
        filename: 'assets/[name]-bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: MiniCssExtractPlugin.loader                        
                    }, 
                    {
                        loader: 'css-loader'
                    }, 
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: MiniCssExtractPlugin.loader                        
                    }, 
                    {
                        loader: 'css-loader'
                    }, 
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [["env"], ["react"]],
                    cacheDirectory: true,
                  }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                    use: [
                       'file-loader'
                     ]
            } 
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/[name].css",
          }),
        new HtmlWebpackPlugin({
            template: './public/template.html',
            filename: 'index.html',
            hash: true
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".scss", ".css", ".scss"]
      },
      watchOptions: {
          poll: true
      }

}

