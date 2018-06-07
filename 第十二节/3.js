const jade = require('jade');

console.log(jade.renderFile('./views/3.jade',{pretty: true,
    content: "<h2>你好呀</h2><p>啊是你发滴哈</p>"
}));