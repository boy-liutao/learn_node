//fs --File System 文件系统
const fs = require('fs');

//readFile(文件名,回调函数)
// fs.readFile('aaa.txt',function (err, data) {
//     // console.log(err);
//     if(err){
//         console.log('读取失败了');
//     }else{
//         // console.log(data);//输出二进制<Buffer 61 61 61 61 0d 0a>
//         console.log(data.toString()); //输出 aaaa
//     }
// })

//writeFile(文件名,内容,回调函数)
fs.writeFile("bbb.txt","bbbb",function (err) {
    console.log(err);
})
