/*
 * @Author: xiejiaxin
 * @Date: 2021-11-17 16:19:11
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-11-17 16:39:36
 * @Description: https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 * @FilePath: \learn-code\leetcode\12.填充二叉树.js
 */
// 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
// struct Node {
//     int val;
//     Node * left;
//     Node * right;
//     Node * next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
// 初始状态下，所有 next 指针都被设置为 NULL。

var connect = function (root) {
    if (root === null) {
        return null;
    }
    connectTwoNode(root.left, root.right);
    return root;
};

var connectTwoNode = function(node1, node2) {
    if (node1 === null || node2 === null) {
        return;
    }
    node1.next = node2;
    connectTwoNode(node1.left, node1.right);
    connectTwoNode(node2.left, node2.right);
    connectTwoNode(node1.right, node2.left);
}
console.log(connect(node));