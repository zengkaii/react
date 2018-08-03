1. jsx(render-jsx-plugin)->vnode(createElement)->DOM(render)

2. Component(render的第三种方式，react-jsx vnode.tag function Counter) -> 标签化的组件     <br>
    -> Counter(extends) -> Component类 -> render(jsx) -> reactDOM.render()

3. 响应式setState() 为了达到DOM的更新，将整个DOM替换掉了。 <br>
    a. 新生成整个DOM树，重新挂载  假设有100行 DOM HTML    <br>
    b. 只将setState 关联的那一小段DOM， 在原来的基础上做一下修改，将修改反映到DOM上，  修改1行  <br>
    n:1  html树， DOM开销是一般计算开销的100-1000倍                 <br>
    重绘replaceChild            <br>
    重排                        <br>

    React DOM diff算法                  <br>
    
    需求是：减少DOM操作                 <br>
    setState  对应的DOM部分                      <br>
    setState   返回一个新的vnode -> 跟旧的DOM 对比  <br>
    将新的内存 (虚拟)   DOM  旧的DOM    对比            <br>
    都是一棵树，采用算法，就可以比较出差异点，在相差的地方，进行真实DOM的操作