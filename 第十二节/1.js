const jade = require('jade');

console.log(jade.renderFile('./views/1.jade',{pretty: true}));



/*
*  1.正常写同级标签 是 <abc></abc>
*       如果想原样输出需要前面添加 | 就可以原样输出  abc
*  2.script 下面写方法 两种方式
*       1.  可以使用竖线
*           | window.onload = function() {
            |    var btn = document.getElementById('div');
            |    btn.onclick=function(){
            |       alert('aaaa');
            |    }
            |}

        2. 在script后面添加一个点 .  下一级所有内容都原样输出,不会编译
        script.
             window.onload = function() {
                var btn = document.getElementById('div');
                btn.onclick=function(){
                   alert('aaaa');
                }
            }

        3. 在jade文件中 script 中
*           script
*               include  a.js
*
*
*
*       4. 变量
*           我的名字是: #{name}
*               在js页面 {pretty: true,name:"小涛"}
*
*       5. jade文件中
*           html
*               head
*               body
*               -var a=12;
*               -var b=5;
*               div 结果: #{a+b}
*          前面添加横杠 -  代表编译都不编译 我就是一段代码
*
*
*        6.在js页面 {pretty: true,a:'12',b:'5'}
*           在jade页面
*               span #{a}
*               span #{b}
*            可以简写
*               span=a
*               span=b
*
*
*
*        7.想要输出内容
*           不想标签被编译 div!=content  前面加个 叹号 ! 就可以原样 输出
*
*        8.switch和原来的不同
*
*           -var a =3
*           case a
*               when 0
*                   div aaa
*               when 1
*                   div bbb
*               when 2
*                   div ccc
*               default
*                   不靠谱
* */