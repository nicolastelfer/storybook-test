const path = require('path');
const includePath = path.resolve(__dirname, '..');
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: includePath,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}