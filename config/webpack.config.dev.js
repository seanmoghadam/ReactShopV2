const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    resolve: {
        extensions: [".js", ".jsx", ".scss", ".css"],
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: [
                        ["@babel/preset-env", {
                            useBuiltIns: "usage", // or "entry"
                            corejs: 3,
                        }],
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ],
                    exclude: /node_modules/,
                    sourceMaps: true,
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.template.html",
            publicPath: "/",
            filename: "index.html",
            inject: true
        })
    ]
};
