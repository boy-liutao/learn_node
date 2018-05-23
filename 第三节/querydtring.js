const querystring = require('querystring');

var json =  querystring.parse("user=liutao&pass=123456&age=25");

console.log(json);