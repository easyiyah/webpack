// AMD的核心思想就是通过define来定义一个模块，然后使用require来加载一个模块。
define(function(){
	var  name = 'demo';
	function getName(){
		return name;
	}
	return {getName:getName}//属性名与属性值相同时 直接写{getName}
})