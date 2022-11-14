const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var FriendlyErrorsWebpackPlugin = require("@soda/friendly-errors-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    port: "8080",
  },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
      compilationSuccessInfo: {
        messages: ["You application is running here http://localhost:8080"],
      },
    }),
  ],

  output: {
    filename: "index.js",
  },
};
