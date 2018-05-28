const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'liutao',
    port : '3306',
});

//连接数据库
connection.connect(function (err) {
    if (err) {
        console.log('连接失败'+err);
        return;
    }
    console.log('conection connect succedd');
});

var userAddsql = 'insert into user_info(user,pass) values(?,?)';
var param = [];

var users = {}; //{"小涛":"123456","xiaohei":"123456"}


var server = http.createServer(function (req, res) {
    //解析数据
    var str = '';
    req.on('data',function (data) {
        str += data;
    });
    req.on('end',function () {
        var obj = urlLib.parse(req.url,true);

        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);

        //区分 是访问接口还是文件
        if (url == '/user') {      //接口
            switch (GET.act) {
                case 'reg':
                    //1.检查用户名是否有了
                    param.push(GET.user);
                    connection.query('select user from user_info where user = ?',param,function (err, data) {
                        if (err) {
                            console.log('select'+err);
                            return;
                        }
                        if(data){
                            res.write('{"ok":false,"msg":"此用户已存在"}');
                            res.end();
                        }else {
                            //2.插入users
                            users[GET.user] = GET.pass;
                            console.log(users);
                            param.push(GET.user,GET.pass);
                            connection.query(userAddsql,param,function (err, data) {
                                if (err) {
                                    console.log('insert err'+err);
                                    return;
                                }
                                console.log('insert success');
                                connection.end(function (err) {
                                    if (err) {
                                        console.log('关闭数据库'+err);
                                        return;
                                    }
                                    console.log('connection end succedd');
                                })
                                param = [];
                            })
                            console.log(param);


                            res.write('{"ok":true,"msg":"注册成功"}');
                            res.end();
                        }
                    });
                    break;
                case 'login':
                    //1.检查用户是否存在

                    if (users[GET.user]==null) {
                        res.write('{"ok":false,"msg":"此用户不存在"}');
                        res.end();
                    }else if (users[GET.user] != GET.pass) {
                        res.write('{"ok":false,"msg":"用户名或密码错误"}');
                        res.end();
                    }else {
                        res.write('{"ok":true,"msg":"登入成功"}');
                        res.end();
                    }
                    //2.检查用户密码
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知的act"}');
                    res.end();
            }
        }else {                    //文件
            //对文件的访问
            var file_name = './www'+url;
            fs.readFile(file_name,function (err, data) {
                if(err){
                    res.write('404');
                }else {
                    res.write(data);
                }
                res.end();
            });
        }
    });

});

server.listen(8080);