const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const jade = require('jade');


var server =express();

server.listen(8080);

// 1.解析cookie
server.use(cookieParser('adf4555affasfdfa1354adf45f2f45as'));

// 2.使用session
var arr = [];
for (let i=0;i<1000000;i++) {
    arr.push("keys_"+Math.random());
}
server.use(cookieSession({name: 'zns_sess_id',keys: arr,maxAge: 20*3600*1000}));
// 3.post数据

server.use(bodyParser.urlencoded({extended: false}));

//用户请求
server.use('/',function (req,res,next) {
    console.log(req.query,req.bodu,req.cookies,req.session);
})

// 4.static数据

server.use(static('./www'));