'use strict'

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');


module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "./dist/js"),
        assetModuleFilename: "../images/[name][ext]"
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|bmp|tiff|webp|svg|heif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2|bmp)$/i,
                type: "asset/inline"
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: "../css/styles.css",
            }
        ),
        new CleanWebpackPlugin(),
        ...fs.readdirSync(path.resolve(__dirname, 'src'))
            .filter((name) => name.endsWith('.html'))
            .map((name) => new HtmlWebpackPlugin({
                filename: `../${name}`,
                template: `src/${name}`,
            }))
    ]
}