<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=utf-8"%>
 <!DOCTYPE html>
 <html lang="zh-Hans-CN">
    <head>
	    <meta charset="utf-8"></meta>
	    <meta content="IE=edge" http-equiv="X-UA-Compatible"></meta>
	    <meta content="width=device-width, initial-scale=1" name="viewport"></meta>
	    <meta content="" name="description"></meta>
	    <meta content="" name="author"></meta>
	    <link href="img/logo.png" rel="shortcut icon"></link>
	    <title>仓库管理系统 </title>
	
	    <link href="js/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />	
	    <link rel="stylesheet" href="css/sticky-footer-navbar.css"></link> 
	    <link rel="stylesheet" href="css/wms.css"></link> 
    </head>
    <body>

	  <div class="navbar navbar-default navbar-fixed-top" role="navigation">
	      <div class="container">
	        <div class="navbar-header">
	          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
	            <span class="sr-only">Toggle navigation</span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	          </button>
	          <a class="navbar-brand" href="#">仓库管理系统</a>
	        </div>
	        <div class="collapse navbar-collapse">
	          <p class="navbar-text navbar-right">登录者：<strong><span id="loginName"></span></strong><button type="button" id="btnLogout" class="btn btn-link">退出</button></p>
	          <ul class="nav navbar-nav">
	            <li>
	            	<a href="#" class="dropdown-toggle" data-toggle="dropdown">出入库管理<b class="caret"></b></a>
	            	<ul class="dropdown-menu">
		                <li  class="js_sub_menu"><a href="#">入库管理</a></li>
		                <li class="divider"></li>
		                <li  class="js_sub_menu"><a href="#">出库管理</a></li>
		                <li class="divider"></li>
		                <li  class="js_sub_menu"><a href="#">库存管理</a></li>
	              </ul>
	            </li>
	            <li>
	            	<a href="#" class="dropdown-toggle" data-toggle="dropdown">计费管理<b class="caret"></b></a>
	            	 <ul class="dropdown-menu">
	               	 	<li  class="js_sub_menu"><a href="#">计费管理</a></li>
	               	 	<li class="divider"></li>
	                	<li  class="js_sub_menu"><a href="#">付款清单管理 </a></li>
	                	<li class="divider"></li>
	                	<li  class="js_sub_menu"><a href="#">收款清单管理 </a></li>
	              	</ul>
	            </li>
	            <li>
	            	 <a href="#" class="dropdown-toggle" data-toggle="dropdown">客户管理<b class="caret"></b></a>
	           		 <ul class="dropdown-menu">
	               	 	<li  class="js_sub_menu"><a href="#">货主管理 </a></li>
	               	 	<li class="divider"></li>
	                	<li  class="js_sub_menu"><a href="#">货主组管理 </a></li>
	                	<li class="divider"></li>
	                	<li  class="js_sub_menu"><a href="#">委托方管理 </a></li>
	                	<li class="divider"></li>
	                	<li  class="js_sub_menu"><a href="#">运输公司管理 </a></li>
	              	</ul>
	            </li>
	            <li>
	              <a href="#" class="dropdown-toggle" data-toggle="dropdown">物品管理 <b class="caret"></b></a>
	              <ul class="dropdown-menu">
	                <li  class="js_sub_menu"><a href="#">物品管理 </a></li>
	                <li class="divider"></li>
	                <li  class="js_sub_menu"><a href="#">物品组管理 </a></li>
	              </ul>
	            </li>
	          </ul>
	        </div><!--/.nav-collapse -->
	      </div>
	    </div>
         <!--
          Begin page content 
         -->
        <div class="container">
     		<jsp:include page="warehouse.jsp" flush="true" />
	    </div>
	    <!--
          footer 
         -->
	    <div id="footer">
	       <div class="container">
	      	  <p class="text-muted">CopyRight 2015 v1.0.0.0 Dalian</p>
	       </div>
	    </div>
		
        <script src="js/lib/jquery-1.11.0.min.js" type="text/javascript"></script>
        <script src="js/lib/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/warehouse.js" type="text/javascript"></script>
    </body>
</html>

