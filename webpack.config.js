const HtmlWebpackPlugin = require("html-webpack-plugin"),
      MinicssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module:{
        rules:[
            //dependencias
            {
                test:  /\.js$/i,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader",
                },
            },
            //dependencias
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader",
                        options:{ minimize: true,},
                    },
                ],
            },
            //dependencias
            {
                test: /\.css$/i,
                use: [MinicssExtractPlugin.loader,"css-loader"],
            },

        ],
    },
    plugins:[ 
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new MinicssExtractPlugin(),
    ],
};