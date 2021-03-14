const HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { loader } = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
          loader:MiniCssExtractPlugin,loader,
          options:{
            publicPath:"./",
          },
          },
          "css-loader",
        ],
        // use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: ["file-loader?name=assets/[name].[ext]"],
      },
      {
        test: /\.(ttf)$/i,
        use: ["file-loader?name=assets/[name].[ext]"],
      },

      // { 
      //   test: /\.(jpe?g|png|gif|svg|webp)$/i,
      //   use: [
      //     'file-loader',
      //    {
      //     loader: 'image-webpack-loader',
      //       options: {
      //       bypassOnDebug: true, // webpack@1.x
      //       disable: true, // webpack@2.x and newer
      //        },
      //      },
      //    ],
      //  },



    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};