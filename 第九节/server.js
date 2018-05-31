const express = require('express');
const bodyParser = require('body-parser');

var server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({
    extended: true,      //扩展模式 , true扩展  false 不扩展
    limit: 2*1024*1024*1024//(2*2k,2M,2G)  //限制大小
}));

server.use('/',function (req, res) {
    console.log(req.body);
});

//res.query  GET数据  res.body   POST数据