const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();

server.use(cookieParser('asdqwezxc'));

server.use('/',function (req, res) {
    //secret 不能达到完全加密状态,但是能达到验签状态,如果有修改就不接受
    req.secret='asdqwezxc';
    res.cookie('user','xiaotao',{signed: true});
    res.send('ok');

    console.log('无签名cookie',req.cookies);
    console.log('签名cookie',req.signedCookies);
})

server.listen(8080);