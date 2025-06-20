// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/main-page.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },   

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};