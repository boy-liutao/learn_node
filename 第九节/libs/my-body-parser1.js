//扩展body-parser 更深一步中间件

const querystring = require('querystring');

module.exports = function () {
    return function (req, res, next) {
        var str = '';
        req.on('data',function (data) {
            str += data;
        });
        req.on('end',function () {
            req.body = querystring.parse(str);
            next();
        });
    };
}
