var path = require("path");
var webpack = require('webpack');

// var isProduction = false;
var nodeExternals = require('webpack-node-externals');

module.exports = {

  // in order to ignore built-in modules like path, fs, etc.
  target: 'node',
  // in order to ignore all modules in node_modules folder
  externals: [nodeExternals()],

  // entry: "./src-js/std/index.js",
  entry: "./coffee/index",
  // entry: "./src/std/index.coffee",

  output: {
    path: __dirname,
    filename: "index.js",

    // libraryTarget = "var" - export itself to a global var
    // so libraryTarget - name of the global var

    // libraryTarget: "amd",
    libraryTarget: "commonjs2",
    library: "object-fp"
  },

  module: {
    loaders: [
      { test: /\.coffee$/,
        loader: "coffee-loader",
      },
      { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" }
    ]
  },

  resolve: {
    // add alias for application code directory
    alias:{
      my  : path.resolve( __dirname, 'coffee' ),
      // npm : path.resolve( __dirname, 'node_modules' )
    },
    extensions: [ '', '.js', '.coffee' ]
    // extensions: [ '', '.coffee' ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // DOESNT WORK
      // preamble: 'Developed by Nikita.',

      beautify : false,
      // beautify : {
      //   'ascii-only' : true
      // },
      enclose  : true,
      // sourceMap : false,

      mangle    : true,
      // mangle: {
      //   toplevel: false,
      //   sort    : false, // 'true' breaks moment.js
      //   eval    : true,
      //
      //   // except: [
      //   //   'require',  'exports',
      //   //   'log',      'error',
      //   //   'prototype',
      //   //   'Actor',
      //   //   'ActorSystem',
      //   //   'Simulator',
      //   //   'Model'
      //   // ],
      //
      //   props : false,
      //   // props: {
      //   //   regex: /^_/,
      //   //   // reserved: [
      //   //   //   'require',  'exports',
      //   //   //   'log',      'error',
      //   //   //   'prototype',
      //   //   //   'Actor',
      //   //   //   'ActorSystem',
      //   //   //   'Simulator',
      //   //   //   'Model'
      //   //   // ]
      //   // },
      // },

      compress  : false,
      // compress : {
      //   dead_code     : true,
      //   unsafe        : true,
      //   sequences     : true,
      //   dead_code     : true,
      //   drop_debugger : true,
      //
      //   conditionals  : false,
      //   comparisons   : false,
      //   booleans      : false,
      //   loops         : false,
      //
      //   unused        : true,
      //   if_return     : true,
      //   cascade       : true,
      //   keep_fargs    : true,
      //   collapse_vars : true
      // }
    })
  ],

  devtool: null
  // devtool: 'source-map'
};
