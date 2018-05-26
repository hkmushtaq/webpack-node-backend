const path = require("path");

const config = {
  mode: "production",

  // Set the entry point of the app to src/index.js
  entry: path.resolve(__dirname, "src", "index"),

  // Set output file to dist/dev/server.js
  output: {
    path: path.resolve(__dirname, "dist", "rele"),
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
  }
};

module.exports = config;
