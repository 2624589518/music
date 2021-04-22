
// function deleter(){}
// 页面加载成功
window.onload=function(){
    //alert(2);
    // 发送请求 
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
          //接收返回数据
          if(xhr.readyState===4 && xhr.status==200){
              //alert(xhr.responseText);
              // 1.将服务器返回字符串转换为js对象
              var rows = JSON.parse(xhr.responseText);
              //alert(rows);
              // 2.依据id获取tbody
              var tbody = document.getElementById("data");
              // 3.创建html 拼接字符串 tr td
              var html = "";
              // 4.创建循环遍历数组所有对象
              for(var i=0;i<rows.length;i++){
                 // 5.依据对象拼接字符串
                  html +=`
                      <tr>
                        <td>${rows[i].uname}</td>
                        <td>${rows[i].phone}</td>
                          <td>
                           <a href="javascript:del(${rows[i].uid})"> 删除</a>
                           <a href="work_detail.html?uid=${rows[i].uid}"> 查询</a>
                          </td>
                      </tr>
                  `;
              }
             
              // 6.循环外 ，将字符串赋值给tbody.innerHTML
              tbody.innerHTML=html;
             
          }
    }
    var url="http://127.0.0.1:8888/v1/users/userlist";
    xhr.open("GET",url,true);
    xhr.send();
    // 接收返回数据 .显示
    // var s=confirm("是否删除指定用户")
    // console.log(s);
}

//完成用户删除的操作
// -创建函数 del(uid) 用户编号
function del(uid){
    //alert(1+uid);
  //   -显示确认框
  var rs= confirm("是否删除指定的用户？");
  //  判断是否发送请求，
  if (!rs){
    return;
  }
  //发送请求
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function (){
      if(xhr.readyState===4 && xhr.status===200){
        if (xhr.responseText==1){
              // 刷新 {1.重新显示页面。2.再次发请求}
              location.reload(true);//强制刷新

          }else{
            // 提示删除成功或失败 
            alert("删除失败！")
          }
      }
  }
  var url=`http://127.0.0.1:8888/v1/users/del/${uid}`;
  //alert(url);
  xhr.open("delete",url,true);
  xhr.send();
 

  // 提升删除成功或失败 
  // 刷新
};
      
