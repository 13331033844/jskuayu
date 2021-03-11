window.onload = function(){

    $(document).ajaxComplete(function(event,request, settings){
      if (request.responseJSON.code == 401) {
        this.location.href="2.html"
      }
    });



}

function getToken() {
            $.ajax({
             type: "GET",
             url: "http://newlocalhost/index.php/login/admin/index1",
             data: {},
             async: false,
             dataType: "json",
             success: function(data){
                console.log(data.data)
                setCookie('token',data.data)
             },
              error: function (err) {
                    console.log(JSON.stringify(err));
             }
         });
        }

// 设置cookie
        function setCookie(name,value)
        {
            var Days = 30;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days*24*60*60*1000);
            document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();

            
            var strsec = getsec('30s');
            var exp = new Date();
            exp.setTime(exp.getTime() + strsec*1);
            document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();

            function getsec(str)
            {
               // alert(str);
               var str1=str.substring(1,str.length)*1;
               var str2=str.substring(0,1);
               if (str2=="s")
               {
                    return str1*1000;
               }
               else if (str2=="h")
               {
                   return str1*60*60*1000;
               }
               else if (str2=="d")
               {
                   return str1*24*60*60*1000;
               }
            }
        }
// 调用cookie
        
        function getCookie(name)
        {
            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
         
            if(arr=document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        }
// 

        // if (!getCookie('token')) {
        //     getToken()
        // }
        var token = getCookie('token');

// 删除cookie
  function delCookie(name)
  {
    setCookie(name, "", -1); 
  }




    