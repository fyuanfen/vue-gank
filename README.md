
>  本项目是基于vue2最新实战项目，实现了移动端使用最多的无限滚动，侧滑导航，卡片布局，图片懒加载，左右滑动。
###首先

***
>* 感谢[gank.io](http://gank.io/)提供的api接口

>* 喜欢的请点心，关注，star ,fork,这些是我坚持下去的动力

>* demo地址 [demo](http://project.zyy1217.com/gank/) （请用chrome的手机模式预览）

>* 本项目地址[github地址](https://github.com/fyuanfen/vue-gank)

>* [项目总结](https://github.com/fyuanfen/vue-gank/blob/master/项目总结.md)

>* 手机扫一扫，直接预览

![项目二维码](http://images.zyy1217.com/1491280699.png)



### 项目技术架构

***
1. [vue](https://github.com/vuejs/vue)
2. [vue-router](https://github.com/vuejs/vue-router)
3. [vuex](https://github.com/vuejs/vuex)
4. [vue-infinite-scroll](https://github.com/ElemeFE/vue-infinite-scroll)
5. [axois](https://github.com/mzabriskie/axios)
6. [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)
7. [vue-cli](https://github.com/vuejs/vue-cli)
8. [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack)
9. [vue-lazyload](https://github.com/hilongjw/vue-lazyload)

***

###上图
***
#### 侧滑导航

![](http://images.zyy1217.com/1.gif)


#### 瀑布流布局，无限滚动，图片懒加载
![](http://images.zyy1217.com/2.gif)


#### 左右滑动，左右切换

![](http://images.zyy1217.com/3.gif)


#### 卡片布局，标题溢出省略显示
![](http://images.zyy1217.com/4.gif)




###安装
***
 
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```
启动服务(http://localhost:8080)

```
npm run dev
```
发布代码

```
npm run build
```

###目录结构
***
<pre>
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 图片资源
│   ├── common          // 公共的css js 资源
│   ├── components     // 各种组件
│   ├── App.vue         // 主页面 
│   ├── vuex           // vuex状态管理器
│   ├── router.js     // 路由配置器
│   └── main.js        // Webpack 预编译入口
</pre>

###实现的功能
***
* 瀑布流布局
* 无限滚动
* 上拉加载
* 侧边导航
* 图片懒加载
* 左右滑动切换
* 路由跳转返回自动定位
* 等等

### 正在实现的功能
***
*  搜索
*  我的收藏
*  登录
*  等等

### 最后
***

* 如果喜欢一定要 star哈!!!（谢谢!!）
* 如果有意见和问题 请在 lssues提出，我会在线解答。

