const path = require('path');

exports default {
  entry: "./src/index.",
  output:{
      path: path.resolve(__dirname, './public'), 
      publicPath: '/public/',
      filename: "bundle.js"   
  },
  module:{
      rules:[   
          {
            exclude: /(node_modules)/, 
            loader: "babel-loader",  
            options:{
                presets:["@babel/preset-env", "@babel/preset-react"]    
            }
          }
      ]
  }
}
