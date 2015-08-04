$(document).ready(function() {
        $("#txtPwd").keydown(function(e){
            if(e.keyCode==13){
                $("#btnLogin").click();
            }
        });
        $('#login_err_show').text("");
        //
        $('#btnLogin').click(function($e) {
            var userid = $.trim($("#txtUserID").val());
            var userpwd = $.trim($("#txtPwd").val());
            // 
            if (!userid) {
                $('#login_err_show').text("登录的用户名不能为空");
                $("#txtUserID").focus();
                return;
            }
            if (!userpwd) {
                $('#login_err_show').text("密码不能为空");
                $("#txtPwd").focus();
                return;
            }
            
            
            //doLogin(userid, userpwd);
        });
        
    });