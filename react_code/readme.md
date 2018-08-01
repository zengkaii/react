1. 虚拟DOM? VNode Virtual DOM
    mvvm 封装了dom层<br>
    原因 : dom 太耗性能<br>
    vnode + diff 算法来解决<br>
    react jsx 语法<br>
    用js对象来描述html结构

JSX的背后隐含着VNode 的真相<br>
React.createElement(<br>
    h1 第一个参数，ele = document.createElement()<br>
    attributes 第二个参数 ele.setAttribute(key,val),<br>
    children 第三个参数<br>
        文本节点 textnode<br>
        node 递归一下<br>
)<br>
虚拟DOM 描述 JSON
`<h1 className="title">标题</h1>`<br>
VNode = {                         <br>
    tag:h1               <br>
    attrs:{                 <br>
        class: "title"        <br>
    },                       <br>
    children:[               <br>
        '标题',                <br>
        递归 VNode...            <br>
    ]                         <br>
}<br>