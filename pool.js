//数据库连接
const mysql=require('mysql');

//创建连接池对象
const pool= mysql.createPool({
	host:'127.0.0.1',
	post:'3306',
	user:'root',
	password:'',
	database:'music',
	connectionLimit:'20'
});

//导出连接池对象
module.exports=pool;