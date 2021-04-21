const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();
//1.用户注册(post /reg)
r.post('/reg',(req,res)=>{
  //1.1获取post请求的数据
  var obj=req.body;
  console.log(obj);
  //1.2验证各项数据是否为空
   var i=400;
   for(var k in obj){
	 i++;
     if(!obj[k]){
	   res.send({code:i,msg:k+'不能为空'});
	   return;
	 }
   }
  //1.3执行SQL命令，将数据插入到数据表
  pool.query('insert into music_user set ?',[obj],(err,result)=>{
    if(err){
	  console.log(err);
	  res.send({code:500,msg:'服务器端错误'});
	  return;
	}
	res.send({code:200,msg:'用户注册成功'});
  });
});
//2.用户登录(post /login)
// r.post('/login',(req,res)=>{
//   //2.1获取post请求的数据
//   // var obj=req.body;
//   var uname=req.query.uname;
// 	var upwd=req.query.upwd;
//   console.log(obj);
//   // if(!obj.uname){
//   //   res.send({code:401,msg:'uname不能为空'});
// 	// return;
//   // }
//   // if(!obj.upwd){
//   //   res.send({code:402,msg:'upwd不能为空'});
// 	// return;
//   // }
//   //2.3执行SQL命令
//   pool.query('select * from music_user where uname=? and upwd=?',[uname,upwd],(err,result)=>{
//     if(err){
// 	  console.log(err);
// 	  res.send({code:500,msg:'服务器端错误'});
// 	  return;
// 	}
// 	console.log(result);
// 	//返回结果为数组，如果数组长度为0说明登录失败，否则登录成功
// 	if(result.length===0){
//     // res.send({code:201,msg:'登录失败'});
// 	  res.send({code:201,msg:'0'});
    
// 	}else{
//     // res.send({code:200,msg:'登录成功'});
// 	  res.send({code:200,msg:'1'});
    
// 	}
//   });
// });
// r.get("/login",(req,res)=>{
// 	var _uname=req.query.uname;
// 	var _upwd=req.query.upwd;
// 	var sql="select * from music_user where uname=? and upwd=?";
// 	pool.query(sql,[_uname,_upwd],(err,result)=>{
// 		if(err) throw err;
// 		if(result.length>0){
// 			res.send("1"); //登入成功
// 		}else{
// 			res.send("0");
// 		}
// 	});
	
// });

//2.用户登录(post /login)
r.post('/login',(req,res)=>{
  //2.1获取post请求的数据
  var obj=req.body;
  console.log(obj);
  if(!obj.uname){
    res.send({code:401,msg:'uname不能为空'});
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd不能为空'});
	return;
  }
  //2.3执行SQL命令
  pool.query('select * from music_user where uname=? and upwd=?',[obj.uname,obj.upwd],(err,result)=>{
    if(err){
	  console.log(err);
	  res.send({code:500,msg:'服务器端错误'});
	  return;
	}
	console.log(result);
	//返回结果为数组，如果数组长度为0说明登录失败，否则登录成功
	if(result.length===0){
		// res.send({code:201,msg:'登录失败'});
		res.send("0");
	}else{
		// res.send({code:200,msg:'登录成功'});
		res.send("1")
	}
  });
});

//获取所有用户信息
r.get("/userlist",(req,res)=>{
	var sql="select * from music_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		//console.log(typeof(result));
		//console.log(result);
		res.send(result);
	});
});
r.get("/find",(req,res)=>{
  var obj1=req.query;//路由传参
  console.log(obj1);
	var sql=" select * from music_user where uid=?";
	pool.query(sql,[obj1.uid],(err,result)=>{
		if(err) throw err;
		//console.log(typeof(result));
		//console.log(result);
    //	res.send({code:1,msg:"查询成功",date:result});
    res.send(result);
	});
});
//导出路由器对象
module.exports=r;