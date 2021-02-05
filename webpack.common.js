const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { loader } = require('mini-css-extract-plugin');

 
module.exports = {  
  entry: {
    lotto: ['@babel/polyfill','./src/lotto.ts'],    
  },  
  plugins: [    
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),   
    new HtmlWebpackPlugin({
      title : '로또',
      hash : true,
      filename : 'index.html',
      chunks : ['lotto'], 
    }),
    
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',      
    }),

    new webpack.ProvidePlugin({
      _: 'lodash',
  }),
  ],
  output: {
    filename: '[name].bundle.js',
    // chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),    
  },  
  target: ['web', 'es3'],
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)|(dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],                        
          }          
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            ,options: {
              publicPath: '',
            } 
          },          
          {
            loader: 'css-loader',   
            options: {
              sourceMap: true,
            }         

          },
          {
            loader: 'postcss-loader',
            options: {            
              // config: { path: path.resolve(__dirname, "postcss.config.js") },
              sourceMap: true,
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
                outputStyle: "compressed",              
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     {
       test: /\.(csv|tsv)$/i,
       use: ['csv-loader'],
     },
     {
       test: /\.xml$/i,
       use: ['xml-loader'],
     },
      
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },  
  optimization: {    
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all'
    //     }
    //   }
    // }  

    

  },
};