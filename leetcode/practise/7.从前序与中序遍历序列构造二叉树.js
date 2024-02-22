/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-22 14:04:52
 * @desc: https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let arr1 = [3, 9, 20, 15, 7],
  arr2 = [9, 3, 15, 20, 7];
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {};

console.log(buildTree(arr1, arr2));
