const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const FlowBabelWebpackPlugin = require("flow-babel-webpack-plugin");

const config = {
  mode: "development",

  // Set the entry point of the app to src/index.js
  entry: path.resolve(__dirname, "src", "index"),

  // Set output file to dist/dev/server.js
  output: {
    path: path.resolve(__dirname, "dist", "dev"),
    filename: "server.js"
  },

  // Load javascript files in ES6+ Format
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader?cacheDirectory=true"
        }
      }
    ]
  },

  // Resolve modules relative to src in addition to node_modules
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  // This allows us to use --watch and automatically run nodemon on the output server.js
  plugins: [new NodemonPlugin(), new FlowBabelWebpackPlugin()],

  // Set the dev tool
  devtool: "source-map"
};

module.exports = config;
