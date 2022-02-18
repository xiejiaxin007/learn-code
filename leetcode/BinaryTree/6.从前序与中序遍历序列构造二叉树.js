/*
 * @author: xiejiaxin
 * @Date: 2022-02-16 20:04:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-18 14:52:26
 * @description: https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const preorder1 = [1,2,3];
const inorder1 = [3,2,1];
const preorder2 =[1,2,5,4,6,7,3,8,9];
const inorder2 = [5,2,6,4,7,1,8,3,9];
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null
    }
    // 容易引起死循环
    if (preorder.length === 1) {
        return new TreeNode(preorder[0])
    }
    // 找到根节点，节点前面的就是左边的，后面的就是右节点的
    const first = preorder[0];
    const root = new TreeNode(first);
    const sep = inorder.findIndex(i => i == first);
    const left_in = inorder.slice(0, sep);
    const left_pre = preorder.slice(1, left_in.length + 1);
    const right_in = inorder.slice(sep + 1);
    const right_pre = preorder.slice(sep + 1);
    root.left = buildTree(left_pre, left_in);
    root.right = buildTree(right_pre, right_in);
    return root;
};
var forPreFn = function(root) {
    if (root === null) {
        return
    }
    // 前序遍历
    console.log(root.val)
    // reorder.add(root.val)
    forFn(root.left)
    forFn(root.right)
}
var forInFn = function(root) {
    if (root === null) {
        return
    }
    forFn(root.left)
    // 中序遍历
    console.log(root.val)
    // inorder.add(root.val)
    forFn(root.right)
}
console.log(buildTree(preorder1, inorder1))