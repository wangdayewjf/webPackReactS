var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var extractTextPlugin=require('extract-text-webpack-plugin');//用来单独加载css，不需要依赖js，bundle
module.exports={
  //entry:'./src/script/app.js', 打包成单文件
  entry:{
    app:'./src/script/app.js',
    runoob1:'./src/script/js/runoob1.js',
    runoob2:'./src/script/js/runoob2.js'
    //这里打包成多个文件
  },
  output:{
    path:__dirname+'/build',
    filename:'[name].js'
  },
  devServer:{
    contentBase:'./build',//本地服务器所加载页面所在的目录
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
       extensions:['.js','.json','.jsx']//配置，require自动补全后缀的文件。
   },
   externals: {
       "jquery": "jQuery"/*
       'react-dom': 'react-dom',
       'react':'react',*/
       //问：为什么放在这就不行。js里面引入失败？。
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
        loader:'babel-loader',
        query: {
               presets: ['es2015']
           }
      },
       {
        test: /\.jsx$/,
        loader:'babel-loader',
        //有了babel loader就不需要jsx-loader了，那是去年的事情了,这里原先是jsx-loader
        query: {
               presets: ['es2015']
           }
      }

    ]
  }
}