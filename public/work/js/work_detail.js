
      // 页面加载成功
      window.onload= function(){
            //alert(1);
            // 发送请求
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                  // 接收返回数据
                   if(xhr.readyState==4 && xhr.status==200){
                    //alert(xhr.responseText);
                    console.log()
                    var rows = JSON.parse(xhr.responseText);
                    //alert(rows)
                    console.log(rows[0].email);
                    // alert(rows)
                    // 依据id获取页面元素
                    var uanme=document.getElementById("uname");
                    var gender=document.getElementById("gender");
                    var email=document.getElementById("email");
                    var phone=document.getElementById("phone");
                    var user_name =document.getElementById("user_name")
                    // 传递数据的值
                    //console.log(rows.uanme);
                    uanme.value=rows[0].uname;
                    user_name.value=rows[0].user_name;
                    phone.value=rows[0].phone;
                    email.value=rows[0].email;
                    // gender.value=rows.gender;
                    // if(rows[0].gender==1){
                    //   man.checked = true;
                    // }else{
                    //   woman.checked = true;   
                    // }
                   }
            }
            // 获取地址？的值
            var uid=location.search;
            //alert(uid);
            console.log(uid)
            var url=`http://127.0.0.1:8888/v1/users/find/${uid}`;
            xhr.open("GET",url,true);
            xhr.send();
      }
      
      function put(){
         //获取元素 
              // var uanme=document.getElementById("uname");
              // var gemnder=document.getElementById("gender");
              // var email=document.getElementById("email");
              // var phone=document.getElementById("phone");
              // var user_name =document.getElementById("user_name")

          var obj =new URLSearchParams(location.search);
          console.log(obj.get("uid"));
          var _uid=obj.get("uid");
          console.log(uname.value);
          var _uname = uname.value;
          var _email = email.value;
          var _phone = phone.value;

             

              // 2.发送请求
              var xhr = new XMLHttpRequest();
              xhr.onreadystatechange = function(){
                    if(xhr.readyState==4 && xhr.status==200){
                      // alert(xhr.responseText);
                      var r=xhr.responseText;
                    //  alert(r);
                      if(r==1){
                        alert("修改成功!");
                        location.href="pro_list.html";
                        // location.herf="pro_list.html";
                        // locatio.herf="pro_list.html"
                      }else{
                        alert("操作错误!!");
                      }

                    }
              }
              // 获取地址？的值
              // var uid=location.search;
            //  uid=uid.substr(5,)
            //  uid=parseInt(uid)
            //   console.log(uid)
            //   console.log(location.pathname)
            //  conosle.log(location.protocol)
            //   console.log(location.href)
            //   console.log(location.origin)v1/users/
            //   console.log(location.search)
            
               var url =`http://127.0.0.1:8080/v1/users/put`;
               xhr.open("put",url,true);
               var formdate = `email=${_email}&uname=${_uname}&phone=${_phone}&uid=${_uid}`;
               xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
              //  var res=`[{uname:${uname.value}}]`;
               xhr.send(formdate);

      }
