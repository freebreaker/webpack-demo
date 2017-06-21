# webpack-demo



webpack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。主要包含四个核心概念：入口(entry)、输出(output)、loader、插件(plugins)。

优势：
1.在webpack看来一切都是模块！这就是它不可不说的优点，包括你的JavaScript代码，也包括CSS和fonts以及图片等等等，只有通过合适的loaders，它们都可以被当做模块被处理。

2.Loader
Webpack 本身只能处理原生的 JavaScript 模块，但是 loader 转换器可以将各种类型的资源转换成 JavaScript 模块。这样，任何资源都可以成为 Webpack 可以处理的模块

3.丰富的插件系统。大多数内容功能都是基于这个插件系统运行的，还可以开发和使用开源的 Webpack 插件，来满足各式各样的需求。

和requirejs相比：

1.require.js的所有功能它都有

2.编绎过程更快，因为require.js会去处理不需要的文件

3.还有一个额外的好处就是你不需要再做一个封装的函数，不用define，自己用就require,给别人用就exports


# 在线链接

[demo](https://freebreaker.github.io/webpack-demo/task-webpack.html)

# webpack 文档解析
![image](https://github.com/freebreaker/webpack-demo/blob/master/imgs/1.png)

从上图就可以清晰看出，webpack就是将一堆jade .less .coffee转化成浏览器认识的js或css等，比如我们在写源码的时候，会用到模版引擎等，浏览器不认识啊，经过webpack打包，令浏览器认识。

那为什么还需要另外的模块打包器呢？

现有的打包器不能适应一些功能多的单页应用，有很多模块，那这些模块的管理就很复杂，webpack就是解决这个问题。至于多页应用往往js简单，不需要复杂的管理。

# webpack 目标

Split the dependency tree into chunks loaded on demand

文档的第一条：将依赖树分块去加载。

我的理解是：首先模块加载有两种方式，比如requirejs里直接require，和经过rjs打包后的一个总的模块。更简单说来就是想用哪个模块就require哪个模块，和把所有模块打包在一起使用。前一种方法每require一个模块，就是一条请求。

那webpack的思路是把能复用的模块放一起，不能复用的放一起，这样，当我们加载页面的时候，能复用的加载一次就留在了浏览器缓存里，可以供其他页面使用，节省流量。


# webpack 特色

1.模块分块

2.Loaders 加载模块的时候做点事

3.丰富的插件库


# webpack使用

![image](https://github.com/freebreaker/webpack-demo/blob/master/imgs/2.png)

这个图将底层原理解释清楚了，就是本来浏览器不认识什么module.exports，通过webpack转化成了图中app.bundle.js
文档里都有现成的，提一下自己遇到的几个点，一般推荐使用本地安装，二是webpack.config.js的配置文件。

var path = require('path');

module.exports = {
  entry: './app/index.js',     //入口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')       //出口
  }
};


# 关于loader
![image](https://github.com/freebreaker/webpack-demo/blob/master/imgs/3.png)

说白了就是一个工具，比如bable-loader，用途是将es6语法转化为浏览器认识的方式，json-loader就是将.json转化。

有三种使用loader的方式

1.在webpack.config.js中，也是最常见的方式

![image](https://github.com/freebreaker/webpack-demo/blob/master/imgs/4.png)

还有通过requirejs  cli的方式。看着都不太方便，不推荐。













