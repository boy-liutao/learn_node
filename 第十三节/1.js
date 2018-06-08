const ejs = require('ejs');

ejs.renderFile('./views/1.ejs',{name: 'xiaotao'},function (err, data) {
    console.log(data);
})




/*
* 1. ejs 输出东西
*   <%= 变量 %>
*   在renderFile里面 变量 {变量名: '属性'}
*
* 2.ejs 和原生大致相同,原生怎么写ejs就怎么写
*
*   不过输出的时候会有变化
*   <%
        var str="<div></div>"
    %>

    <%- str %>  这里不用等号 用横杠 - 不然会输出转意的字符

   3. ejs 根据类型引入不同的样式 需要使用include 但是include不是js 语法 需要使用 <% include 路径 %> 不支持使用变量
*
* */