const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        
        exclude: /node_modules/,
        use : [{
          loader : "babel-loader",
          options : {
            presets : ["@babel/preset-env", "@babel/preset-react"]
          }
        }]
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  resolve : {
    extensions: [".ts", ".tsx", ".js"],
    alias : {
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    }
  },
  devServer : {
    hot : true
  }
};
