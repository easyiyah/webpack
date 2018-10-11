define(['demo'],function(m1){
	var msg = 'index';
	function showMsg(){
		console.log(msg+','+m1.getName());
	}
	return {showMsg};
})
//[]为当前依赖的模块