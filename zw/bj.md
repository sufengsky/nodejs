
# 前端工程化

## 前端工程化的发展及工具详解
### 1什么是工程化？ 什么是前端工程化？

## 前端工程化具体类目
### 1包管理工具
对于一门成熟的语言来说，在有语言规范的同时，社区或者制定语言规范的组织也会有模块化的规范和模块存储到平台，每个都能将自己写好的模块化代码发布到平台上，同时任何人也可以下载公共平台上其他人的模块化代码，这种模块化的代码我们一般称之为包（package),平台我们称之为包管理平台，这种行为我们称之为包管理(package manager).
对于js来说，现阶段大家比较熟悉的就是nodejs环境自带的npm工具，npm全称是node package manager,就是node.js的包管理工具，对于一个符合规范的包来说，我们可以通过 npm publish发布包，同样，也可以通过npm install来下载别人发布的包，实现大家的模块复用。

社区中常见的包管理工具有：bower npm  yarn.目前还在经常使用的是npm yarn

1.1 bower    
例：bower install jquery

免去了我们直接从官网下载然后绑定到项目中的烦恼

.bowerrc是这个工具的配置文件
```js
    {
        "directory":"app/components/",
        "timeout":120000,
        "registry":{
            "search":{
                "http://localhost:8080",
                "http://registry.bower.io", 
            }
        }
    }
```

1.2 npm    
npm 是伴随着node.js下载会一同安装的一个命令，它的作用与bower一样，都是下载或发布一些js模块。

npm --version

npm install

一个合格的npm包，必须有package.json这个文件，常用字段

name version main scripts dependencies devDependencies optionalDependencies peerDependencies

1.3 yarn

1.4 eslint

jslint jshint eslint(重要)
源码静态检查工具

1.5格式化工具

prettier
配置文件.prettierrc

1.6 babel(重要)

ES6及其他泛js语言的编译   
npm install --save-dev @babel/cor @babel/cli 安装babel所需要的工具

@babel/core 是babel内部核心的编译和生成代码的方法

@babel/cli 是babel命令行工具内部解析相关方法

npm install --save-dev @babel/preset-env 新建 babelrc
```javascript
{ 
    "presets":[
        "@babel/preset-env":[ //caniuse.com网站参考
            "target":"> 1.5%"
        ]
    ]
}
```

package.json -> scripts -> babelcompile:" babel index.js -o output.js"

polyfill.js 解决 array.includes(1) includes方法未定义的问题     
polyfill一定要放到package.json里的dependencies节点里,一定要到运行时的依赖里     还可以通过配置(useBuiltIns/corejs)对只引入polyfill里的一部分用到的函数

1.7打包工具

打包与编译的区别    
对于js的运行环境，把commonjs AMD ESModul模块化规范之间差距抹平

browserfiy      
npm install --save-dev browserify  把一个符合commonjs模块化规范转化为通用的任何环境的模块化规范

rollup      
rollup是一个新兴的打包工具，它首先提出了一个概念：tree shaking  在打包/编译的时候把未使用到的模块移除掉(需要使用EsModule的模块化规范才能实现tree shaking,因为只有这样才能在静态分析阶段可以分析出哪些模块是未被使用到的模块;另外模块不能有副作用)
tree shaking是根据AST来做的

1.8 js压缩工具      
uglify(代码格式去掉、变量名转换或混淆)

1.9 其他一些工具
任务处理工具(gulp/grunt)

1.10通用处理工具(fis3/webpack)      


# Vue高级
## Vue高级指南 
### 1 Vue插件(plugin)
1.添加全局方法或property vue-custom-element

2.添加全局资源：指令/过滤器/过渡  vue-touch

3.通过全局混入来添加一引起组件选项 vue-router

4.添加Vue实例方法，通过把它们添加到 Vue.prototype上实现

5.一个库，提供自己的API,同时提供上面提到的一个或是多个功能 如 vue.router

### 2 Vue混合(mixin)
全局mixin       
```js
Vue.mixin({
    created():{
        console.log('mixin created')
    }
})
```

### 3 Vue插槽(slot)

可以通过 slot 也就是插槽系统，来承载父组件的子元素。熟悉 react的同学肯定知道，这一步其实就是react中的this.props.children

插槽是一具比较重要的特性，使用插槽能让我们实现更多通用功能的封装


# Vue cli从入门到精通
## cli 相关概念及知识
cli是一种通过命令行来交互的工具应用，常见的有create-react-app vue-cli等，它们都是一段js脚本，通过封装为可执行代码的形式，进行一些操作。
使用cli之后，能快速的创建一些我们业务中的样板文件，比如快捷合建一个项目内容，配置公共的eslint、webpack等配置工具。
在封装这些内容之前，我们需要用到以下几个库
commander:命令行中的参数获取    
inquirer:命令行表单     
chalk:命令行中的可变颜色效果    
clui:命令行中的loading效果      
child_process:node原生模块，提供一些方法让我们能够执行新的命令
child_process中有一些方法，如果exec 用于创建一个子进程，然后缓存它的运行结果，运行结果后调用回调函数。
我们这里可以使用execSync,它能够执行一些我们linux中的命令

课上演示了一个简单的cli工具的开发流程       
npm -g list --depth=0  列出当前所有安装的全局命令

### 1 @vue/cli

通过 @vue/cli搭建交互式的项目脚手架

@vue/cli+@vue/cli-service-global

