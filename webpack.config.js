const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

// const extractSass = new ExtractTextPlugin({
//   filename: "./css/style.min.css",
//   disable: process.env.NODE_ENV === "development"
// })

module.exports = {
  entry: {
    app: "./src/js/app.jsx",
    appRedux: "./src/js/appRedux.jsx"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
      // {
      //   test: /\.scss$/,
      //   use: extractSass.extract({
      //     use: [
      //       {
      //         loader: "css-loader"
      //       },
      //       {
      //         loader: "sass-loader"
      //       }
      //     ],
      //     // use style-loader in development
      //     fallback: "style-loader"
      //   })
      // }
    ]
  },
  // plugins: [
  //   extractSass
  // ],
  devtool: 'source-map'
}
