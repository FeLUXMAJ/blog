/** Created by CUIJA on 02-14-2017.*/
import * as os from "os";
import * as webpack from "webpack";
import * as helpers from "./../helpers";
import {commonConfig} from "./webpack.common.js";
import webpackMerge from "webpack-merge";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const HOST = os.hostname();
const PORT = 4200;

let devConfig = webpackMerge(commonConfig, {
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'source-map',

  output: {
    path: helpers.root('public'),
    publicPath: 'http://' + HOST + ':' + PORT,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      disable: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});

export {
  devConfig
};