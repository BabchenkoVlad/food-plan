// 'use strict';

// let path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: './js/script.js',
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/js'
//   },
//   watch: true,

//   devtool: "source-map",

//   module: {}
// };

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
