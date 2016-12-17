const path = require("path");
const src = path.join(__dirname, "src");

module.exports = {
  context: src,
  devtool:"inline-source-map",
  entry: {
    main: ["./index.tsx"]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "main.js"
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  }
};
