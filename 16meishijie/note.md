cd meishijie-fe

npm install 

启动前端代码
npm run serve

后端代码

安装 mongodb
去干网下载解压

 source ~/.bash_profile
 > ~/SoftFile/myApps/WorkApps/mongoDB4.0.20/bin/

mongo --version

`mongod --dbpath /Users/kendy/kenFile/kenWeb/开课吧第五期高级/课件/Web前端高级工程师005期课件/Web前端高级工程师005期课件/16.\ 第十六章\ Vue-美食杰实战项目/第5节\ Vue实战项目——美食杰课件/美食杰电商代码/代码/mongodb-mock-data `

后端代码
yarn install

yarn dev

连接数据库
`mongorestore -h 127.0.0.1:27017 -d meishijie --dir /Users/kendy/Desktop/WorkDataSplace/WebWorkSpalce/kaoikeba_AllStudy/16meishijie/代码/mongodb-mock-data`

-----------------
启动静态项目

`/Users/kendy/Desktop/WorkDataSplace/WebWorkSpalce/kaoikeba_AllStudy/16meishijie/meishijie-fe`

yarn 

启动
yarn serve

发现报错
找到router下index.js
加上
```js
const router = new Router({
  mode: 'history',
  routes: []
}) 
```


------------------------
项目记录

- 创建项目

npm install -g @vue/cli@3.8.4

vue --version

`vue create project-name`

vue create meishijie-01

> 如果报错就 rm -rf ~/.vuerc 
> 重新安装vue/cli

Manually select features  -> 回车

 ◉ Router
 ◉ Vuex
y
In dedicated config files 
y
回车
yarn 

 $ cd meishijie-01
 $ yarn serve






