
import {setAttribute} from './dom'
/**
 * 将虚拟dom 变真实dom
 * @param {*} vnode 将虚拟dom
 * @return 返回dom
 */
 function _render (vnode) {
     console.log(vnode);
    // 1. 使用递归方法 将结点转成dom, 子节点递归，出口就是文本节点
    // 2. 节点类型 三种：
    //      文本节点 createTextNode
    //      标签节点 createElement attr children 设置(递归_render)
    // 3. Component render(render jsx)
    //      render
    if (vnode === undefined || vnode === null || typeof vnode === 'boolean') {
        vnode = '';
    }
    if (typeof vnode === 'string') {
        let textNode = document.createTextNode(vnode);
        return textNode
    }
    const dom = document.createElement(vnode.tag);
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            const value = vnode.attrs[key];
            setAttribute(dom, key, value)
        })
    }
    if (vnode.children) {
        vnode.children.forEach(child => render(child, dom))
    }
    return dom
}
export function render (vnode, container) {
    // console.log(vnode, container)
    return container.appendChild(_render(vnode));
}
