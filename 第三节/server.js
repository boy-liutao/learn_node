const http = require('http');

http.createServer(function (req, res) {
    // req 获取前台的请求数据
    // console.log(req.url)
    var GET = {};

    if (req.url.indexOf('?')!=-1) {
        var arr = req.url.split("?");
        //arr[0]  地址
        var url = arr[0];
        //arr[1]  数据

        var arr2 = arr[1].split('&');
        //arr2=>['user=liutao','pass=123456']

        for(var i=0;i<arr2.length;i++) {
            var arr3 = arr2[i].split('=');
            //arr3[0]=>名字  'user'
            //arr3[1]=>数据  'liutao'
            GET[arr3[0]] = arr3[1];
        }
    }else {
        var url = req.url;
    }
    console.log(url,GET);


    res.write('aaa');
    res.end();

    // res
}).listen(8080);