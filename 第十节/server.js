/*
* cookie
* 获取 直接 res.cookie('user','xiaotao',{signed: true}) signed是否验签
* 接受cookie 使用中间件cookieParser
* 删除cookie res.clearCookie('user)
*
* node 加密中间件 cookie-encrypter
*
* */

const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();

server.use(cookieParser());

server.use('/',function (req, res) {
    //maxAge 是30天  1天是1*24*3600*1000   以毫秒为单位
    // res.cookie('user','xiaotao',{path:'/aaa',maxAge:30*24*3600*1000});
    // res.send('oi')

    console.log(req.cookies);
    res.send('oi')
})

server.listen(8080);


