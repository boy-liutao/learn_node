const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
    //req.url=>'/index.html'
    //读取=>'./www/index.html'
    // './www'+req.url
    var file_name = './www'+req.url;
    fs.readFile(file_name,function (err, data) {
        if (err) {
            res.write('404');
        }else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(8080);

//这时候不用重启服务器,因为没有写在服务里面在,磁盘里面写的(./www),可以随意增添,只要更改路径即可完成操作