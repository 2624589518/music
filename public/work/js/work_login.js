
        function login(){
          // 获取用户输入内容  id 
          var u =document.getElementById("uname").value;
          var v =document.getElementById("upwd").value;
          //获取h2提示信息 元素
          //var msg = document.getElementById("msg");
          // alert(u+"|"+v)

          //先验证， 3-12位 字母数字 var reg 
          var  reg=/^[a-zA-Z0-9]{3,12}$/
          if(!reg.test(u)){//用户名格式有误
              alert("亲！用户名格式有误，请检查哟~ ^_^!");
              return;
          }
          if(!reg.test(v)){
            alert("亲！密码格式有误，请检查哟~ ^_^!");
            return;
          }
          //发送请求
          // 1.创建ajax对象
          var xhr = new XMLHttpRequest();

           // 2.绑定修改状态事件
          xhr.onreadystatechange = function(){
            var msg = xhr.responseText;
            // alert(msg);
             var ms=location.search;
            //  alert(ms);
            if(xhr.readyState == 4 && xhr.status == 200){
                
                // alert(msg);
                if(msg==1){
                    //成功
                  location.href="work_list.html"
                 }else{
                alert("用户名或密码有误，请重试");
                 }
               }
            }
          var url="http://127.0.0.1:8888/v1/users/login";
          // alert(url);
          xhr.open("POST",url,true);
          xhr.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded");
          xhr.send(`&uname=${u}&upwd=${v}`);
          
          // 接收返回数据

           
      }

