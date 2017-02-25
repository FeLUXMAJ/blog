/** Created by CUIJA on 02-14-2017.*/
import * as webpack from "webpack";
import * as helpers from "./../helpers";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";


let commonConfig = {
  entry: {
    main: './src/main.js',
    vendor: './src/vendor.js',
    styles: './src/styles.css'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: helpers.root('src', 'index.html'),
        loader: 'html-loader'
      },
      {
        test: /\.html$/,
        exclude: helpers.root('src', 'index.html'),
        loader: 'ng-cache-loader?prefix=[dir]/[dir]/[dir]'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap'
        })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap'
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'main',
        'vendor',
        'styles'
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

export {commonConfig};