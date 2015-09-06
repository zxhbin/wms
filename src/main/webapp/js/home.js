$(document).ready(function() {

	var menuData = {
			datas: ""
	};	
	//菜单的初始化 TODO
	var pagefn = doT.template(document.getElementById('menutmpl').text);
	$('#wms-menus').html(pagefn(menuData));	
	//登录的用户名
	$('#loginName').text(sessionStorage.getItem("USER_NAME"));
	
	//退出
	$('#btnLogout').click(function(e) {		
		doLogout();
	});
	
	//子菜单的点击事件
	$('.js_sub_menu').click(function(e) {		
		//清除所有的选中状态
		$('.js_sub_menu').parent().parent().removeClass('active');
		$('.js_sub_menu').removeClass('active');
		//选中状态
		$(this).parent().parent().addClass('active');
		$(this).addClass('active');
	});
	//入库管理点击事件
	$('.js_ware').click(function() {
		$('#wms-content').html("");
		
		var data = {
				name: "warehouse.jsp"
		};	
		
		var contentfn = doT.template(document.getElementById('contenttmpl').text);
		$('#wms-content').html(contentfn(data));
		
		var obj = $('.nav-tabs').find('a[data-toggle="tab"]');
		obj.first().trigger('click');	
	});
	//出库管理点击事件
	$('.js_delivery').click(function(e) {
		$('#wms-content').html("");
		
		var data = {
				name: "delivery.jsp"
		};	
		
		var contentfn = doT.template(document.getElementById('contenttmpl').text);
		$('#wms-content').html(contentfn(data));
		
		var obj = $('.nav-tabs').find('a[data-toggle="tab"]');
		obj.first().trigger('click');	
	});
	//用户管理的点击事件
	$('.js_user').click(function(e){
		
		    $('#wms-content').html("");
			
			var data = {
					name: "user.jsp"
			};		
		    
			var contentfn = doT.template(document.getElementById('contenttmpl').text);
			$('#wms-content').html(contentfn(data));
			
			var obj = $('.nav-tabs').find('a[data-toggle="tab"]');
			obj.first().trigger('click');
			//加载用户列表
			loadUserTable('');
		}
			
	);
	
	
	var obj = $('.nav-tabs').find('a[data-toggle="tab"]');
	obj.first().trigger('click');		
	
});

var doLogout = function() {
	sessionStorage.removeItem("USER_ID");
    sessionStorage.removeItem("USER_NAME");
    
    jQuery.ajax({
        type : "POST",
        url : "./logout"
    });
    location.href = "login.jsp";
};