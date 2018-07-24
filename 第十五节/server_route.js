const express=require('express');

var server=express();

//目录1  /user
var routeUser = express.Router();

routeUser.get('/1.html',function(req,res){
    res.send('user1');
});
routeUser.get('/2.html',function(req,res){
    res.send('user222222');
});

server.use('/user',routeUser);
//目录2  /article
var articleRouter = express.Router();
server.use('/article',articleRouter);

articleRouter.get('/3.html',function (req, res) {
    res.send('33333')
})
articleRouter.get('/4.html',function (req, res) {
    res.send('44444')
})
server.listen(8080);