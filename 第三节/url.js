const urlLib = require('url');

//urlLib(url,true)  别忘记了带true  这样就会有pathname query 这些东西 可以直接使用
var obj = urlLib.parse("http://www.baidu.com/index?a=12&b=5",true);

// console.log(obj);
console.log(obj.pathname,obj.query);