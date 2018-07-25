const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const mysql = require('mysql');

const db = mysql.createPool({host: 'localhost',user: 'root',password: 'root',database: 'project1',port: 3306});


var server =express();

server.listen(8080);

// 1.解析cookie
server.use(cookieParser('adf4555affasfdfa1354adf45f2f45as'));

// 2.使用session
var arr = [];
for (let i=0;i<1000000;i++) {
    arr.push("keys_"+Math.random());
}
server.use(cookieSession({name: 'zns_sess_id',keys: arr,maxAge: 20*3600*1000}));
// 3.post数据

server.use(bodyParser.urlencoded({extended: false}));

//4.配置模版引擎
//输出什么东西
server.set('view engine','html');
// server.set('view engine','excal');

//那种模板引擎
server.set('views','./template');
//模板放在哪
server.engine('html',consolidate.ejs);
// server.engine('excal',consolidate.jade);

//接收用户请求
server.get('/', (req, res,next) =>{
    db.query("SELECT * FROM banner",(err, data)=>{
        if(err){
            console.log(err);
            res.status(500).send('database err').end();
        }else {
            // console.log(data);
            // res.render('index.ejs',{banners: data});
            res.banners = data;
            next();
        }
    });
});
server.get('/', (req, res,next) =>{
    db.query("SELECT id,title,fu_title FROM artical",(err, data)=>{
    if(err){
        console.log(err);
        res.status(500).send('database err').end();
    }else {
        // console.log(data);
        // res.render('index.ejs',{banners: data});
        res.news = data;
        next();
      }
    });
});
server.get('/', (req, res,next) =>{
    res.render('index.ejs',{banners: res.banners,news: res.news});
});
server.get('/artical', (req, res) =>{
    if(req.query.id){
        if(req.query.act=='like'){
            db.query(`update artical set n_like=n_like+1 where id=${req.query.id}`,(err,data)=>{
                if(err){
                    res.send(500).send('db err').end();
                }else {
                    db.query(`select * from artical where id=${req.query.id}`,(err,data)=>{
                    if(err) {
                        res.status(500).send("DATABASE ERR").end();
                    }else{
                        if(data.length==0){
                            res.status(404).send("您请求的文章找不到").end();
                        }else{
                            // artical_data: data[0]
                            var articalData = data[0];
                            articalData.content = articalData.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                            res.render("content.ejs",{artical_data:articalData})
                        }
                    };
                });
            }
         });
        }else {
                db.query(`update artical set n_like=n_like+1 where id=${req.query.id}`,(err,data)=>{
                    if(err){
                        res.send(500).send('db err').end();
                    }else {
                        db.query(`select * from artical where id=${req.query.id}`,(err,data)=>{
                        if(err) {
                            res.status(500).send("DATABASE ERR").end();
                        }else{
                            if(data.length==0){
                            res.status(404).send("您请求的文章找不到").end();
                        }else{
                            // artical_data: data[0]
                            var articalData = data[0];    
                            articalData.content = articalData.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                            res.render("content.ejs",{artical_data:articalData})
                        }
                        };
                    });
                }
            });
        }
    }else {
        res.status(404).send("您请求的文章找不到").end();
    };
});
// 4.static数据

server.use(static('./www'));