$(document).ready(function() {
        $("#txtPwd").keydown(function(e){
            if(e.keyCode==13){
                $("#btnLogin").click();
            }
        });
//        $('#login_err_show').text("");
//        //
//        $('#btnLogin').click(function($e) {
//            var userid = $.trim($("#txtUserID").val());
//            var userpwd = $.trim($("#txtPwd").val());
//            // 
//            if (!userid) {
//                $('#login_err_show').text("登录的用户名不能为空");
//                $("#txtUserID").focus();
//                return;
//            }
//            if (!userpwd) {
//                $('#login_err_show').text("密码不能为空");
//                $("#txtPwd").focus();
//                return;
//            }
//            
//            
//            //doLogin(userid, userpwd);
//        });
	$('#btnLogin').click(function($e) {
		$("#loginForm").submit();
	});
	
	$("#loginForm").formloader({
		data : {}
	}).validate({
		errorElement : 'label',
		errorClass : 'help-block',
		focusInvalid : false,
		rules : {
			txtUserID : {
				required : true
			},
			txtPwd : {
				required : true
			}
		},
		messages : {
			txtUserID : {
				required : "登录用户ID不能为空"
			},
			txtPwd : {
				required : "密码不能为空"
			}
		},
		invalidHandler : function(event, validator) {
			$('.alert-danger').show();
		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		success : function(label) {
			label.closest('.form-group').removeClass('has-error');
			label.remove();
		},
		errorPlacement : function(error, element) {
			error.insertAfter(element);
		},
		submitHandler : function(form) {

			doLogin($('#txtUserID').val(), $('#txtPwd').val());
		}
	});
        
    });

var doLogin = function(uid, pwd) {
    jQuery.ajax({
        beforeSend : function(xhr) {
            xhr.setRequestHeader("userId", uid);
            xhr.setRequestHeader("password", pwd);
        },
        type : "POST",
        url : "./login",
        error : function(XMLHttpRequest) {
        	$('.alert-danger').removeClass("hide");
            $("#txtUserID").val("");
            $("#txtPwd").val("");
            $("#txtUserID").focus(); 
           
        },
        success : function(data, status) {
        	$('.alert-danger').addClass("hide");
            sessionStorage.setItem("AIRR_USERID", uid);
            sessionStorage.setItem("AIRR_USER_NAME", data.user_name);

            location.href = "home.htm";
        }
    });
};