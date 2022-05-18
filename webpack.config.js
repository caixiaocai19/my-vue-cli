const { resolve } = require("path");
const {VueLoaderPlugin}  = require("vue-loader");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "boundle.js"
  },
  module: {
    rules: [
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.s[ca]ss$/, 
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
      new VueLoaderPlugin()
  ],
  devServer: {
    static: {
      directory: resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};
