const jade = require('jade');

var str = jade.render('html');

console.log(str);

/*
* 1.根据缩进，规定层级
* 2.属性写法 <script src='a.js></script>
*       script(src="a.js")
*       多种属性写入,使用逗号,分隔
* 3.内容写法 <a href='http://www.baidu.com'>百度</a>
*       a(href="http://www.baidu.com") 百度
*
* 4. 设置style样式(两种写法)
*   1.div(style="width:200px;height:200px;background:red")
*   2.div(style={width:'200px',height:'200px';background: 'red'})
*
* 5. 设置class样式(两种写法)
*   1.div(class="aaa left-wrap active")
*   2.div(class= ['aaa','left-wrap','active'])
*
*
* 6. 简写(编译的话可直接是正常的代码)
*   div.box
*   div#div1
*   div&attributes({title: 'aaa',id: 'div1'})
*
*
*
*
* */