<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html lang="zh-Hans-CN">
<!-- 响应式支持 -->
<meta charset="utf-8"/>
<title>登录</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
    <title>登录窗口</title>
    <!-- Bootstrap core CSS -->
    <link href="js/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/wms.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div class="navbar navbar-default" role="navigation">
        <div class="navbar-header" >
            <h3 class="navbar-text customFontfamily">仓库管理系统</h3>
        </div>
    </div>
    <div class="alert alert-danger hide"> <strong>Error：</strong> 认证失败！ </div>
    <div class="container" style="width:300px; margin-top:80px;">

        <form role="form" id="loginForm">
          <div class="form-group">
          	<label>登录用户ID：</label>        
			<div class="input-icon">
				<span class="glyphicon glyphicon-user"></span>
           	 	<input id="txtUserID" type="text"  name="txtUserID" class="form-control login-input" placeholder="用户ID" required autofocus>
           	</div>
           </div>
         <div class="form-group">
         	<label>用户密码：</label>
         	<div class="input-icon">
         		<span class="glyphicon glyphicon-lock"></span>
            	<input id="txtPwd" type="password" name="txtPwd" class="form-control login-input" placeholder="用户密码"  required>
         	</div>
         </div>
         <button id="btnLogin" class="btn btn-primary btn-block" type="button">登录</button>
       </form>
    </div> <!-- /container -->
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/lib/jquery-1.11.0.min.js" type="text/javascript"></script>
    <script src="js/lib/jquery.formloader.js" type="text/javascript"></script>
    <script src="js/lib/jquery-validation/js/jquery.validate.min.js" type="text/javascript" ></script>
    <script src="js/lib/jquery.form.js" type="text/javascript"></script>
    <script src="js/login.js" type="text/javascript"></script>
    <script src="js/lib/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>   
</body>
</html>
