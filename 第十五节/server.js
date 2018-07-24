const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');


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

//4.配置模版引擎
//输出什么东西
server.set('view engine','html');
// server.set('view engine','excal');

//那种模板引擎
server.set('views','./views');
//模板放在哪
server.engine('html',consolidate.ejs);
// server.engine('excal',consolidate.jade);

//接收用户请求
server.get('/index',function (req, res) {
    // if(res.session.userid){ //登录过
    //     res.render('1.ejs',{name: 'xiaotao'});
    // }else {                 //没有登录
    //     res.render('login.ejs',{});
    // }
    res.render('1.ejs',{name: 'xiaotao'});
})

// 4.static数据

server.use(static('./www'));