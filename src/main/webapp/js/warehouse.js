$(document).ready(function() {
	
	$('#loginName').text(sessionStorage.getItem("USER_NAME"));
	
	$('#btnLogout').click(function(e) {
		sessionStorage.removeItem("USER_ID");
        sessionStorage.removeItem("USER_NAME");
        location.href = "login.jsp";
	});
	
	$('.js_sub_menu').click(function(e) {		
		//清除所有的选中状态
		$('.js_sub_menu').parent().parent().removeClass('active');
		$('.js_sub_menu').removeClass('active');
		//选中状态
		$(this).parent().parent().addClass('active');
		$(this).addClass('active');
	});
	
	var obj = $('.nav-tabs').find('a[data-toggle="tab"]');
	obj.first().trigger('click');
	
});