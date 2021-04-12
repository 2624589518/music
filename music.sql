/** 设置编码创建music数据库 **/
SET NAMES UTF8;
DROP DATABASE IF EXISTS music;
CREATE DATABASE music CHARSET=UTF8;
USE music;

/** 首页歌单推荐表 music_main_recommend **/
CREATE TABLE music_main_recommend(
	rid INT PRIMARY KEY AUTO_INCREMENT,		#推荐歌单id
	rtitle VARCHAR(64),				#推荐标题
	rimg VARCHAR(64),				#推荐图片
	rplay DECIMAL(10,2),				#播放量
	rcate VARCHAR(32)				#类别

);

/** 首页新歌首发表 music_main_new **/
CREATE TABLE music_main_new(
	newid INT PRIMARY KEY AUTO_INCREMENT,		#新歌id
	newing VARCHAR(32),				#新歌图片
	newtitle VARCHAR(32),				#新歌标题名	
	newname	VARCHAR(32)				#新歌作者

);

/** 用户表 music_user **/
CREATE TABLE music_user(
	uid INT PRIMARY KEY AUTO_INCREMENt,		#用户id
	uname VARCHAR(32),				#用户名	
	upwd VARCHAR(32)				#用户密码

);

/* 用户喜欢的音乐表 music_user_yue */
CREATE TABLE music_user_yue(
	yueid INT PRIMARY KEY AUTO_INCREMENT,		#用户喜欢的id
	yuetitle VARCHAR(64),				#喜欢歌曲的名字	
	yuename VARCHAR(64)				#喜欢歌曲的作者

);
