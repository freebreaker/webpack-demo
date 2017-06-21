# webpack-demo

h1 webpack 简述

WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。主要包含四个核心概念：入口(entry)、输出(output)、loader、插件(plugins)。

优势：
1.在webpack看来一切都是模块！这就是它不可不说的优点，包括你的JavaScript代码，也包括CSS和fonts以及图片等等等，只有通过合适的loaders，它们都可以被当做模块被处理。

2.Loader
Webpack 本身只能处理原生的 JavaScript 模块，但是 loader 转换器可以将各种类型的资源转换成 JavaScript 模块。这样，任何资源都可以成为 Webpack 可以处理的模块

3.丰富的插件系统。大多数内容功能都是基于这个插件系统运行的，还可以开发和使用开源的 Webpack 插件，来满足各式各样的需求。

和requirejs相比：

1.require.js的所有功能它都有

2.编绎过程更快，因为require.js会去处理不需要的文件

3.还有一个额外的好处就是你不需要再做一个封装的函数，不用define，自己用就require,给别人用就exports
