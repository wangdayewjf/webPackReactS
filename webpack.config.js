var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var extractTextPlugin=require('extract-text-webpack-plugin');//用来单独加载css，不需要依赖js，bundle
module.exports={
  entry:'./src/script/app.js',
  entry:{
    app:'./src/script/app.js',
    runoob1:'./src/script/runoob1.js',
    runoob2:'./src/script/runoob2.js'
  },
  output:{
    path:__dirname+'/build',
    filename:'[name].js'
  },
  devServer:{
    contentBase:'./build',
    port:9000,
    host:'localhost',
    historyApiFallback:true
  },
  plugins:[
    new htmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html'
    }),
    new extractTextPlugin({
      filename:'app.css',
      allChunks:true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings:false
      },
      output:{
        comments:false
      }
    })
  ],
   resolve:{
       extensions:['','.js','.json']//配置，require自动补全后缀的文件。
   },
   externals: {
       "jquery": "jQuery"
   },
  module:{
    loaders:[
//      {
//        test:/\.css$/,
//        loader:'style-loader!css-loader'
//      },
      {
        test:/\.css$/,
        loader:extractTextPlugin.extract({
          fallback:'style-loader',
          use:'css-loader'
        })
      },
//      {
//        test:/\.scss$/,
//        loader:'style-loader!css-loader!sass-loader'
//      },
      {
        test:/\.scss$/,
        loader:extractTextPlugin.extract({
          fallback:'style-loader',
          use:'css-loader!sass-loader'
        })
      },
      {
        test:/\.js$/,
        loader:'jsx-loader'
      }
    ]
  }
}