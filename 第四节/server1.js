const http = require('http');
const querystring = require('querystring');

//post 很大 --- 需要分段
//data 每当有一段数据到达的时候就会发生一次(会发生很多次)
//end  数据全部到达时候(只发生一次)
http.createServer(function (req, res) {
    //post--req
    var str = "";//接收数据
    var i = 0;
    req.on('data',function (data) {
        console.log(`第${i++}次收到数据`);
        str += data;
    });
    req.on('end',function () {
       var POST = querystring.parse(str);
       console.log(POST);
    });
}).listen(8080);