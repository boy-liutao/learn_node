const ejs = require('ejs');

ejs.renderFile('./views/3.ejs',{json: {arr: [
    {user: 'xiaotao',pass: '123456'},
    {user: 'xiaotao1',pass: '1234567'},
    {user: 'xiaotao2',pass: '12345678'},
    {user: 'xiaotao3',pass: '123456789'},
]}},function (err, data) {
    console.log(data);
})