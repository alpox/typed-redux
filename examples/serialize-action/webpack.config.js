const path = require("path");
const src = path.join(__dirname, "src");

module.exports = {
  context: src,
  devtool:"inline-source-map",
  entry: {
    main: ["./index.js"]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "main.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    alias: {
      'redux': 'typed-redux'
    }
  }
};
