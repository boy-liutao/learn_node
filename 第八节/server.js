const express = require('express');

var server = express();

// server.use('/a.html',function (req, res) {
//     res.send('123');
//     res.end();
// });
//
// server.use('/b.html',function (req, res) {
//     res.send('456');
//     res.end();
// });

// server.get('/',function () {
//     console.log("有GET")
// });
//
// server.post('/',function () {
//     console.log("有POST")
// });
server.use('/',function (req, res) {
    console.log('use');
});
server.listen(8080);