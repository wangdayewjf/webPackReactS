// webpack学习文档：http://zhaoda.net/webpack-handbook/loader.html
//webpack学习文档(易懂)：http://www.runoob.com/w3cnote/webpack-tutorial.html
// babel学习文档：http://www.ruanyifeng.com/blog/2016/01/babel.html
// react学习文档：https://doc.react-china.org/
// react demo练习文档（易懂）：http://huziketang.com/books/react/lesson9
// webpack官方文档：https://webpack.js.org/concepts/loaders/#example
// webpack添加jq插件： https://segmentfault.com/a/1190000007249293#
// sass 入门教程：http://www.ruanyifeng.com/blog/2012/06/sass.html
//chrome sourceMap调试 教程：https://segmentfault.com/a/1190000005720314
// webpack调试教程：首先需要chrome修改调试模式,https://segmentfault.com/a/1190000004280859
// Source Map教程:,http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html
// react-router(4.0)教程：https://reacttraining.com/react-router/web/example/basic
// react-router-redux教程：https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux
// mocha测试框架学习（易懂）:http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var extractTextPlugin=require('extract-text-webpack-plugin');//用来单独加载css，不需要依赖js，bundle
module.exports={
  devtool: 'cheap-module-eval-source-map',//Source Map 线上调试 功能
  //entry:'./src/script/app.js', 打包成单文件
  entry:{
    app:'./src/script/app.js',
    /*runoob1:'./src/script/js/runoob1.js',
    runoob2:'./src/script/js/runoob2.js'*/
    //这里打包成多个文件
    //runoob1:'./src/script/js/runoob1.js',//这里会执行require('runoob1.js'),不管入口js(app.js)是否require了这个文件
    //runoob2:'./src/script/js/runoob2.js'//这里最后会执行require('runoob2.js'),,不管入口js(app.js)是否require了这个文件
    //这里打包成多个文件
  },
  output:{
    path:__dirname+'/build',
    //publicPath: '/assets/',//线上地址
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
      },
      {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=58192&name=img/[hash:8].[name].[ext]'
　　　 }

    ]
  }
}

