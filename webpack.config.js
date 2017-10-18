module.exports = {
  entry: "./entry.js",

  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true
  },

  output: {
    path: __dirname,
    filename: "bundle.js",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
}