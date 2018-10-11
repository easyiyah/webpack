(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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




 */ 
},{"./module/module1":2,"./module/module2":3,"./module/module3":4,"uniq":5}],2:[function(require,module,exports){
module.exports = {
	msg:'module1',
	foo:function(){
		console.log(this.msg);
	}
}
},{}],3:[function(require,module,exports){
module.exports = function(){
		console.log('module2');
	}
	
},{}],4:[function(require,module,exports){
exports.foo = function(){
	console.log('module3');
}
exports.arr = [1,4,2,3];
},{}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
