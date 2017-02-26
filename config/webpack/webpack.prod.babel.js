/** Created by CUIJA on 02-14-2017.*/
import * as webpack from "webpack";
import * as helpers from "./../helpers";
import commonConfig from "./webpack.common.babel";
import webpackMerge from "webpack-merge";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";


const ENV = process.env.NODE_ENV = process.env.ENV = 'production';


let prodConfig = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('public'),
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new OptimizeCssAssetsPlugin(),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ]
});

export default prodConfig;