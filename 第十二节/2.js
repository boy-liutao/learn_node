const jade = require('jade');

console.log(jade.renderFile('./views/2.jade',{pretty: true,
    arr: ['aaa','bbbb','3216','asdfih','44454585']
}));