* 1.1 CLI 服务
```js
    {
        "scripts":{
            "server":"",
            "build":"",
        }
    }
```

* 开发浏览器兼容性
一个默认的Vue CLI项目会使用 @vue/babel-preset-app,它通过@babel/preset-env和browserlist配置来决定项目需要使用的polyfill

默认情况下，它会把 useBuiltIns:'usage'传递给@babel/preset-env，这样它会根据源代码中出现的语言特性自动检测需要的polyfill.这确保了最终包里polyfill数量的最小化。然而，这也意味着如果其中一个依赖需要特殊的polyfill,默认情况 下Babel无法将其检测出来。
如果有依赖需要polyfill,你有几种选择：
如果该依赖基于一个目标环境不支持的ES版本撰写，将其添加到vue.conifg.js中的 transpileDependencies选项。这会为该 依赖同时开启语法转换和根据使用情况检测polyfill
如果该依赖交付了ES5代码并显示地列出了需要的polyfill,你可以使用 @vue/babel-preset-app的polyfills选项预包含所需要的polyfill.注意esy.promise将被默认包含，因为现在的库依赖promise是非常普遍的。
```js
module.exports={
    presets:[
        [
            '@vue/app',
            {
                polyfills:[
                    'es6.promise',
                    'es6.symbol'
                ]
            }
        ]
    ]
}
```
如果该依赖交付ES5代码，但使用了ES6+特性且没有显示列出需要的polyfill(例如Vuetify):请使用useBuiltIns：'entry'然后在入口文件添加import '@babel/polyfill'。这会根据browserslist目标导入所有polyfill,这样你就不用再担心依赖polyfill问题了，但是因为包含了一些没有用到的polyfill所以最终的包大小可能会增加

* 1.3 现代模式
vue-cli-service build --modern

* 1.4 HTML preload
@vue/preload-webpack-plugin 注入

* 1.5 Prefetch

* 1.6 处理静态资源

* 1.7 CSS相关

* 1.8 webpack相关


### 2 vue/cli源码解读

(1) @vue/cli 生成的vue命令
(2) @vue/cli vue命令下的create方法
(3) @vue/cli-service的serve命令
(4) @vue/cli-service的build命令
(5) @vue/cli-plugin-eslint的eslint插件
(6) @vue/cli add命令增加一个插件



# 前端路由及异步组件

## 前端路由 router 原理及表现
### 背景
完全服务端渲染的优缺点
### Ajax

### 1单页应用(SPA)
特点        
1 页面中的交互不需要页面刷新
2 多个页面之间交互，不需要刷新页面。加载过的公共资源不再需要重复加载        
前端路由支持了以上两个特点      
## 2 vue.js router使用详解
vue-> hash,history

2.1 hash

特点：  
* url中带一个#，但是#中只是浏览器/客户端的状态，不会传递给服务器。        
* hash的更改，不会导致页面刷新    
* hash的更改，会在浏览器访问历史中添加一条记录          
* hash的更改，会触发 hashchange 事件

更改hash的方法
* location.hash 设置  如：location.hash='#aaa'      
* html a链接 href设置为 "#aa" 如:<a href='#aa' >链接</a>


2.2 history
hash 有个#，不美观，服务器无法接收到hash路径和参数

```js
    window.history.back();
    window.history.forward();
    window.history.go(-1);
    window.history.pushState(null,null,path);
    window.history.replaceState(null,null,path);
```

特点：
* 没有#
* pushState/replaceState并不会触发popState事件，这时我们需要手动触发页页面的重新渲染
* 我们可以使用popstate来监听url的变化
* popstate到底什么才能被触发(当点击浏览器 前进/后退 js的back forward go方法调用时)


2.3  vue.js router
vue.js路由匹配的顺序是从上到下的，所以 * path的路由一定要放到最后一个

面试题 导航守卫
(1)[组件]前一个组件的 beforeRouteLeave
(2)[全局]的router.beforEach 
    [组件]如果是路由参数变化，触发 beforeRouteUpdate
(3)[配置文件]时，下一个的beforeEnter
(4)[组件]内部声明的beforeRouterEnter
(5)[全局]的router.afterEach

面试题 vue-router 里面 怎么记住一个页面的滚动条的位置       
在路由里增加 scrollBeheavior属性 (并不一定完全生效)      
1.手动点击浏览器前进或是后退按钮，基于history(go back forward) 会记住
2.router-link 并没有记住滚动条的位置 不会记住

面试题  hash路由与history路由的区别


# 状态管理及路由同构

## 状态管理
状态管理主要做的两件事情:       
* 在顶层实现一个数据管理的仓库store,将所有组件间需要共享的数据放置于些
* 同时组件可以对这个store内的数据进行更新，同时更新完之后响应式更新所有使用些数据组件的视图


## 服务端渲染(SSR)与客户端渲染(CSR)
两个概念的含义      
两者的区别：    
* 对服务端的压力是不一样的
* 是否受客户端js禁用不同

vue SSR 需要安装以下组件        
npm i --save vue-server-renderer vue express


npm i --save express vue vue-router vue-server-renderer         
npm i --save-dev  bable-core@6 babel-loader@7 babel-preset-env babel-preset-stage-3@6 webpack3 webpack-merge  


# Vue项目实战


# Vue组件库设计


# Vue源码解析

Vue使用Object.defineProperty+观察者模式和模块进行绑定，对于数据来说需要进行更新时，即会触发对应的getter和setter函数。在setter函数中，即可对应收集到的依赖，触发对应视图层更新。