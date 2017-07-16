# vue-admin
Vue最新全家桶后台管理系统
> 最近公司项目需要用到vue，此管理后台针对公司需求进行定制，所有数据均为虚拟数据

### 几个核心功能点：
``` bash
1、权限登录 axios + localStorage方式进行验证
2、echarts图标直观展示及敏感数据进行分析
3、增加模板数据增、删、改、查等功能
4、axios翻页控制翻页

```
> 账户/密码:admin

## 主要技术栈
* vue
* vue-router
* vuex
* axios
* element-ui
* echarts
* sass
* ES6/7
* webpack 2.x


## 界面截图
![image](https://github.com/GavinJser/vue-admin/blob/master/static/index.jpg)
![image](https://github.com/GavinJser/vue-admin/blob/master/static/login.jpg)
![image](https://github.com/GavinJser/vue-admin/blob/master/static/search.jpg)
![image](https://github.com/GavinJser/vue-admin/blob/master/static/list.jpg)
![image](https://github.com/GavinJser/vue-admin/blob/master/static/add.jpg)
![image](https://github.com/GavinJser/vue-admin/blob/master/static/add1.jpg)
![image](https://github.com/GavinJser/vue-admin/blob/master/static/edit.jpg)

# 项目结构(vue-cli)
``` bash
|- build  -------------------- server webpack
|- config  ------------------- webpack配置文件
|- dist  --------------------- 构建目录
|- src/  --------------------- 项目源代码
    |- assets  --------------- 项目资源文件
    |- components ------------ 相关组件目录
    |- router  --------------- 路由
    |- store  ---------------- vuex
    |- admin.vue  ------------ 后台首页  
    |- App.vue  -------------- vue入口
    |- main.js  -------------- 入口文件
|- static  ------------------- 静态资源目录
|- .babelrc  ----------------- babel 配置文件
|- index.html  --------------- HTML 模板
|- package.json  ------------- npm 配置文件
|- README.md  ---------------- 项目帮助文档

```


## 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```


