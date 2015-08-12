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
    </head
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
	          <a class="navbar-brand" href="#">Project name</a>
	        </div>
	        <div class="collapse navbar-collapse">
	          <p class="navbar-text navbar-right">登录者：<strong><span id="loginName"></span></strong></p>
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
     		<div class="tabbable-line">
					<ul class="nav nav-tabs ">
						<li class="active" >
							<a aria-expanded="true" href="#tab_1_1" data-toggle="tab">
							入库单管理 </a>
						</li>
						<li class="">
							<a aria-expanded="false" href="#tab_1_2" data-toggle="tab">
							入库单审核</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane" id="tab_1_1">
							<p>
								 I'm in Section 1.
							</p>
							<p>
								 Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
							</p>
						</div>
						<div class="tab-pane" id="tab_1_2">
							<p>
								 Howdy, I'm in Section 2.
							</p>
							<p>
								 Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
							</p>
							<p>
								<a class="btn green" href="ui_tabs_accordions_navs.html#tab_15_2" target="_blank">
								Activate this tab via URL </a>
							</p>
						</div>
					</div>
			</div>
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

