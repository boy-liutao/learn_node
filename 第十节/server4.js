const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

var arr =[];

for (var i=0;i<100000;i++) {
    arr.push('sig_'+Math.random());
}

server.use(cookieParser());
server.use(cookieSession({
    name: 'sess',
    // keys: ['aaa','bbb','ccc'],
    keys: arr,
    maxAge: 2*3600*1000  //2小时
}));

server.use('/',function (req, res) {

    // console.log(req.session);
    if (req.session['count']== null) {
        req.session['count'] =1 ;
    }else {
        req.session['count']++;
    }

    console.log(req.session['count']);

    /*
    * 删除 session  使用delete res.session
    * */
    res.send('ok');
})

server.listen(8080);