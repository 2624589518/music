
    // 创建一个函数完成注册功能
    function reg() {
      //alert(1);
      // 0. 获取用户输入 用户名和密码
      var u = document.getElementById("uname").value;
      var v = document.getElementById("upwd").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      // 1.1验证 设置正则表达式
      var regtext = /^[a-zA-Z0-9]{3,12}$/
      var regemail=/^[a-zA-Z0-9]*@\w*\.com$/;
      var regphone=/^1[3-9]\d{9}$/;
      // 1.2 验证
      if (!regtext.test(u)) {
        msg.innerHTML = "用户名格式错误"
        return;
      }
      if (!regtext.test(v)) {
        msg.innerHTML = "密码格式错误"
        return;
      }if(!regemail.test(email)){
        msg.innerHTML="邮箱格式错误"
          return;
     }
     if(!regphone.test(phone)){
        msg.innerHTML="手机格式错误"
          return;
     }
      
      //alert(u+v);
      //  1.创建ajax对象
      var xhr = new XMLHttpRequest();
      //2.绑定修改事件
      xhr.onreadystatechange = function () {
        // 5.接收服务器返回的数据
        //alert(xhr.responseText);
        //var msg=document.getElementById("msg");
        //msg.innerHTML="注册成功"; xhr.responseText
        //var obj=JSON.parse(xhr.responseText);
        //msg.innerHTML=obj.msg;
        //判断状态码 4 和200 
        if (xhr.readyState === 4 && xhr.status === 200) {
          //5:接收服务器返回数据
          var msg = document.getElementById("msg");
          var obj = JSON.parse(xhr.responseText);
          msg.innerHTML = obj.msg;
        }


      }
      // 3.打开连接
      var url = "http://127.0.0.1:8888/v1/users/reg";
      xhr.open("post", url, true);
      // 3.1 修改头类型
      xhr.setRequestHeader("Content-Type"
        , "application/x-www-form-urlencoded");
      // 4.发送请求
      var formdata = `uid=null&uname=${u}&upwd=${v}&email=${email}&phone=${phone}`;
      // alert(formdata);
      xhr.send(formdata);
    }

