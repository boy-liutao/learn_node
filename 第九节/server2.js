const express = require('express');
// const querystring = require('querystring');
// const bodyParser = require('body-parser');
const bodyParser2 = require('./libs/my-body-parser');

var server = express();
server.listen(8080);

/*
server.use(function (req, res, next) {
    var str = '';
    req.on('data',function (data) {
        str += data;
    });
    req.on('end',function () {
        req.body = querystring.parse(str);
        next();
    })
});
*/

// server.use(bodyParser.urlencoded({}));

server.use(bodyParser2);


server.use('/',function (req, res) {
    console.log(req.body);
})