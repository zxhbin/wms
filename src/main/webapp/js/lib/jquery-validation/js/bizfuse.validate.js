$.validator.addMethod("mobile", function(value, element) {
    var length = value.length;
    return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));    
}, "手机号码格式错误"); 

$.validator.addMethod("phone", function(value, element) {
    var tel = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
    return this.optional(element) || (tel.test(value));
}, "电话号码格式错误(格式为：区号-号码)");

$.validator.addMethod("fax", function(value, element) {
    var tel = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
    return this.optional(element) || (tel.test(value));
}, "传真号码格式错误");

$.validator.addMethod("zipCode", function(value, element) {
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, "邮政编码格式错误");

// 联系电话(手机/电话皆可)验证   
$.validator.addMethod("isTel", function(value,element) {   
    var length = value.length;   
    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;   
    var tel = /^(\d{3,4}-?)?\d{7,9}$/g;       
    return this.optional(element) || tel.test(value) || (length==11 && mobile.test(value));   
}, "请正确填写您的联系方式"); 

$.validator.addMethod("isQq", function(value, element) {       
     return this.optional(element) || /^[1-9]\d{4,12}$/;       
}, "QQ号码不正确");   

// 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。      
$.validator.addMethod("isPwd", function(value, element) {       
     return this.optional(element) || /^[a-zA-Z]\\w{6,12}$/.test(value);       
}, "以字母开头，长度在6-12之间，只能包含字符、数字和下划线。");  

// 身份证号码验证
$.validator.addMethod("isIdCardNo", function(value, element) { 
  return this.optional(element) || isIdCardNo(value);    
}, "请输入正确的身份证号码。"); 

// IP地址验证   
$.validator.addMethod("ip", function(value, element) {    
  return this.optional(element) || /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(value);    
}, "请填写正确的IP地址。");

// 字符验证，只能包含中文、英文、数字、下划线等字符。    
$.validator.addMethod("stringCheck", function(value, element) {       
     return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);       
}, "只能包含中文、英文、数字、下划线等字符");   

$.validator.addMethod("isEnglish", function(value, element) {       
     return this.optional(element) || /^[A-Za-z]+$/.test(value);       
}, "只能包含英文字符");   

$.validator.addMethod("isChinese", function(value, element) {       
     return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);       
}, "只能包含中文字符"); 

// 匹配中文(包括汉字和字符) 
$.validator.addMethod("isChineseChar", function(value, element) {       
     return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);       
}, "请填写中文(包括汉字和字符) "); 
  
// 判断是否为合法字符(a-zA-Z0-9-_)
$.validator.addMethod("isRightfulString", function(value, element) {       
     return this.optional(element) || /^[A-Za-z0-9_-]+$/.test(value);       
}, "格式错误(可包括数字、字符、—_)");   

//判断是否为合法字符(a-zA-Z0-9_)
$.validator.addMethod("isRightfulString2", function(value, element) {       
     return this.optional(element) || /^[A-Za-z0-9_]+$/.test(value);       
}, "格式错误(可包括数字、英文字符、下划线)"); 

// 判断是否包含中英文特殊字符，除英文"-_"字符外
$.validator.addMethod("isContainsSpecialChar", function(value, element) {  
     var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);   
     return this.optional(element) || !reg.test(value);       
}, "含有中英文特殊字符"); 

$.validator.addMethod("isIntEqZero", function(value, element) { 
     value=parseInt(value);      
     return this.optional(element) || value==0;       
}, "整数必须为0"); 
  
$.validator.addMethod("isIntGtZero", function(value, element) { 
     value=parseInt(value);      
     return this.optional(element) || value>0;       
}, "整数必须大于0"); 
  
$.validator.addMethod("isIntGteZero", function(value, element) { 
     value=parseInt(value);      
     return this.optional(element) || value>=0;       
}, "整数必须大于或等于0");   

$.validator.addMethod("isIntNEqZero", function(value, element) { 
     value=parseInt(value);      
     return this.optional(element) || value!=0;       
}, "整数必须不等于0");  

$.validator.addMethod("isIntLtZero", function(value, element) { 
     value=parseInt(value);      
     return this.optional(element) || value<0;       
}, "整数必须小于0");  

$.validator.addMethod("isIntLteZero", function(value, element) { 
     value=parseInt(value);      
     return this.optional(element) || value<=0;       
}, "整数必须小于或等于0");  

$.validator.addMethod("isFloatEqZero", function(value, element) { 
     value=parseFloat(value);      
     return this.optional(element) || value==0;       
}, "浮点数必须为0"); 
  
$.validator.addMethod("isFloatGtZero", function(value, element) { 
     value=parseFloat(value);      
     return this.optional(element) || value>0;       
}, "浮点数必须大于0"); 
  
$.validator.addMethod("isFloatGteZero", function(value, element) { 
     value=parseFloat(value);      
     return this.optional(element) || value>=0;       
}, "浮点数必须大于或等于0");   

$.validator.addMethod("isFloatNEqZero", function(value, element) { 
     value=parseFloat(value);      
     return this.optional(element) || value!=0;       
}, "浮点数必须不等于0");  

$.validator.addMethod("isFloatLtZero", function(value, element) { 
     value=parseFloat(value);      
     return this.optional(element) || value<0;       
}, "浮点数必须小于0");  

$.validator.addMethod("isFloatLteZero", function(value, element) { 
     value=parseFloat(value);      
     return this.optional(element) || value<=0;       
}, "浮点数必须小于或等于0");  

$.validator.addMethod("isFloat", function(value, element) {       
     return this.optional(element) || /^[-\+]?\d+(\.\d+)?$/.test(value);       
}, "只能包含数字、小数点等字符"); 
 
$.validator.addMethod("isInteger", function(value, element) {       
     return this.optional(element) || (/^[-\+]?\d+$/.test(value) && parseInt(value)>=0);       
}, "匹配integer");  
 
$.validator.addMethod("isNumber", function(value, element) {       
     return this.optional(element) || /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);       
}, "匹配数值类型，包括整数和浮点数");  

$.validator.addMethod("isDigits", function(value, element) {       
     return this.optional(element) || /^\d+$/.test(value);       
}, "只能输入0-9数字");  

//身份证号码的验证规则
function isIdCardNo(num){ 
	var len = num.length, re; 
	if (len == 15){
		re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/); 
	} else if (len == 18){
		re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/); 
	}else {
        //alert("输入的数字位数不对。"); 
        return false;
    } 
	var a = num.match(re); 
	if (a != null){ 
		if (len==15){ 
			var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]); 
			var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
		} else { 
			var D = new Date(a[3]+"/"+a[4]+"/"+a[5]); 
			var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
		} 
		if (!B) {
        //alert("输入的身份证号 "+ a[0] +" 里出生日期不对。"); 
        return false;
    } 
	} 
	if(!re.test(num)){
        //alert("身份证最后一位只能是数字和字母。");
        return false;
    }
	return true; 
} 