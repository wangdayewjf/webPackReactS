
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var extractTextPlugin=require('extract-text-webpack-plugin');
module.exports={
  devtool: 'cheap-module-eval-source-map',
  entry:{
    app:'./src/script/index.js',
    //runoob1:'./src/script/js/runoob1.js',//这里会执行require('runoob1.js')
    //runoob2:'./src/script/js/runoob2.js'//这里最后会执行require('runoob2.js')
    //这里打包成多个文件
  },
  output:{
    path:__dirname+'/build',
    //publicPath: '/assets/',//线上地址
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
      filename:'index.html',
      title:'生成文件'
      //chunks: ['app']
    }),//如果不用这个插件，不自动打包html文件，
    //chunks属性，可以选择引入那些js文件,好像默认是entry全部引入的。
    new extractTextPlugin({
      filename:'app.css',
      allChunks:true
    }),//如果不用这个插件，不会自动打包生成合并的css
    new webpack.optimize.UglifyJsPlugin({//压缩代码插件。
      compress:{
        warnings:false
      },
      output:{
        comments:false
      }
    })
    //问:这里是使用插件，问：为什么有的插件再style处？
  ],
   resolve:{
       extensions:['.js','.json','.jsx']//配置，require自动补全后缀的文件。
   },
   externals: {
       "jquery": "window.jQuery"
       //这里用来解释部分require('xxx');,应为他们不是模块化，所以得有个全局对象映射。
   },

  module:{
    loaders:[
      /*{
        test:/\.css$/,
        loader:'style-loader!css-loader'
      },*/
      {
        test:/\.css$/,
        loader:extractTextPlugin.extract({//问：这里有点像扩展类属性，上面是用扩展的类生成对象。
          fallback:'style-loader',
          use:'css-loader'
        })
      },//这种方式，1,有上面那种功能，2，提取样式到本地css文件
     /* {
        test:/\.scss$/,
        loader:'style-loader!css-loader!sass-loader'
      },*/
      {
        test:/\.scss$/,
        loader:extractTextPlugin.extract({
          fallback:'style-loader',
          use:'css-loader!sass-loader'
        })
      },//这种方式，1,有上面那种功能，2，提取到出到本地css文件
      {
        test:/\.js$/,
        loader:'babel-loader',
        /*query: {
               //presets: ['es2015']
               presets:['es2015','stage-0','react']
           }*/
      },
       {
        test: /\.jsx$/,
        loader:'babel-loader',
        //有了babel loader就不需要jsx-loader了，那是去年的事情了,这里原先是jsx-loader
       /* query: { //这里如果不写就默认用.babelrc文件里的值作为参数
              // presets: ['es2015']
              presets:['es2015','stage-0','react']
           }*/
      },
      {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=58192&name=img/[hash:8].[name].[ext]'
　　　 }

    ]
  }
}

