import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack'; 

export default {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "client"),
    filename: "index.bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "www/index.html",
      inject: true
    }),
    
    new webpack.SourceMapDevToolPlugin({
        test: [/\.js$/, /\.jsx$/],
        exclude: 'vendor',
        filename: "app.[hash].js.map",
        // append: "//# sourceMappingURL=[url]",
        moduleFilenameTemplate: '[resource-path]',
        fallbackModuleFilenameTemplate: '[resource-path]',
    })
  ]
};
