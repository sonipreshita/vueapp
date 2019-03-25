"use strict";
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
  entry: ["./src/main.js"],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
