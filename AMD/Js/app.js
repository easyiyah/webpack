(function(){
	require.config({//设置位置
		paths:{
			index:'../module/index',//斜杠两个点为上级文件夹
			demo:'../module/demo',
			jquery:'../libs/jquery'
		}
	})
	require(['index','jquery'],function(index){
		index.showMsg();
		$('body').css('backgroundColor','red');
	})
})();