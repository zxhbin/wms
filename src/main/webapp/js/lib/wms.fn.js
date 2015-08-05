(function($) {
	$.fn.showAjax = function() {
		Metronic.blockUI({
			message : '提交中，请稍候...'
		});
	};
	$.fn.hideAjax = function() {
		Metronic.unblockUI();
	};
	$.fn.updateAjaxPrompt = function(text) {
		$.fn.showInfo(text);
	};
	$.fn.showError = function(text) {
		Metronic.alert({
			focus : true,
			type : 'danger',
			icon : 'times-circle',
			message : text,
			place : 'prepend',
			closeInSeconds : 10
		});
	};
	$.fn.showWarn = function(text) {
		Metronic.alert({
			focus : true,
			type : 'warning',
			icon : 'exclamation-circle',
			message : text,
			place : 'prepend',
			closeInSeconds : 10
		});
	};
	$.fn.showInfo = function(text) {
		Metronic.alert({
			focus : true,
			type : 'info',
			icon : 'info-circle',
			message : text,
			place : 'prepend',
			closeInSeconds : 10
		});
	};
	$.fn.showSuccess = function(text) {
		Metronic.alert({
			focus : true,
			type : 'success',
			icon : 'check-circle',
			message : text,
			place : 'prepend',
			closeInSeconds : 10
		});
	};
	$.fn.hiddenPrompt = function() {
		$('.Metronic-alerts').remove();
	};
	$.fn.formClear = function(element) {
		$("input,select,textarea", element).each(function() {
			var t = this.type, tag = this.tagName.toLowerCase();
			if (t == "text" || t == "hidden" || t == "password" || tag == "textarea") {
				this.value = "";
			} else {
				if (t == "file") {
					var file = $(this);
					var file1 = file.clone().val("");
					file1.insertAfter(file);
					file.remove();
				} else {
					if (t == "checkbox" || t == "radio") {
						this.checked = false;
					} else {
						if (tag == "select") {
							this.selectedIndex = -1;
						}
					}
				}
			}
		});
	};
	$.fn.postData = function(url, data, callback) {
		$.fn.ajaxData(url, callback, 'POST', data);
	};
	$.fn.getData = function(url, data, callback) {
		$.fn.ajaxData(url, callback, 'GET', data);
	};
	$.fn.deleteData = function(url, callback, data) {
		$.fn.ajaxData(url, callback, 'DELETE', data);
	};
	$.fn.putData = function(url, callback, data) {
		$.fn.ajaxData(url, callback, 'PUT', data);
	};
	$.fn.ajaxData = function(url, callback, type, data) {
		$.fn.showAjax();
		$.ajax({
			url : url,
			/*success : callback,*/
			dataType : "json",
			data : data,
			type : type
		}).done(function(response) {
			if (typeof (callback) == 'function') {
				callback(response);
				return;
			}
			if (response.success) {
				$.fn.showSuccess("提交成功");
			} else {
				if (response.errorMessage) {
					$.fn.showError(response.errorMessage);
					return;
				}
				if (response.data && response.data.errorMessage) {
					$.fn.showError(response.data.errorMessage);
					// TODO custom message
				} else {
					$.fn.showError("提交请求失败");
				}
			}
		}).fail(function() {
			$.fn.showError("提交请求失败");
		}).always(function() {
			Metronic.scrollTo();
			$.fn.hideAjax();
		});
	};
	$.fn.serializeJson = function(formId) {
		var serializeObj = {};
		var array = $('#' + formId).serializeArray();
		$(array).each(function() {
			if (serializeObj[this.name]) {
				if ($.isArray(serializeObj[this.name])) {
					serializeObj[this.name].push(this.value);
				} else {
					serializeObj[this.name] = [ serializeObj[this.name], this.value ];
				}
			} else {
				serializeObj[this.name] = this.value;
			}
		});
		return serializeObj;
	};
	$.fn.pageRedirect = function(url, params) {
		if (params) {
			var paramArr = [];
			for ( var p in params) {
				paramArr.push(p + '=' + params[p]);
			}
			if (url.indexOf('?') < 0) {
				url += '?';
			} else {
				url += '&';
			}
			url += paramArr.join('&');
		}
		window.location.href = url;
	};
})(jQuery);