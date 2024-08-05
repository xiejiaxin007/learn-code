/*
 * @author: xiejiaxin
 * @Date: 2021-10-18 16:44:19
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2024-07-19 14:53:19
 * @description: file content
 */
// ! https://download.csdn.net/blog/column/12444886/134437782
// vue的diff算法
// 基于虚拟dom的比较算法，其实就是把每一个节点，换成虚拟dom的写法，每一个虚拟dom对应tag、data、children、elm等属性

// patch方法：主要是找到判断是否是同一个层级的dom，如果是，才会进行真正的diff算法，如果不是，则直接删除就节点，创建新节点
// 有一个比较dom是否是同一个节点的方法：sameVnode，判断标准就是key值相同、tag相同、注释是否相同、data是否定义、如果是input则type必须相同
// 如果相同，才会进行下一步修改：patchVnode
// patchVnode方法中，会判断如果是静态节点什么的，就直接把新节点赋值给旧节点就行
// -- 如果都有子节点，则递归往下
// -- 如果新节点有子，旧的没有，则直接清空旧的文本，然后加入新的
// -- 如果新没有子，旧有，则直接把旧的移除
// -- 如果新和旧都没有，则直接替换文本即可
