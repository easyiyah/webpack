var m1 = require('./module/module1');//不用写文件后缀名.js 默认添加
var m2 = require('./module/module2');
var m3 = require('./module/module3');
var u = require('uniq');//unique是数组排序方法需要提前下载

m1.foo();
m2();
m3.foo();
console.log(u(m3.arr));
/*
浏览器不兼容CommonJs，node后端
用git bash的命令 配合node
$ node app.js 可以输出
module1
undefined
module3

需要转换
npm install browserify -g
//安装 browserify         -g全局
browserify app.js -o bundle.js
//把app.js 转换成bundle.js
在html中引入scr= bundle.js
运行html查看

//安装uniq包
npm install uniq -g
//从新生成bundle.js文件
browserify app.js -o bundle.js
运行html查看

CommonJs为服务器端而生，采用的同步加载方式。
因此不适用浏览器。
因为浏览器需要到服务器加载文件，
请求时间远大于本机读取的时间，
倘若文件较多，网络迟缓就会导致页面瘫痪，
所以浏览器更希望能够时间异步加载的方式。
 */ 