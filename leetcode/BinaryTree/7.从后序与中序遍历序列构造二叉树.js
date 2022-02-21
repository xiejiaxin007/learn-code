/*
 * @author: xiejiaxin
 * @Date: 2022-02-21 20:04:05
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2022-02-21 12:43:07
 * @description: https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const postorder = [9,15,7,20,3];
const inorder = [9,3,15,20,7];
/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder.length === 0) {
        return null;
    }
    if (inorder.length === 1) {
        return new TreeNode(inorder[0]);
    }
    // 后序遍历，最后一个是根节点
    const last = postorder[postorder.length - 1];
    let root = new TreeNode(last);
    const index = inorder.findIndex(i => i === last);
    const inorder_left = inorder.slice(0, index);
    const inorder_right = inorder.slice(index + 1);
    const postinder_left = postorder.slice(0, index);
    const postinder_right = postorder.slice(index, postorder.length - 1);
    root.left = buildTree(inorder_left, postinder_left);
    root.right = buildTree(inorder_right, postinder_right);
    return root;
};
var forLastFn = function(root) {
    if (root === null) {
        return
    }
    forFn(root.left)
    forFn(root.right)
    console.log(root.val)
}
var forInFn = function(root) {
    if (root === null) {
        return
    }
    forFn(root.left)
    // 中序遍历
    console.log(root.val)
    forFn(root.right)
}
console.log(buildTree(inorder, postorder))