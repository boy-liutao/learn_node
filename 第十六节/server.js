const mysql = require('mysql');

//连接
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    prot: 3306,
    database: 'liutao'
});

//查询
db.query("SELECT * FROM `user_info`",(err,data)=>{
    if(err)
        console.log("出错了",err);
    else
        console.log("成功了");
        console.log(JSON.stringify(data));


});