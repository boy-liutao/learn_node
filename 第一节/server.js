const http = require('http');

//request 输入-请求信息  response输出-输出的东西
var server = http.createServer(function (req,res) {
    // console.log('有人来了');
    // console.log(req.url);

    switch (req.url) {
        case '/1.html':
            res.write("111111");
            break;
        case '/2.html':
            res.write("222222");
            break;
        default:
            res.write("404");
            break
    }
    // res.write("abc"); //输出东西
    res.end();  //结束东西
});

//监听
//端口
server.listen(8080);