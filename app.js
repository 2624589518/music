//我的项目 音乐
// 引入模块 WEB服务端
const express=require('express');
//引入用户路由器
const userRouter=require('./router/user.js');

//引入body-parserz中间件模块
const bodyParser = require('body-parser');
//创建WEB服务器
const app =express();

//设置端口
app.listen(8080);

//托管静态资源到public 目录
app.use(express.static('./public'));

//使用body-parser中间件,将pos请求的数据解析为对象
 app.use(bodyParser.urlencoded({
 	extended:false
 })); 

//挂载路由器.添加前缀/v1/users
app.use('/v1/users',userRouter);

