/*
 * @author: xiejiaxin
 * @Date: 2021-10-18 22:07:00
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2024-07-19 14:53:12
 * @description: file content
 */
// ! https://download.csdn.net/blog/column/12444886/134437782
// patch函数：对比节点，vnode（新节点）、oldVnode（老节点）
// vnode有text（表示vnode没有children）

function patchVnode(oldVnode, vnode) {
    if (isUnDef(vnode)) {
        if (isDef(oldVnode)) {
            // 销毁
        }
        return;
    }
    // 老节点不存在，则说明是root
    if (isUnDef(oldVnode)) {
        createElm();
    }
    // 如果新节点没有text，则说明有children，需要继续进行比较
    if (isUnDef(vnode.text)) {
        if(isDef(oldVnode.text)) {
            // 清空oldVnode的text，然后把vnode的children生成放过去
        } else if (isDef(oldVnode.children)) {
            if (oldVnode.children !== vnode.children) {
                updateChildren(oldVnode.children, vnode.children);
            }
        }
    } else if (vnode.text !== oldVnode.text) {
        // 如果新节点有text，则说明新节点没有children
        if (isDef(oldVnode.children)) {
            // 老节点有children，则需要把老节点的子节点清空，然后把新节点的text填充到老节点
        } else {
            // vnode的text填充到oldVnode.text
        }
    }
}

// 进行diff
function updateChildren() {}
// 不存在
function isUnDef() {}
// 存在
function isDef() {}
// 创建dom节点
function createElm() {}